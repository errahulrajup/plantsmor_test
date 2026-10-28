import React, { useState } from 'react'
import DotPattern from '../components/ui/DotPattern'
import { Link } from 'react-router-dom'

const articles = [
  {
    id: 1,
    title: 'Why Plant-Based Butter & Spreads Are Reshaping Commercial Kitchens',
    category: 'Industry Insights',
    date: 'October 2026',
    readTime: '4 min read',
    emoji: '🔬',
    bg: '#E8F6FF',
    excerpt: 'Chefs and food service operators are turning to plant-based fats not just for sustainability, but for consistent melt, lower allergens, and exceptional browning capability.',
  },
  {
    id: 2,
    title: 'The Science of IQF: Why Individually Quick Frozen Vegetables Lock in Peak Nutrients',
    category: 'Food Technology',
    date: 'September 2026',
    readTime: '5 min read',
    emoji: '❄️',
    bg: '#EAF7E8',
    excerpt: 'How rapid cryo-freezing within hours of harvest preserves cellular integrity, crispness, and vitamins far better than conventional chilled vegetables.',
  },
  {
    id: 3,
    title: '5 Practical Ways Restaurant Kitchens Can Reduce Food Waste',
    category: 'Sustainability',
    date: 'September 2026',
    readTime: '3 min read',
    emoji: '🌍',
    bg: '#FFF9D6',
    excerpt: 'From pre-portioned IQF produce to zero-spoilage plant fats, discover actionable tactics professional kitchens employ to cut kitchen shrinkage.',
  },
  {
    id: 4,
    title: 'Baking Without Dairy: How to Achieve Light, Golden Flakiness',
    category: 'Culinary Tips',
    date: 'August 2026',
    readTime: '6 min read',
    emoji: '🥐',
    bg: '#FFF0E6',
    excerpt: 'Understanding the role of solid fat content and melting points in laminated doughs when switching to premium plant-based spreads.',
  },
  {
    id: 5,
    title: 'The Evolution of Scandinavian Plant Food Culture',
    category: 'Culture & Heritage',
    date: 'August 2026',
    readTime: '4 min read',
    emoji: '🌿',
    bg: '#F2EAFF',
    excerpt: 'Exploring Nordic culinary traditions that celebrate simplicity, seasonal produce, and reverence for clean, unadulterated flavours.',
  },
]

const Insights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Industry Insights', 'Food Technology', 'Sustainability', 'Culinary Tips', 'Culture & Heritage']

  const filtered = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory)

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
              Knowledge &amp; Perspectives
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              PlantSmör Insights
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Deep dives into plant-based food innovation, sustainable supply chains, and culinary techniques for modern kitchens.
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

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#0B3D91]/10 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="h-44 relative flex items-center justify-center p-6"
                    style={{ backgroundColor: item.bg }}
                  >
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
                      {item.emoji}
                    </span>
                    <span
                      className="absolute bottom-4 left-4 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/80 text-[#0B3D91]"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#0B3D91]/50 mb-3" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3
                      className="text-lg font-semibold text-[#0B3D91] leading-snug group-hover:text-[#0B3D91]/80 mb-3"
                      style={{ fontFamily: 'Fredoka, sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm text-[#0B3D91]/70 leading-relaxed"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span
                      className="text-xs font-bold text-[#0B3D91] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      Read full article <span>→</span>
                    </span>
                    <Link
                      to="/products"
                      className="text-xs text-[#0B3D91]/60 hover:text-[#0B3D91]"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      Explore Products
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Insights
