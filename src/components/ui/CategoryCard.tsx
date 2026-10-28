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
    <div className="group relative flex flex-col justify-between h-full p-3 sm:p-5 rounded-3xl transition-all duration-300 cursor-pointer overflow-visible hover:-translate-y-2 hover:bg-white/50 hover:shadow-[0_16px_40px_rgba(11,61,145,0.06)] border border-transparent hover:border-slate-200/50">
      {/* Top Header Tag & Arrow */}
      <div className="flex items-center justify-between z-10 w-full mb-1">
        <span
          className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B3D91] border border-slate-200/70 shadow-xs"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {count ? `${count} Products` : 'PlantSmör Portfolio'}
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-300 group-hover:scale-110 shadow-sm shrink-0"
          style={{ backgroundColor: color }}
        >
          →
        </div>
      </div>

      {/* Main Spacious Stage: SINGLE fluid organic blob + MAXIMUM SIZE floating image */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center my-3 overflow-visible">
        {/* Single Signature Organic Fluid Blob (Directly on canvas, no box-in-a-box) */}
        <div
          className="absolute inset-0 rounded-[44%_56%_68%_32%/42%_48%_52%_58%] transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 opacity-90 shadow-sm"
          style={{ backgroundColor: bg }}
        />

        {/* Product / Ingredient Hero Image (Spacious & Unrestricted) */}
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="relative z-10 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-110 select-none"
          />
        ) : (
          <span
            role="img"
            aria-label={name}
            className="relative z-10 text-7xl sm:text-8xl select-none drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          >
            {emoji}
          </span>
        )}
      </div>

      {/* Card Footer: Clean Minimal Modern Typography */}
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

        <div className="mt-3.5 flex items-center text-xs sm:text-sm font-semibold text-[#0B3D91] group-hover:text-[#FF8A3D] transition-colors">
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
