import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import CategoryCard from '../components/ui/CategoryCard'
import ValueCard from '../components/ui/ValueCard'
import WaveShape from '../components/ui/WaveShape'
import DotPattern from '../components/ui/DotPattern'
import { activeCategories } from '../data/categories'
import { categoryHeroImages } from '../data/productImages'
import greenPeasBlob from '../assets/products/green-peas.png'

// ─── Hero Section ──────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => (
  <section
    className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16"
    style={{ backgroundColor: '#FCFBF7' }}
  >
    {/* Subtle architectural background accents */}
    <div className="absolute right-0 top-0 w-[55%] h-full pointer-events-none opacity-40">
      <WaveShape
        className="absolute inset-0 w-full h-full scale-110"
        color="#FFF3B8"
        opacity={0.7}
      />
      <DotPattern color="#0B3D91" opacity={0.03} size={4} spacing={26} />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left: Clean Editorial Content (7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-center gap-6">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#0B3D91]/5 border border-[#0B3D91]/10">
          <span className="w-2 h-2 rounded-full bg-[#7CC576] animate-pulse" />
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#0B3D91]"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            Sustainable Plant-Based Solutions
          </span>
        </div>

        {/* H1 */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B3D91] leading-[1.12] tracking-tight"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Pure Ingredients.
          <br />
          <span className="text-[#FF8A3D]">Thoughtfully Crafted</span> for Modern Food.
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-[#0B3D91]/75 leading-relaxed max-w-xl"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          From premium table margarines &amp; bakery fats to farm-fresh IQF vegetables and plant proteins — PlantSmör engineers pure, clean-label plant solutions for household tables and commercial kitchens.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link to="/products">
            <Button variant="primary" size="lg" className="shadow-lg shadow-[#0B3D91]/15">
              Explore 160+ Products →
            </Button>
          </Link>
          <Link to="/foodservice">
            <Button variant="outline" size="lg" className="bg-white/80 hover:bg-white">
              Foodservice &amp; Bulk Supply
            </Button>
          </Link>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#0B3D91]/10 max-w-lg">
          <div>
            <span className="block text-2xl font-bold text-[#0B3D91]" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              100%
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Plant-Based
            </span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#0B3D91]" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              164
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Active SKUs
            </span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-[#0B3D91]" style={{ fontFamily: 'Fredoka, sans-serif' }}>
              IQF
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Peak Freshness
            </span>
          </div>
        </div>
      </div>

      {/* Right: BADA Hero Signature Blob Card Showcase (5 cols) */}
      <div className="lg:col-span-5 flex items-center justify-center">
        <div className="relative w-full max-w-md group">
          {/* Main Floating Card */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_12px_44px_rgba(11,61,145,0.08)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(11,61,145,0.12)]">
            {/* Top Specs Pill */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFF9D6] text-[#0B3D91] border border-[#FFD438]/40"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Signature Formulation
              </span>
              <span className="text-xs font-semibold text-slate-400">Premium Grade</span>
            </div>

            {/* BADA Organic Fluid Blob with Product Hero Image */}
            <div className="relative w-full h-64 sm:h-72 flex items-center justify-center overflow-visible my-3">
              {/* Large Fluid Blob Background */}
              <div
                className="absolute inset-0 rounded-[42%_58%_70%_30%/45%_52%_48%_55%] opacity-90 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                style={{ backgroundColor: '#FFF9D6' }}
              />
              <img
                src={greenPeasBlob}
                alt="PlantSmör Signature Green Peas"
                className="relative z-10 w-52 sm:w-60 h-52 sm:h-60 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 select-none"
              />
            </div>

            {/* Details Footer */}
            <div className="pt-4 border-t border-slate-100 text-center">
              <h3
                className="text-xl font-bold text-[#0B3D91]"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                PlantSmör Farm-Fresh Green Peas
              </h3>
              <p className="text-sm text-slate-500 mt-1" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Individually Quick Frozen (IQF) at Peak Sweetness &amp; Color
              </p>

              {/* Functional tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  0g Trans Fat
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Clean Label
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  100% Vegan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Scroll indicator */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
      <span className="text-xs text-[#0B3D91]" style={{ fontFamily: 'Dosis, sans-serif' }}>scroll</span>
      <div className="w-0.5 h-6 bg-[#0B3D91] rounded-full animate-pulse" />
    </div>
  </section>
)

// ─── Brand Intro Strip ─────────────────────────────────────────────────────────
const valueItems = [
  { icon: '🌿', label: 'Plant-Powered', tag: '# from plants', color: '#7CC576' },
  { icon: '🍃', label: 'Honestly Made', tag: '# no compromise', color: '#FFD438' },
  { icon: '🌍', label: 'Thoughtfully Crafted', tag: '# with care', color: '#7EC8F8' },
  { icon: '🍳', label: 'Made for Every Kitchen', tag: '# home & pro', color: '#FF8A3D' },
]

const BrandIntroSection: React.FC = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFDF5' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Intro text */}
      <p
        className="text-center text-xl md:text-2xl text-[#0B3D91] max-w-3xl mx-auto leading-relaxed mb-16"
        style={{ fontFamily: 'Dosis, sans-serif', fontWeight: 500 }}
      >
        PlantSmör is a plant-based food brand built for everyday cooking and professional kitchens alike. We make food that tastes great, is thoughtfully crafted, and is easy to love.
      </p>

      {/* Value icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {valueItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 text-center group">
            {/* Circle icon */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
              style={{ backgroundColor: `${item.color}22` }}
            >
              <span role="img" aria-label={item.label}>{item.icon}</span>
            </div>
            <span
              className="font-semibold text-[#0B3D91] text-sm md:text-base"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              {item.label}
            </span>
            <span
              className="text-xs text-[#0B3D91]/50"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ─── Category Range Section ────────────────────────────────────────────────────
const CategorySection: React.FC = () => (
  <section className="py-20 md:py-28" style={{ backgroundColor: '#F8FAFC' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Ingredion-Style Clean Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#0B3D91]/70 block mb-2"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            Our Ingredient Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3D91] leading-tight"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Explore Our Product Range
          </h2>
          <p
            className="text-slate-500 text-base md:text-lg mt-3 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            Clean-label plant spreads, IQF vegetables, artisanal fruits, and high-protein food solutions crafted for modern consumer kitchens and commercial food makers.
          </p>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap self-start md:self-auto"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          <span>View All 164 Products</span>
          <span>→</span>
        </Link>
      </div>

      {/* BADA Signature Blob Cards Grid (3 Columns, Spacious & Visible) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {activeCategories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.divisionSlug === 'foodservice' ? '/foodservice' : `/products?division=${cat.divisionSlug}`}
            className="block h-full"
          >
            <CategoryCard
              name={cat.name}
              emoji={cat.emoji}
              color={cat.color}
              bg={cat.bg}
              image={categoryHeroImages[cat.name] || categoryHeroImages[cat.divisionSlug]}
              subtitle={cat.description}
            />
          </Link>
        ))}
      </div>

      {/* Bottom B2B Callout Strip */}
      <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4
            className="text-xl font-bold text-[#0B3D91]"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Need Custom Formulations or Bulk Ingredient Supply?
          </h4>
          <p className="text-sm text-slate-500 mt-1" style={{ fontFamily: 'Dosis, sans-serif' }}>
            We work directly with food manufacturers, bakeries, and hotel chains to formulate custom plant-based fat &amp; IQF solutions.
          </p>
        </div>
        <Link to="/foodservice" className="shrink-0">
          <Button variant="primary" size="md">
            Request Commercial Sample Kit →
          </Button>
        </Link>
      </div>
    </div>
  </section>
)

// ─── Brand Story Section ───────────────────────────────────────────────────────
const BrandStorySection: React.FC = () => (
  <section className="py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#FFFDF5' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Visual with real peas artwork */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg flex items-center justify-center">
            <WaveShape
              className="w-full h-88 md:h-96"
              color="#FFD438"
              opacity={0.9}
            />
            <div className="absolute inset-0 flex items-center justify-center p-2">
              <img
                src={greenPeasBlob}
                alt="PlantSmör IQF Fresh Green Peas"
                className="w-80 sm:w-96 md:w-[420px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 select-none"
              />
            </div>
            {/* Feature badges */}
            <div
              className="absolute -top-1 right-2 sm:right-6 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-[#0B3D91] shadow-lg border border-[#0B3D91]/10 flex items-center gap-1.5 z-10"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              <span className="text-sm">🌿</span>
              <span>100% Farm Fresh IQF</span>
            </div>
            <div
              className="absolute -bottom-1 left-2 sm:left-6 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#7CC576] text-white shadow-lg flex items-center gap-1.5 z-10"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              <span className="text-sm">❄️</span>
              <span>Frozen at Peak Sweetness</span>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B3D91] leading-tight"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Good Food.
            <br />
            Thoughtfully Made.
          </h2>
          <p
            className="text-[#0B3D91]/70 leading-relaxed text-base md:text-lg"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            At PlantSmör, we believe that eating well shouldn't mean compromising on taste or the planet. Born from a love of Scandinavian simplicity and a passion for plants, every product we create is made with intention — from the ingredients we source to the communities we serve.
          </p>
          <p
            className="text-[#0B3D91]/70 leading-relaxed text-base"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            We're on a mission to make plant-based eating the most delicious choice for everyone — from home cooks to professional chefs.
          </p>
          <div>
            <Link to="/about">
              <Button variant="primary" size="md">
                Learn Our Story →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// ─── Brand Values Section ──────────────────────────────────────────────────────
const brandValues = [
  {
    icon: '🌱',
    title: 'Plant-Powered Goodness',
    description: 'Every ingredient is carefully chosen from nature\'s best. We celebrate the plant kingdom in all its abundance.',
    accentColor: '#7CC576',
  },
  {
    icon: '🌿',
    title: 'Naturally Delicious',
    description: 'We never sacrifice taste for health. Our products are crafted to be genuinely creamy, rich, and satisfying.',
    accentColor: '#FFD438',
  },
  {
    icon: '✨',
    title: 'Thoughtfully Crafted',
    description: 'From farm to table, every step is considered. We believe transparency, quality, and care go hand in hand.',
    accentColor: '#B788F5',
  },
  {
    icon: '🍳',
    title: 'Made for Every Kitchen',
    description: 'Whether you\'re a home cook or a professional chef, PlantSmör is designed to perform beautifully in any kitchen.',
    accentColor: '#FF8A3D',
  },
]

const ValuesSection: React.FC = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFDF5' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B3D91] mb-3"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          What We Stand For
        </h2>
        <p className="text-[#0B3D91]/60 max-w-xl mx-auto" style={{ fontFamily: 'Dosis, sans-serif' }}>
          Our values aren't just words — they're baked into everything we do.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brandValues.map((val, idx) => (
          <ValueCard
            key={idx}
            icon={val.icon}
            title={val.title}
            description={val.description}
            accentColor={val.accentColor}
          />
        ))}
      </div>
    </div>
  </section>
)

// ─── Food Solutions (B2B) Section ──────────────────────────────────────────────
const audiences = [
  { icon: '🍽️', label: 'Restaurants', desc: 'Premium plant-based for professional kitchens' },
  { icon: '🏭', label: 'Food Manufacturers', desc: 'Bulk supply and custom formulations' },
  { icon: '🛒', label: 'Retail Partners', desc: 'Shelf-ready products your customers will love' },
  { icon: '🚚', label: 'Distributors', desc: 'Flexible logistics and partnership programs' },
]

const FoodSolutionsSection: React.FC = () => (
  <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#0B3D91' }}>
    <DotPattern color="#FFD438" opacity={0.05} size={4} spacing={24} />
    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <span
          className="inline-block text-[#FFD438] text-sm font-semibold mb-3 tracking-wider uppercase"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          Foodservice &amp; Bulk Supply
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          PlantSmör for Food Businesses.
        </h2>
        <p
          className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          From restaurant kitchens and hotels to food manufacturers and retail shelves — PlantSmör provides dependable, high-quality plant-based solutions designed for commercial scale.
        </p>
      </div>

      {/* Audience cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {audiences.map((aud, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 flex flex-col gap-3 border border-white/10 hover:border-[#FFD438]/40 transition-all duration-300 hover:bg-white/5 group"
          >
            <span className="text-3xl" role="img" aria-label={aud.label}>{aud.icon}</span>
            <h3
              className="text-white font-semibold text-lg"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              {aud.label}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Dosis, sans-serif' }}>
              {aud.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/foodservice">
          <Button variant="yellow" size="lg">
            Explore Foodservice Solutions →
          </Button>
        </Link>
      </div>
    </div>
  </section>
)

// ─── Recipes Section ──────────────────────────────────────────────────────────
const recipes = [
  { title: 'Creamy Pasta with PlantSmör', tag: 'Quick & Easy', color: '#FFD438', bg: '#FFF9D6', emoji: '🍝', time: '20 min' },
  { title: 'Golden Garlic Bread', tag: 'Baking', color: '#FF8A3D', bg: '#FFF0E6', emoji: '🥖', time: '30 min' },
  { title: 'Herb Roasted Vegetables', tag: 'Healthy', color: '#7CC576', bg: '#EAF7E8', emoji: '🥕', time: '45 min' },
]

const RecipesSection: React.FC = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFDF5' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex items-start justify-between mb-12">
        <div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B3D91] mb-2"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Cook with PlantSmör.
          </h2>
          <div className="h-1 w-24 rounded-full" style={{ backgroundColor: '#FFD438' }} />
        </div>
        <Link
          to="/recipes"
          className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[#0B3D91] hover:text-[#FFD438] transition-colors duration-200 mt-2"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          All Recipes →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image placeholder */}
            <div
              className="relative h-48 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: recipe.bg }}
            >
              <span className="text-7xl group-hover:scale-110 transition-transform duration-300 select-none">
                {recipe.emoji}
              </span>
              {/* Time badge */}
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: recipe.color, color: '#0B3D91', fontFamily: 'Dosis, sans-serif' }}
              >
                {recipe.time}
              </div>
            </div>
            {/* Content */}
            <div className="p-5">
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: recipe.bg, color: '#0B3D91', fontFamily: 'Dosis, sans-serif' }}
              >
                {recipe.tag}
              </span>
              <h3
                className="text-[#0B3D91] font-semibold text-lg leading-snug group-hover:text-[#FFD438] transition-colors duration-200"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {recipe.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ─── Insights Section ─────────────────────────────────────────────────────────
const insights = [
  {
    title: 'Why Plant-Based Butter is the Future of Cooking',
    tag: 'Insights',
    date: 'Oct 2026',
    color: '#7EC8F8',
    bg: '#E8F6FF',
    emoji: '🔬',
  },
  {
    title: '5 Ways to Make Your Meals More Sustainable',
    tag: 'Sustainability',
    date: 'Sep 2026',
    color: '#7CC576',
    bg: '#EAF7E8',
    emoji: '🌍',
  },
  {
    title: 'The Chefs Choosing Plant-Based in Professional Kitchens',
    tag: 'Chef Stories',
    date: 'Sep 2026',
    color: '#B788F5',
    bg: '#F2EAFF',
    emoji: '👨‍🍳',
  },
]

const InsightsSection: React.FC = () => (
  <section className="py-16 md:py-24" style={{ backgroundColor: '#FFFDF5' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex items-start justify-between mb-12">
        <div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B3D91] mb-2"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Stay in the Know.
          </h2>
          <div className="h-1 w-24 rounded-full" style={{ backgroundColor: '#FFD438' }} />
        </div>
        <Link
          to="/insights"
          className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-[#0B3D91] hover:text-[#FFD438] transition-colors duration-200 mt-2"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          All Articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group"
          >
            {/* Image placeholder */}
            <div
              className="h-44 flex items-center justify-center"
              style={{ backgroundColor: article.bg }}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
                {article.emoji}
              </span>
            </div>
            {/* Content */}
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: article.bg, color: '#0B3D91', fontFamily: 'Dosis, sans-serif' }}
                >
                  {article.tag}
                </span>
                <span
                  className="text-xs text-[#0B3D91]/40"
                  style={{ fontFamily: 'Dosis, sans-serif' }}
                >
                  {article.date}
                </span>
              </div>
              <h3
                className="text-[#0B3D91] font-semibold text-base leading-snug group-hover:text-[#0B3D91]/70 transition-colors duration-200"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                {article.title}
              </h3>
              <span
                className="text-xs text-[#0B3D91]/50 font-semibold mt-1"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Read more →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// ─── CTA Banner ───────────────────────────────────────────────────────────────
const CTABanner: React.FC = () => (
  <section
    className="relative overflow-hidden py-16 md:py-20"
    style={{ backgroundColor: '#FFD438' }}
  >
    <DotPattern color="#0B3D91" opacity={0.06} size={4} spacing={22} />
    <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-6">
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B3D91] leading-tight"
        style={{ fontFamily: 'Fredoka, sans-serif' }}
      >
        Ready to Spread the Change?
      </h2>
      <p
        className="text-[#0B3D91]/80 text-lg max-w-xl"
        style={{ fontFamily: 'Dosis, sans-serif' }}
      >
        Join thousands of kitchens making the switch to plant-based — one delicious spread at a time.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary" size="lg">
          Shop Now →
        </Button>
        <Link
          to="/find-us"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#0B3D91] text-[#0B3D91] font-semibold text-lg hover:bg-[#0B3D91] hover:text-white transition-all duration-200"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          Find a Stockist
        </Link>
      </div>
    </div>
  </section>
)

// ─── Home Page ────────────────────────────────────────────────────────────────
const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <BrandIntroSection />
      <CategorySection />
      <BrandStorySection />
      <ValuesSection />
      <FoodSolutionsSection />
      <RecipesSection />
      <InsightsSection />
      <CTABanner />
    </main>
  )
}

export default Home
