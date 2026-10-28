import React from 'react'

interface ProductCardProps {
  name: string
  color: string
  lidColor: string
  weight?: string
  tagline?: string
  rotate?: string
  zIndex?: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  color,
  lidColor,
  weight,
  tagline,
  rotate = '0deg',
  zIndex = 0,
}) => {
  return (
    <div
      className="relative w-32 h-44 drop-shadow-xl"
      style={{ transform: `rotate(${rotate})`, zIndex }}
    >
      {/* Lid */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-8 rounded-full z-10 shadow-md"
        style={{ backgroundColor: lidColor }}
      />
      {/* Body */}
      <div
        className="absolute top-5 left-0 right-0 bottom-0 rounded-2xl flex flex-col items-center justify-center p-3 gap-1"
        style={{ backgroundColor: color }}
      >
        {/* Brand stripe */}
        <div
          className="w-full py-1 px-2 rounded-lg mb-1 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
        >
          <span
            className="font-bold text-xs"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: lidColor }}
          >
            PlantSm<span style={{ color: '#FFD438' }}>ö</span>r
          </span>
        </div>
        <span
          className="text-center font-semibold text-[11px] leading-tight"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: lidColor }}
        >
          {name}
        </span>
        {tagline && (
          <span className="text-center text-[9px] opacity-70" style={{ color: lidColor }}>
            {tagline}
          </span>
        )}
        {weight && (
          <span className="text-[9px] opacity-60 mt-1" style={{ color: lidColor }}>
            {weight}
          </span>
        )}
      </div>
    </div>
  )
}

export default ProductCard
