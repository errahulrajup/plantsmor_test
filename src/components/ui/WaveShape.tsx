import React from 'react'

interface WaveShapeProps {
  className?: string
  color?: string
  opacity?: number
}

const WaveShape: React.FC<WaveShapeProps> = ({
  className = '',
  color = '#FFD438',
  opacity = 1,
}) => {
  return (
    <svg
      viewBox="0 0 900 700"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 80,350 Q 120,80 320,130 Q 480,170 580,60 Q 720,−20 840,180 Q 920,330 820,490 Q 700,620 500,580 Q 300,540 150,460 Q 30,390 80,350 Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  )
}

export default WaveShape
