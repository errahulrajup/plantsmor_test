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
  const animDuration = 7 + ((name.length % 4) * 1.5)
  const animDelay = (name.length % 3) * 0.7

  return (
    <div className="group relative flex flex-col justify-between h-full p-4 sm:p-5 rounded-3xl transition-all duration-300 cursor-pointer overflow-visible bg-white/70 hover:bg-white hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(11,61,145,0.07)] border border-slate-200/60 hover:border-slate-300/80">
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

      {/* Main Spacious Stage: Product Artwork at MAXIMUM scale (No blob-in-blob) */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 flex items-center justify-center my-2 overflow-visible">
        {image ? (
          /* When genuine image is present: Let the original image be BADA without extra blob wrapping */
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Soft ambient back-glow for depth */}
            <div className="absolute w-44 h-44 rounded-full bg-slate-100/80 blur-2xl pointer-events-none" />
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="relative z-10 w-full h-full max-h-64 sm:max-h-72 md:max-h-80 object-contain drop-shadow-xl transition-all duration-500 group-hover:scale-108 select-none"
            />
          </div>
        ) : (
          /* Fallback when no image: Single organic blob behind emoji */
          <>
            <div
              className="absolute inset-0 blob-morph transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 opacity-90 shadow-xs"
              style={{
                backgroundColor: bg,
                animationDuration: `${animDuration}s`,
                animationDelay: `-${animDelay}s`,
              }}
            />
            <span
              role="img"
              aria-label={name}
              className="relative z-10 text-7xl sm:text-8xl select-none drop-shadow-md group-hover:scale-108 transition-transform duration-300"
            >
              {emoji}
            </span>
          </>
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
