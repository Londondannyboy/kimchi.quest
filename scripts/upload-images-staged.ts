/**
 * Upload product images using Shopify's stagedUploadsCreate API
 */

import 'dotenv/config'
import * as fs from 'fs'
import * as path from 'path'

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || 'izmiad-nu.myshopify.com'
const ADMIN_API_TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN
const API_VERSION = '2024-01'

if (!ADMIN_API_TOKEN) {
  console.error('Error: SHOPIFY_ADMIN_API_TOKEN environment variable is not set')
  process.exit(1)
}

const productImages: Record<string, string> = {
  'classic-napa-cabbage-kimchi': 'Kimchi_B004_23-04-25.jpg',
  'classic-kimchi-2-pack': 'Kimchi_B004_23-04-25.jpg',
  'classic-kimchi-3-pack': 'Kimchi_B004_23-04-25.jpg',
  'classic-kimchi-6-pack': 'Kimchi_B004_23-04-25.jpg',
  'spicy-kimchi': 'Kimchi_B006_30-11-20.jpg',
  'mild-kimchi': 'Kimchi_B012_24-04-21.jpg',
  'vegan-kimchi': 'Kimchi_B014_02-04-21.jpg',
}

async function adminFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const response = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': ADMIN_API_TOKEN!,
      },
      body: JSON.stringify({ query, variables }),
    }
  )

  const json = await response.json()

  if (json.errors) {
    console.error('Admin API errors:', JSON.stringify(json.errors, null, 2))
    throw new Error(json.errors[0]?.message || 'Admin API error')
  }

  return json.data
}

async function getProducts() {
  const result = await adminFetch<{
    products: {
      edges: Array<{
        node: {
          id: string
          handle: string
          title: string
          featuredImage: { url: string } | null
        }
      }>
    }
  }>(`
    query {
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            featuredImage { url }
          }
        }
      }
    }
  `)

  return result.products.edges.map(e => e.node)
}

async function createStagedUpload(filename: string, fileSize: number, mimeType: string) {
  const result = await adminFetch<{
    stagedUploadsCreate: {
      stagedTargets: Array<{
        url: string
        resourceUrl: string
        parameters: Array<{ name: string; value: string }>
      }>
      userErrors: Array<{ field: string[]; message: string }>
    }
  }>(`
    mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `, {
    input: [{
      filename,
      mimeType,
      fileSize: fileSize.toString(),
      resource: 'PRODUCT_IMAGE',
      httpMethod: 'POST'
    }]
  })

  if (result.stagedUploadsCreate.userErrors.length > 0) {
    throw new Error(result.stagedUploadsCreate.userErrors[0].message)
  }

  return result.stagedUploadsCreate.stagedTargets[0]
}

async function uploadToStagedTarget(
  stagedTarget: { url: string; parameters: Array<{ name: string; value: string }> },
  filePath: string
) {
  const fileBuffer = fs.readFileSync(filePath)

  // Build form data
  const formData = new FormData()
  for (const param of stagedTarget.parameters) {
    formData.append(param.name, param.value)
  }
  formData.append('file', new Blob([fileBuffer]), path.basename(filePath))

  const response = await fetch(stagedTarget.url, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`)
  }

  return response
}

async function attachImageToProduct(productId: string, resourceUrl: string, altText: string) {
  const result = await adminFetch<{
    productCreateMedia: {
      media: Array<{ id: string }> | null
      mediaUserErrors: Array<{ field: string[]; message: string }>
    }
  }>(`
    mutation productCreateMedia($productId: ID!, $media: [CreateMediaInput!]!) {
      productCreateMedia(productId: $productId, media: $media) {
        media {
          ... on MediaImage {
            id
          }
        }
        mediaUserErrors {
          field
          message
        }
      }
    }
  `, {
    productId,
    media: [{
      originalSource: resourceUrl,
      alt: altText,
      mediaContentType: 'IMAGE'
    }]
  })

  if (result.productCreateMedia.mediaUserErrors.length > 0) {
    throw new Error(result.productCreateMedia.mediaUserErrors[0].message)
  }

  return result.productCreateMedia.media
}

async function main() {
  console.log('='.repeat(50))
  console.log('Uploading product images via staged uploads...')
  console.log('='.repeat(50))
  console.log('')

  const products = await getProducts()

  for (const product of products) {
    const imageName = productImages[product.handle]
    if (!imageName) {
      console.log(`Skipping ${product.title} - no image configured`)
      continue
    }

    if (product.featuredImage) {
      console.log(`Skipping ${product.title} - already has image`)
      continue
    }

    const imagePath = path.join(process.cwd(), 'public', 'Assets', imageName)
    if (!fs.existsSync(imagePath)) {
      console.log(`Skipping ${product.title} - image not found: ${imagePath}`)
      continue
    }

    console.log(`Processing ${product.title}...`)

    try {
      const stats = fs.statSync(imagePath)

      // Step 1: Create staged upload
      console.log(`  Creating staged upload...`)
      const stagedTarget = await createStagedUpload(imageName, stats.size, 'image/jpeg')

      // Step 2: Upload file to staged target
      console.log(`  Uploading to staged target...`)
      await uploadToStagedTarget(stagedTarget, imagePath)

      // Step 3: Attach image to product
      console.log(`  Attaching to product...`)
      await attachImageToProduct(product.id, stagedTarget.resourceUrl, product.title)

      console.log(`  Done!`)
    } catch (error) {
      console.error(`  Failed:`, error)
    }

    console.log('')
  }

  console.log('='.repeat(50))
  console.log('Done!')
  console.log('='.repeat(50))
}

main().catch(console.error)
