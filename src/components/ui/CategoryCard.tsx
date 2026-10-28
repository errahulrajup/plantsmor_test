import React from 'react'

interface CategoryCardProps {
  name: string
  emoji: string
  color: string
  bg: string
  image?: string
  subtitle?: string
  count?: number
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  emoji,
  color: _color,
  bg,
  image,
  subtitle,
  count,
}) => {
  // Stagger animation timing organically across different categories
  const animDuration = 7 + ((name.length % 4) * 1.5)
  const animDelay = (name.length % 3) * 0.7

  return (
    <div className="group relative flex flex-col justify-between h-full p-4 sm:p-5 rounded-3xl transition-all duration-300 cursor-pointer overflow-visible hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(11,61,145,0.06)] border border-transparent hover:border-slate-200/60">
      {/* Top Header Tag & Soft Editorial Arrow */}
      <div className="flex items-center justify-between z-10 w-full mb-1">
        <span
          className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0B3D91] border border-slate-200/70 shadow-xs"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {count ? `${count} Products` : 'PlantSmör Portfolio'}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110 shadow-xs shrink-0 bg-white/90 backdrop-blur-md text-[#0B3D91] border border-slate-200/80 group-hover:bg-[#0B3D91] group-hover:text-white"
        >
          →
        </div>
      </div>

      {/* Main Spacious Stage: SINGLE fluid organic blob + MAXIMUM SIZE floating image */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center my-3 overflow-visible">
        {/* Organic Fluid Breathing Blob with soft pastel shade */}
        <div
          className="absolute inset-0 blob-morph transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 opacity-90 shadow-xs"
          style={{
            backgroundColor: bg,
            animationDuration: `${animDuration}s`,
            animationDelay: `-${animDelay}s`,
          }}
        />

        {/* Product / Ingredient Hero Image (Spacious & Unrestricted) */}
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="relative z-10 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-108 select-none"
          />
        ) : (
          <span
            role="img"
            aria-label={name}
            className="relative z-10 text-7xl sm:text-8xl select-none drop-shadow-md group-hover:scale-108 transition-transform duration-300"
          >
            {emoji}
          </span>
        )}
      </div>

      {/* Card Footer: Soft Minimal Modern Typography */}
      <div className="z-10 mt-3 pt-3 border-t border-slate-200/50 flex flex-col justify-between">
        <div>
          <h3
            className="text-xl sm:text-2xl font-bold text-[#0B3D91] group-hover:text-[#082860] transition-colors leading-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {name}
          </h3>
          <p
            className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {subtitle || '100% Plant-Based • Farm-Fresh & Commercial Grade'}
          </p>
        </div>

        <div className="mt-3.5 flex items-center text-xs sm:text-sm font-semibold text-[#0B3D91] group-hover:text-[#B47C35] transition-colors">
          <span>Explore Collection</span>
          <span className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
