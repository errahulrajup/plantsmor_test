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
  color,
  bg,
  image,
  subtitle,
  count,
}) => {
  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_44px_rgba(11,61,145,0.09)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer overflow-hidden">
      {/* Top Header Tag & Arrow */}
      <div className="flex items-center justify-between z-10 gap-2">
        <span
          className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-[#0B3D91]/80 bg-[#0B3D91]/5 group-hover:bg-[#0B3D91] group-hover:text-white transition-colors duration-300 truncate"
          style={{ fontFamily: 'Dosis, sans-serif' }}
        >
          {count ? `${count} Products` : 'PlantSmör Range'}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 group-hover:scale-110 shadow-sm shrink-0"
          style={{ backgroundColor: color }}
        >
          →
        </div>
      </div>

      {/* Prominent Large Blob Area (BADA & VISIBLE) */}
      <div className="relative my-6 w-full h-56 sm:h-64 flex items-center justify-center overflow-visible">
        {/* Signature Organic Fluid Blob Background */}
        <div
          className="absolute inset-2 sm:inset-3 rounded-[42%_58%_70%_30%/45%_52%_48%_55%] transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 opacity-90 shadow-inner"
          style={{ backgroundColor: bg }}
        />

        {/* Product / Ingredient Hero Image or Large Emoji */}
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="relative z-10 w-44 sm:w-52 md:w-56 h-44 sm:h-52 md:h-56 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300 select-none"
          />
        ) : (
          <span
            role="img"
            aria-label={name}
            className="relative z-10 text-6xl sm:text-7xl group-hover:scale-115 transition-transform duration-300 select-none drop-shadow-md"
          >
            {emoji}
          </span>
        )}
      </div>

      {/* Card Footer: Clean Minimal Typography */}
      <div className="z-10 pt-4 border-t border-slate-100 flex flex-col justify-between">
        <div>
          <h3
            className="text-lg sm:text-xl font-bold text-[#0B3D91] group-hover:text-[#082860] transition-colors leading-snug"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            {name}
          </h3>
          <p
            className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2 leading-relaxed"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            {subtitle || '100% Plant-Based • Farm-Fresh & Commercial Grade'}
          </p>
        </div>

        <div className="mt-3 flex items-center text-xs font-bold text-[#0B3D91] group-hover:text-[#FF8A3D] transition-colors">
          <span>Explore Range</span>
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
