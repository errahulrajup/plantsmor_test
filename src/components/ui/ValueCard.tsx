import React from 'react'

interface ValueCardProps {
  icon: string
  title: string
  description: string
  accentColor?: string
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon,
  title,
  description,
  accentColor = '#FFD438',
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${accentColor}22` }}
      >
        <span role="img" aria-label={title}>
          {icon}
        </span>
      </div>
      <h3
        className="text-lg font-semibold text-[#0B3D91]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default ValueCard
