/**
 * Set up blog database schema and seed with initial articles
 */

import 'dotenv/config'
import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

async function setupSchema() {
  console.log('Creating articles table...')

  await sql`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(500) NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      featured_image VARCHAR(500),
      author VARCHAR(255) DEFAULT 'Ollie''s Kimchi',
      category VARCHAR(100) NOT NULL,
      tags TEXT[] DEFAULT '{}',
      published BOOLEAN DEFAULT false,
      published_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  console.log('Table created!')
}

async function seedArticles() {
  console.log('Seeding initial articles...')

  const articles = [
    {
      slug: 'what-is-kimchi',
      title: 'What is Kimchi? A Complete Guide to Korea\'s Favourite Fermented Food',
      excerpt: 'Discover the history, health benefits, and cultural significance of kimchi - Korea\'s most beloved fermented vegetable dish that\'s taking the world by storm.',
      content: `
<p>Kimchi is more than just a side dish – it's a cornerstone of Korean cuisine and culture that dates back over 2,000 years. This fermented vegetable dish, most commonly made with napa cabbage, has become a global phenomenon, prized for its complex flavours and impressive health benefits.</p>

<h2>The History of Kimchi</h2>
<p>The earliest forms of kimchi were simple salted vegetables, created as a way to preserve food through the harsh Korean winters. The addition of chilli peppers – now a defining characteristic – only came in the 16th century after Portuguese traders introduced them to Korea.</p>

<h2>Health Benefits</h2>
<p>Kimchi is a nutritional powerhouse:</p>
<ul>
  <li><strong>Probiotics:</strong> The fermentation process creates beneficial bacteria that support gut health</li>
  <li><strong>Vitamins:</strong> Rich in vitamins A, B, and C</li>
  <li><strong>Antioxidants:</strong> Contains compounds that may help reduce inflammation</li>
  <li><strong>Low Calorie:</strong> A flavourful way to add nutrition without many calories</li>
</ul>

<h2>How Kimchi is Made</h2>
<p>Traditional kimchi-making involves salting napa cabbage, rinsing it, and then coating it with a paste made from:</p>
<ul>
  <li>Gochugaru (Korean red pepper flakes)</li>
  <li>Garlic</li>
  <li>Ginger</li>
  <li>Fish sauce or salted shrimp</li>
  <li>Spring onions</li>
</ul>
<p>The mixture is then packed into jars and left to ferment, developing its signature tangy, spicy, umami-rich flavour.</p>

<h2>Why We Love Making Kimchi</h2>
<p>At Ollie's Kimchi, we're passionate about honouring this ancient tradition while making it accessible to everyone. Each jar is handcrafted in small batches, using the freshest ingredients and time-tested techniques. It's not just food – it's alive!</p>
      `,
      featured_image: '/Assets/Kimchi_B004_23-04-25.jpg',
      category: 'Education',
      tags: ['kimchi', 'fermentation', 'korean food', 'probiotics', 'health'],
    },
    {
      slug: 'health-benefits-of-fermented-foods',
      title: 'The Science Behind Fermented Foods: Why Your Gut Will Thank You',
      excerpt: 'From improved digestion to better immunity, discover why fermented foods like kimchi are being hailed as superfoods by nutritionists worldwide.',
      content: `
<p>Fermented foods have been part of human diets for thousands of years, but modern science is only now uncovering the remarkable benefits they offer. Let's dive into why foods like kimchi are so good for you.</p>

<h2>What Happens During Fermentation?</h2>
<p>Fermentation is a metabolic process where microorganisms like bacteria and yeast convert sugars into acids, gases, or alcohol. In the case of kimchi, lactic acid bacteria (LAB) transform the sugars in vegetables into lactic acid, creating that signature tangy flavour while preserving the food naturally.</p>

<h2>The Gut-Brain Connection</h2>
<p>Your gut is often called your "second brain" for good reason. It contains millions of neurons and produces many of the same neurotransmitters as your brain, including serotonin. A healthy gut microbiome, supported by probiotic-rich foods like kimchi, may help:</p>
<ul>
  <li>Improve mood and reduce anxiety</li>
  <li>Enhance cognitive function</li>
  <li>Support better sleep</li>
</ul>

<h2>Immune System Support</h2>
<p>Approximately 70% of your immune system resides in your gut. The beneficial bacteria in fermented foods help maintain a balanced gut microbiome, which is essential for:</p>
<ul>
  <li>Fighting off harmful pathogens</li>
  <li>Reducing inflammation</li>
  <li>Supporting overall immune function</li>
</ul>

<h2>Better Nutrient Absorption</h2>
<p>Fermentation breaks down compounds that can interfere with nutrient absorption, making the vitamins and minerals in your food more bioavailable. This means your body can actually use more of the nutrients you consume.</p>

<h2>Start Your Fermented Food Journey</h2>
<p>Adding kimchi to your daily diet is one of the easiest ways to incorporate fermented foods. Start with a small serving alongside your meals and gradually increase as your palate adjusts to the flavours.</p>
      `,
      featured_image: '/Assets/Kimchi_B006_30-11-20.jpg',
      category: 'Health',
      tags: ['health', 'probiotics', 'gut health', 'fermentation', 'nutrition'],
    },
    {
      slug: '5-ways-to-use-kimchi',
      title: '5 Delicious Ways to Use Kimchi Beyond Rice',
      excerpt: 'Think kimchi is just for Korean food? Think again! Discover creative and delicious ways to incorporate this fermented favourite into your everyday cooking.',
      content: `
<p>While kimchi is traditionally served as a side dish (banchan) in Korean cuisine, its versatility makes it a fantastic ingredient in countless dishes. Here are five of our favourite ways to use kimchi.</p>

<h2>1. Kimchi Grilled Cheese</h2>
<p>Elevate your grilled cheese game by adding a generous layer of kimchi between the cheese slices. The tangy, spicy kick pairs perfectly with melted cheddar or gruyère. Pro tip: spread a thin layer of mayo on the outside of the bread for extra crispiness.</p>

<h2>2. Kimchi Fried Rice</h2>
<p>This Korean staple is the perfect way to use up leftover rice. Fry day-old rice with chopped kimchi, a splash of sesame oil, and top with a fried egg. Add some diced bacon or spam for extra indulgence.</p>

<h2>3. Kimchi Tacos</h2>
<p>Fusion at its finest! Use kimchi as a topping for tacos instead of traditional salsa. It works brilliantly with:</p>
<ul>
  <li>Korean BBQ beef (bulgogi)</li>
  <li>Crispy pork belly</li>
  <li>Grilled tofu for a vegetarian option</li>
</ul>

<h2>4. Kimchi Pancakes (Kimchijeon)</h2>
<p>These savoury Korean pancakes are crispy on the outside, soft on the inside, and packed with kimchi flavour. Mix chopped kimchi with a simple batter of flour, water, and egg, then pan-fry until golden. Serve with a soy-vinegar dipping sauce.</p>

<h2>5. Kimchi Bloody Mary</h2>
<p>Yes, really! The brine from kimchi makes an excellent addition to a Bloody Mary. Use it instead of (or alongside) pickle juice for a spicy, umami-packed twist on the classic cocktail.</p>

<h2>The Key to Great Kimchi Cooking</h2>
<p>The secret is using well-fermented kimchi that's developed complex flavours. Our Classic Napa Cabbage Kimchi is perfect for cooking – its balanced acidity and heat work well in both raw and cooked applications.</p>
      `,
      featured_image: '/Assets/Kimchi_B012_24-04-21.jpg',
      category: 'Recipes',
      tags: ['recipes', 'cooking', 'kimchi recipes', 'fusion food', 'easy recipes'],
    },
    {
      slug: 'storing-kimchi-guide',
      title: 'How to Store Kimchi: Keep Your Ferment Fresh and Flavourful',
      excerpt: 'Learn the best practices for storing kimchi to maintain its probiotic benefits, perfect texture, and delicious taste for weeks.',
      content: `
<p>Proper storage is key to enjoying your kimchi at its best. As a living, fermented food, kimchi continues to develop over time – and how you store it affects both flavour and texture.</p>

<h2>Refrigeration is Essential</h2>
<p>Always keep your kimchi in the refrigerator. Cold temperatures slow down the fermentation process, helping maintain the perfect balance of flavours. At room temperature, kimchi will continue to ferment rapidly, becoming increasingly sour and soft.</p>

<h2>The Ideal Temperature</h2>
<p>Kimchi is happiest between 0-4°C (32-39°F). Most home refrigerators run slightly warmer than this, so consider storing your kimchi in the coldest part of your fridge – usually the back of the bottom shelf.</p>

<h2>Keep It Submerged</h2>
<p>The vegetables should stay submerged in the brine. This prevents the top layer from drying out and protects against unwanted mould. After each use, press the kimchi down to ensure it's covered by liquid.</p>

<h2>Use Clean Utensils</h2>
<p>Always use clean utensils when serving kimchi. Introducing bacteria from used cutlery can affect the fermentation process and potentially cause spoilage.</p>

<h2>How Long Does Kimchi Last?</h2>
<ul>
  <li><strong>Unopened:</strong> Several months in the refrigerator</li>
  <li><strong>Opened:</strong> 3-6 months when properly stored</li>
  <li><strong>At peak freshness:</strong> Within 1-2 weeks of opening for best texture</li>
</ul>

<h2>Signs Your Kimchi Has Gone Bad</h2>
<p>While kimchi is meant to be sour, watch out for:</p>
<ul>
  <li>Visible mould (white fuzzy spots)</li>
  <li>Unpleasant, off-putting smell (beyond normal fermented tang)</li>
  <li>Slimy texture</li>
</ul>
<p>When in doubt, trust your senses. Good kimchi should smell tangy and appetising, not rotten.</p>
      `,
      featured_image: '/Assets/Kimchi_B014_02-04-21.jpg',
      category: 'Tips',
      tags: ['storage', 'tips', 'fermentation', 'food safety', 'guide'],
    },
  ]

  for (const article of articles) {
    console.log(`  Creating: ${article.title}`)

    await sql`
      INSERT INTO articles (slug, title, excerpt, content, featured_image, category, tags, published, published_at)
      VALUES (
        ${article.slug},
        ${article.title},
        ${article.excerpt},
        ${article.content},
        ${article.featured_image},
        ${article.category},
        ${article.tags},
        true,
        CURRENT_TIMESTAMP
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content = EXCLUDED.content,
        featured_image = EXCLUDED.featured_image,
        category = EXCLUDED.category,
        tags = EXCLUDED.tags,
        updated_at = CURRENT_TIMESTAMP
    `
  }

  console.log('Articles seeded!')
}

async function main() {
  console.log('='.repeat(50))
  console.log('Setting up blog database...')
  console.log('='.repeat(50))
  console.log('')

  await setupSchema()
  await seedArticles()

  console.log('')
  console.log('='.repeat(50))
  console.log('Done! Blog database is ready.')
  console.log('='.repeat(50))
}

main().catch(console.error)
