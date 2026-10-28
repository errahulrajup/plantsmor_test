import React from 'react'

interface DotPatternProps {
  color?: string
  opacity?: number
  size?: number
  spacing?: number
  className?: string
}

const DotPattern: React.FC<DotPatternProps> = ({
  color = '#FFD438',
  opacity = 0.08,
  size = 4,
  spacing = 24,
  className = '',
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`dot-pattern-${color.replace('#', '')}`}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={size / 2} fill={color} opacity={opacity} />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#dot-pattern-${color.replace('#', '')})`}
      />
    </svg>
  )
}

export default DotPattern
