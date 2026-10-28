export interface Category {
  id: number
  name: string
  slug: string
  divisionSlug: string
  emoji: string
  color: string
  bg: string
  description: string
  active: boolean
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Spreads & Bakery Fats',
    slug: 'margarine-oils-bakery-fats',
    divisionSlug: 'margarine-oils-bakery-fats',
    emoji: '🧈',
    color: '#FFD438',
    bg: '#FFF9D6',
    description: 'Plant-based table margarine, unsalted fats, spreads, and refined edible oils.',
    active: true,
  },
  {
    id: 2,
    name: 'Frozen Vegetables',
    slug: 'frozen-vegetables-fruits',
    divisionSlug: 'frozen-vegetables-fruits',
    emoji: '🥦',
    color: '#7EC8F8',
    bg: '#E8F6FF',
    description: 'Farm-fresh IQF green peas, sweet corn, broccoli, cauliflower, and specialty veggies.',
    active: true,
  },
  {
    id: 3,
    name: 'Plant-Based Meat & Protein',
    slug: 'plant-based-meat-protein',
    divisionSlug: 'plant-based-meat-protein',
    emoji: '🍢',
    color: '#FF8A3D',
    bg: '#FFF0E6',
    description: 'Soya Chaap, burger patties, seekh kebabs, tikkas, and plant-based hot dogs.',
    active: true,
  },
  {
    id: 4,
    name: 'Frozen Fruits',
    slug: 'frozen-vegetables-fruits',
    divisionSlug: 'frozen-vegetables-fruits',
    emoji: '🍓',
    color: '#FF6B8B',
    bg: '#FFE8EE',
    description: 'Sun-ripened tropical fruits, berries, pomegranate arils, mango, and pink guava.',
    active: true,
  },
  {
    id: 5,
    name: 'Dairy Alternatives & Desserts',
    slug: 'plant-based-alternatives-dairy-style',
    divisionSlug: 'plant-based-alternatives-dairy-style',
    emoji: '🍨',
    color: '#B788F5',
    bg: '#F5EDFF',
    description: 'Plant-based tofu, cheese slices, grated toppings, and artisanal frozen desserts.',
    active: true,
  },
  {
    id: 6,
    name: 'Sauces, Dips & Soups',
    slug: 'sauces-condiments-dressings-soups',
    divisionSlug: 'sauces-condiments-dressings-soups',
    emoji: '🥫',
    color: '#C70039',
    bg: '#FFE8EE',
    description: 'Plant-based mayonnaise, ketchup, traditional Indian chutneys, and hot soups.',
    active: true,
  },
  {
    id: 7,
    name: 'Ready-to-Eat Meals',
    slug: 'ready-to-eat-rte-retort-meals',
    divisionSlug: 'ready-to-eat-rte-retort-meals',
    emoji: '🍛',
    color: '#E05A47',
    bg: '#FFF2CC',
    description: 'Retort-pouched Dal Makhani, Rajma Masala, Amritsari Chole, and Soya Curries.',
    active: true,
  },
  {
    id: 8,
    name: 'Tea, Coffee & Beverages',
    slug: 'tea-coffee-hot-beverages',
    divisionSlug: 'tea-coffee-hot-beverages',
    emoji: '☕',
    color: '#A05344',
    bg: '#F5ECE3',
    description: 'CTC and green teas, roasted coffee beans, filter coffee, and espresso roasts.',
    active: true,
  },
  {
    id: 9,
    name: 'Papad, Namkeen & Snacks',
    slug: 'papad-namkeen-indian-snacks',
    divisionSlug: 'papad-namkeen-indian-snacks',
    emoji: '🥨',
    color: '#D97706',
    bg: '#FFF3E0',
    description: 'Crispy papads, Bikaneri bhujia, sev, traditional namkeen mixtures, and roasted dal.',
    active: true,
  },
  {
    id: 10,
    name: 'Canned & Retort Foods',
    slug: 'canned-retort-processed-foods',
    divisionSlug: 'canned-retort-processed-foods',
    emoji: '🥫',
    color: '#5C3D2E',
    bg: '#F7EFE9',
    description: 'Canned green peas, sweet corn, mushrooms, spinach, and tomato purée / paste.',
    active: true,
  },
]

export const activeCategories = categories.filter((c) => c.active)
