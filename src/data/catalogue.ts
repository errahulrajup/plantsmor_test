import divisionsData from './divisions.json'
import masterProductsData from './master_products.json'

export interface DivisionCategory {
  name: string
  slug: string
  count: number
}

export interface Division {
  name: string
  slug: string
  productCount: number
  emoji: string
  color: string
  categories: DivisionCategory[]
}

export interface MasterProduct {
  id: number
  name: string
  shortName: string
  division: string
  divisionSlug: string
  category: string
  categorySlug: string
  subCategory: string
  hindiName: string
}

const divisionMeta: Record<string, { emoji: string; color: string }> = {
  'frozen-vegetables-fruits': { emoji: '🥦', color: '#7EC8F8' },
  'sauces-condiments-dressings-soups': { emoji: '🥫', color: '#FF6B8B' },
  'margarine-oils-bakery-fats': { emoji: '🧈', color: '#FFD438' },
  'plant-based-alternatives-dairy-style': { emoji: '🥛', color: '#B788F5' },
  'plant-based-meat-protein': { emoji: '🍢', color: '#FF8A3D' },
  'tea-coffee-hot-beverages': { emoji: '☕', color: '#A05344' },
  'dry-foods-pasta-noodles-grains-flour-pulses': { emoji: '🍝', color: '#E1C699' },
  'papad-namkeen-indian-snacks': { emoji: '🥨', color: '#D97706' },
  'cold-drinks': { emoji: '🍹', color: '#4E9F3D' },
  'ready-to-eat-rte-retort-meals': { emoji: '🍛', color: '#C70039' },
  'canned-retort-processed-foods': { emoji: '🥫', color: '#5C3D2E' },
}

export const divisions: Division[] = (divisionsData as any[]).map((d) => ({
  ...d,
  emoji: divisionMeta[d.slug]?.emoji || '🌱',
  color: divisionMeta[d.slug]?.color || '#0B3D91',
}))

export const masterProducts: MasterProduct[] = masterProductsData as MasterProduct[]

export const totalProductCount = masterProducts.length
