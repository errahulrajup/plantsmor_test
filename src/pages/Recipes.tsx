import React, { useState } from 'react'
import DotPattern from '../components/ui/DotPattern'
import { Link } from 'react-router-dom'

const allRecipes = [
  {
    id: 1,
    title: 'Creamy PlantSmör Garlic Pasta',
    category: 'Main Course',
    time: '20 min',
    servings: '2-3',
    emoji: '🍝',
    color: '#FFD438',
    bg: '#FFF9D6',
    ingredients: ['PlantSmör Garlic & Herb Spread', 'Fettuccine or Penne', 'Olive oil', 'Black pepper', 'Fresh basil'],
    desc: 'An ultra-silky, dairy-free garlic pasta that emulsifies effortlessly using pasta water and PlantSmör.',
  },
  {
    id: 2,
    title: 'Golden Crust Herb Garlic Bread',
    category: 'Appetizers & Sides',
    time: '15 min',
    servings: '4',
    emoji: '🥖',
    color: '#FF8A3D',
    bg: '#FFF0E6',
    ingredients: ['Sourdough or baguette', 'PlantSmör Garlic & Herb Spread', 'Fresh parsley', 'Chili flakes'],
    desc: 'Crispy baguette slices toasted to golden perfection with rich, bubbling melted garlic spread.',
  },
  {
    id: 3,
    title: 'IQF Sweet Corn & Pea Risotto',
    category: 'Comfort Cooking',
    time: '35 min',
    servings: '4',
    emoji: '🍚',
    color: '#7EC8F8',
    bg: '#E8F6FF',
    ingredients: ['PlantSmör Frozen Green Peas', 'PlantSmör Frozen Sweet Corn', 'Arborio rice', 'Vegetable stock', 'PlantSmör Original Spread'],
    desc: 'A vibrant, creamy vegetable risotto finished with chilled PlantSmör for a velvety gloss.',
  },
  {
    id: 4,
    title: 'Roasted Herb Carrots with Citrus Glaze',
    category: 'Sides & Salads',
    time: '30 min',
    servings: '4',
    emoji: '🥕',
    color: '#FF8A3D',
    bg: '#FFF0E6',
    ingredients: ['PlantSmör Frozen Carrots', 'PlantSmör Original Spread', 'Orange zest', 'Fresh thyme'],
    desc: 'Tender carrots glazed with melted spread and citrus notes for a wholesome, colourful side dish.',
  },
  {
    id: 5,
    title: 'Plant-Based Flaky Morning Croissant Pastry',
    category: 'Baking',
    time: '50 min',
    servings: '6',
    emoji: '🥐',
    color: '#7CC576',
    bg: '#EAF7E8',
    ingredients: ['Flour', 'PlantSmör Unsalted Spread', 'Yeast', 'Cold water'],
    desc: 'Master the art of lamination using PlantSmör Unsalted Spread for light, layered, golden pastry.',
  },
  {
    id: 6,
    title: 'Strawberry & Mint Breakfast Parfait',
    category: 'Breakfast & Desserts',
    time: '10 min',
    servings: '2',
    emoji: '🍓',
    color: '#FF6B8B',
    bg: '#FFE8EE',
    ingredients: ['PlantSmör Frozen Strawberries', 'Plant-based yogurt', 'Rolled oats', 'Fresh mint'],
    desc: 'A refreshing morning cup layered with quick-compote frozen strawberries and crunchy granola.',
  },
]

const Recipes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Main Course', 'Appetizers & Sides', 'Comfort Cooking', 'Baking', 'Breakfast & Desserts']

  const filtered = selectedCategory === 'All'
    ? allRecipes
    : allRecipes.filter(r => r.category === selectedCategory)

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: '#FFFDF5' }}>
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#0B3D91]/10">
        <DotPattern color="#0B3D91" opacity={0.04} size={4} spacing={22} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD438]/30 text-[#0B3D91] inline-block mb-3"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Kitchen Inspiration
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Cook with PlantSmör
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Simple everyday meals and chef-tested recipes showcasing how PlantSmör performs in cooking, sautéing, and baking.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-[#0B3D91]/10 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0B3D91] text-white shadow-sm'
                  : 'bg-[#FFFDF5] text-[#0B3D91] hover:bg-[#FFD438]/20 border border-[#0B3D91]/15'
              }`}
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#0B3D91]/10 hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Visual Area */}
                <div
                  className="h-52 relative flex items-center justify-center p-6"
                  style={{ backgroundColor: recipe.bg }}
                >
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
                    {recipe.emoji}
                  </span>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#0B3D91] shadow-xs"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      ⏱ {recipe.time}
                    </span>
                  </div>
                  <span
                    className="absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/80 text-[#0B3D91]"
                    style={{ fontFamily: 'Dosis, sans-serif' }}
                  >
                    {recipe.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl font-semibold text-[#0B3D91] leading-snug group-hover:text-[#0B3D91]/80 mb-2"
                      style={{ fontFamily: 'Fredoka, sans-serif' }}
                    >
                      {recipe.title}
                    </h3>
                    <p
                      className="text-sm text-[#0B3D91]/75 leading-relaxed mb-4"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      {recipe.desc}
                    </p>

                    <div className="pt-3 border-t border-gray-100">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider text-[#0B3D91]/50 block mb-2"
                        style={{ fontFamily: 'Dosis, sans-serif' }}
                      >
                        Key Ingredients
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {recipe.ingredients.slice(0, 3).map((ing, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded-md bg-[#FFFDF5] border border-[#0B3D91]/10 text-[#0B3D91]/75"
                            style={{ fontFamily: 'Dosis, sans-serif' }}
                          >
                            {ing}
                          </span>
                        ))}
                        {recipe.ingredients.length > 3 && (
                          <span className="text-xs text-[#0B3D91]/50 px-1 py-0.5">
                            +{recipe.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-[#0B3D91]/60" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Serves {recipe.servings}
                    </span>
                    <Link
                      to="/products"
                      className="text-xs font-bold text-[#0B3D91] hover:text-[#0B3D91]/70 flex items-center gap-1"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      View products used →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Recipes
