import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'yellow'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  const base =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'bg-[#0B3D91] text-white hover:bg-[#082d6e] active:scale-95 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white active:scale-95',
    yellow:
      'bg-[#FFD438] text-[#0B3D91] hover:bg-[#f5c800] active:scale-95 shadow-md hover:shadow-lg font-bold',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
