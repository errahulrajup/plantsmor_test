import type { MasterProduct } from './catalogue'

// Auto-import all transparent product images from assets/products/
const images = import.meta.glob<string>('../assets/products/*.png', {
  eager: true,
  import: 'default',
})

// Helper to look up an image by its filename (without path)
export function getProductAsset(name: string): string | undefined {
  return images[`../assets/products/${name}`]
}

// Category hero images (for Category Cards on Homepage and Division headers)
export const categoryHeroImages: Record<string, string | undefined> = {
  // By category name
  'Spreads & Bakery Fats': getProductAsset('plant-butter.png'),
  'Frozen Vegetables': getProductAsset('green-peas.png'),
  'Plant-Based Meat & Protein': getProductAsset('soya-chaap-tikka.png'),
  'Frozen Fruits': getProductAsset('mango.png'),
  'Dairy Alternatives': getProductAsset('plant-cheese.png'),
  'Dairy Alternatives & Desserts': getProductAsset('plant-cheese.png'),
  'Sauces, Mayonnaise & Ketchup': getProductAsset('mayonnaise.png'),
  'Sauces, Dips & Soups': getProductAsset('mayonnaise.png'),
  'Ready-to-Eat Meals': getProductAsset('dal-makhani.png'),
  'Tea, Coffee & Beverages': getProductAsset('coffee-beans.png'),
  'Papad, Namkeen & Snacks': getProductAsset('urad-papad.png'),
  'Pasta, Noodles & Grains': getProductAsset('spaghetti.png'),
  'Canned & Retort Foods': getProductAsset('canned-green-peas.png'),
  'Foodservice & Bulk Supply': getProductAsset('cooking-cream.png'),

  // By slug
  'margarine-oils-bakery-fats': getProductAsset('plant-butter.png'),
  'frozen-vegetables-fruits': getProductAsset('green-peas.png'),
  'plant-based-meat-protein': getProductAsset('soya-chaap-tikka.png'),
  'plant-based-alternatives-dairy-style': getProductAsset('plant-cheese.png'),
  'sauces-condiments-dressings-soups': getProductAsset('mayonnaise.png'),
  'ready-to-eat-rte-retort-meals': getProductAsset('dal-makhani.png'),
  'tea-coffee-hot-beverages': getProductAsset('coffee-beans.png'),
  'papad-namkeen-indian-snacks': getProductAsset('urad-papad.png'),
  'dry-foods-pasta-noodles-grains-flour-pulses': getProductAsset('spaghetti.png'),
  'canned-retort-processed-foods': getProductAsset('canned-green-peas.png'),
  'foodservice': getProductAsset('cooking-cream.png'),
}

// STRICT 1-TO-1 MAPPING: Each image file is assigned to EXACTLY ONE product.
// NO IMAGE REPETITION RULE: A photograph used for one product is NEVER reused for another product.
// RELEVANCE RULE: An image is ONLY mapped if it authentically represents the exact product.
const exactProductMap: Record<string, string> = {
  // ─── Frozen Vegetables (1-to-1 Genuine) ───────────────────
  'PlantSmör Frozen Green Peas': 'green-peas.png',
  'PlantSmör Frozen Sweet Corn Kernels': 'sweet-corn.png',
  'PlantSmör Frozen Baby Corn': 'baby-corn.png',
  'PlantSmör Frozen Carrots': 'carrots.png',
  'PlantSmör Frozen French Beans': 'green-beans.png',
  'PlantSmör Frozen Mixed Vegetables': 'mixed-vegetables.png',
  'PlantSmör Frozen Cauliflower': 'cauliflower.png',
  'PlantSmör Frozen Broccoli': 'broccoli.png',
  'PlantSmör Frozen Spinach': 'spinach.png',
  'PlantSmör Frozen Okra': 'okra.png',
  'PlantSmör Frozen Potatoes': 'potatoes-diced.png',
  'PlantSmör Frozen Sweet Potatoes': 'sweet-potatoes.png',
  'PlantSmör Frozen Onions': 'white-onion-diced.png',
  'PlantSmör Frozen Tomatoes': 'tomatoes-diced.png',
  'PlantSmör Frozen Green Capsicum': 'green-capsicum.png',
  'PlantSmör Frozen Red Capsicum': 'red-capsicum.png',
  'PlantSmör Frozen Yellow Capsicum': 'yellow-capsicum.png',
  'PlantSmör Frozen Green Chillies': 'green-chillies.png',
  'PlantSmör Frozen Red Chillies': 'red-chillies.png',
  'PlantSmör Frozen Cabbage': 'cabbage.png',
  'PlantSmör Frozen Mushrooms': 'mushrooms.png',
  'PlantSmör Frozen Pumpkin': 'pumpkin.png',
  'PlantSmör Frozen Beetroot': 'beetroot.png',
  'PlantSmör Frozen Bitter Gourd': 'bitter-gourd.png',
  'PlantSmör Frozen Bottle Gourd': 'bottle-gourd.png',
  'PlantSmör Frozen Ridge Gourd': 'ridge-gourd.png',
  'PlantSmör Frozen Ash Gourd': 'ash-gourd.png',
  'PlantSmör Frozen Tinda': 'tinda.png',
  'PlantSmör Frozen Cluster Beans': 'cluster-beans.png',
  'PlantSmör Frozen Drumsticks': 'drumsticks.png',
  'PlantSmör Frozen Zucchini': 'zucchini.png',
  'PlantSmör Frozen Asparagus': 'asparagus.png',
  'PlantSmör Frozen Water Chestnuts': 'water-chestnuts.png',
  'PlantSmör Frozen Green Chana': 'green-chickpeas.png',
  'PlantSmör Frozen Guar': 'guar.png',
  'PlantSmör Frozen Methi Leaves': 'methi-leaves.png',
  'PlantSmör Frozen Mustard Greens': 'mustard-greens.png',
  'PlantSmör Frozen Green Jackfruit': 'jackfruit.png',
  'PlantSmör Frozen Lotus Root': 'lotus-root.png',
  'PlantSmör Frozen Garlic Cloves': 'garlic.png',
  'PlantSmör Frozen Ginger': 'ginger.png',
  'PlantSmör Frozen Spring Onion': 'spring-onion.png',
  'PlantSmör Frozen Coriander': 'coriander-bunch.png',
  'PlantSmör Frozen Mint': 'mint.png',
  'PlantSmör Frozen Curry Leaves': 'curry-leaves.png',
  'PlantSmör Frozen Basil': 'basil-leaves.png',
  'PlantSmör Frozen Parsley': 'parsley.png',
  'PlantSmör Frozen Lemongrass': 'lemongrass.png',

  // ─── Frozen Fruits (1-to-1 Genuine) ───────────────────────
  'PlantSmör Frozen Mango': 'mango.png',
  'PlantSmör Frozen Papaya': 'papaya.png',
  'PlantSmör Frozen Pineapple': 'pineapple.png',
  'PlantSmör Frozen Guava': 'guava.png',
  'PlantSmör Frozen Pink Guava': 'pink-guava.png',
  'PlantSmör Frozen Pomegranate Arils': 'pomegranate.png',
  'PlantSmör Frozen Banana': 'banana.png',
  'PlantSmör Frozen Strawberries': 'strawberries.png',
  'PlantSmör Frozen Litchi': 'litchi.png',
  'PlantSmör Frozen Coconut Pieces': 'coconut-pieces.png',
  'PlantSmör Frozen Jackfruit': 'ripe-jackfruit.png',
  'PlantSmör Frozen Jamun': 'jamun.png',
  'PlantSmör Frozen Phalsa': 'phalsa.png',
  'PlantSmör Frozen Mulberry': 'mulberry.png',
  'PlantSmör Frozen Apple': 'apple.png',
  'PlantSmör Frozen Peach': 'peach.png',
  'PlantSmör Frozen Plum': 'plum.png',
  'PlantSmör Frozen Fig': 'fig.png',
  'PlantSmör Frozen Dragon Fruit': 'dragon-fruit.png',
  'PlantSmör Frozen Passion Fruit': 'passion-fruit.png',
  'PlantSmör Frozen Custard Apple Pulp': 'custard-apple.png',
  'PlantSmör Frozen Raspberry': 'raspberries.png',
  'PlantSmör Frozen Blackberry': 'blackberry.png',
  'PlantSmör Frozen Blueberry': 'blueberries.png',
  'PlantSmör Frozen Cranberry': 'cranberry.png',
  'PlantSmör Frozen Blackcurrant': 'blackcurrant.png',
  'PlantSmör Frozen Red Currant': 'red-currant.png',
  'PlantSmör Frozen Cherry': 'cherries.png',
  'PlantSmör Frozen Kiwi': 'kiwi.png',

  // ─── Sauces & Condiments (1-to-1 Genuine) ─────────────────
  'PlantSmör Plant-Based Mayonnaise': 'mayonnaise.png',
  'PlantSmör Tomato Ketchup': 'tomato-ketchup.png',

  // ─── Margarine & Bakery Fats (1-to-1 Genuine) ─────────────
  'PlantSmör Table Margarine': 'plant-butter.png',

  // ─── Dairy Alternatives (1-to-1 Genuine) ─────────────────
  'PlantSmör Plant-Based Burger Slices': 'plant-cheese.png',

  // ─── Plant-Based Meat & Protein (1-to-1 Genuine) ──────────
  'PlantSmör Soya Chaap': 'soya-chaap-tikka.png',
  'PlantSmör Plant-Based Burger Patty': 'plant-burger-patty.png',

  // ─── Ready-to-Eat Retort Meals (1-to-1 Genuine) ───────────
  'PlantSmör Dal Makhani': 'dal-makhani.png',

  // ─── Dry Foods: Pasta & Grains (1-to-1 Genuine) ───────────
  'PlantSmör Spaghetti': 'spaghetti.png',

  // ─── Papad, Namkeen & Snacks (1-to-1 Genuine) ────────────
  'PlantSmör Urad Papad': 'urad-papad.png',

  // ─── Canned & Retort Foods (1-to-1 Genuine) ───────────────
  'PlantSmör Canned Green Peas': 'canned-green-peas.png',

  // ─── Beverages (1-to-1 Genuine) ───────────────────────────
  'PlantSmör Roasted Coffee Beans': 'coffee-beans.png',
}

// Track images that have already been assigned to ensure strict uniqueness
const assignedImageSet = new Set(Object.values(exactProductMap))

/**
 * STRICT 1-TO-1 PRODUCT IMAGE RESOLVER
 * - If product is explicitly in exactProductMap, return that unique asset.
 * - If a dedicated custom image exists matching the product slug, return that unique asset.
 * - Under NO circumstances will an image already assigned to one product be returned for another product.
 * - If no unique image exists yet, returns null (clean fallback UI with brand icon).
 */
export function getProductImage(product: MasterProduct): string | null {
  // 1. Direct exact mapping
  const mapped = exactProductMap[product.name]
  if (mapped) {
    const asset = getProductAsset(mapped)
    if (asset) return asset
  }

  // 2. Custom dedicated file matching product slug
  const slug = product.name
    .toLowerCase()
    .replace(/^plantsmör\s+/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const slugFileName = `${slug}.png`
  
  // Only allow if this image is not already assigned to another product
  if (!assignedImageSet.has(slugFileName)) {
    const customAsset = getProductAsset(slugFileName)
    if (customAsset) {
      return customAsset
    }
  }

  // 3. Strict No-Repetition Rule:
  // No fuzzy fallback. Never show another product's photograph.
  return null
}
