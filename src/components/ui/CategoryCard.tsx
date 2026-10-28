import React from 'react'

interface CategoryCardProps {
  name: string
  emoji: string
  color: string
  bg: string
  image?: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, emoji, color, bg, image }) => {
  return (
    <div className="group flex flex-col items-center gap-3 p-2 sm:p-3 cursor-pointer">
      {/* Container - when image is provided, NO background circle, only the natural uneven shape */}
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center text-5xl md:text-6xl
                   transition-transform duration-300 group-hover:scale-105 overflow-visible ${
                     image ? '' : 'rounded-full shadow-sm group-hover:shadow-md'
                   }`}
        style={{ backgroundColor: image ? 'transparent' : bg }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain scale-110 group-hover:scale-115 transition-transform duration-300 drop-shadow-sm select-none"
          />
        ) : (
          <span role="img" aria-label={name} className="group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </span>
        )}
        {/* Arrow button */}
        <div
          className="absolute -bottom-1 -right-1 sm:bottom-0 sm:right-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center
                     text-white text-sm font-bold shadow-md transition-transform duration-300 group-hover:scale-110 z-10"
          style={{ backgroundColor: color }}
        >
          →
        </div>
      </div>
      {/* Name */}
      <span
        className="text-center text-xs sm:text-sm md:text-base font-semibold leading-tight max-w-[140px]"
        style={{ fontFamily: 'Fredoka, sans-serif', color: '#0B3D91' }}
      >
        {name}
      </span>
    </div>
  )
}

export default CategoryCard
