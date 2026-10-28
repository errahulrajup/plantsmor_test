import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoLight from '../../assets/logo-light.png'
import logoDark from '../../assets/logo-dark.png'

const Logo: React.FC<{ inverse?: boolean; className?: string }> = ({
  inverse = false,
  className = 'h-11 w-auto object-contain',
}) => (
  <img
    src={inverse ? logoDark : logoLight}
    alt="PlantSmör — Spread the Change."
    className={className}
    style={{ maxWidth: '210px' }}
  />
)

const navLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Foodservice', to: '/foodservice' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
]

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: '#FFFDF5', borderBottom: scrolled ? '1px solid #eee' : '1px solid transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#FFD438] text-[#0B3D91]'
                    : 'text-[#0B3D91] hover:bg-[#FFD43822]'
                }`
              }
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Search icon */}
          <button
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#FFD43833] transition-colors duration-200 text-[#0B3D91]"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Find us pill */}
          <Link
            to="/find-us"
            className="hidden md:inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-[#f5c800] active:scale-95"
            style={{
              backgroundColor: '#FFD438',
              color: '#0B3D91',
              fontFamily: 'Dosis, sans-serif',
            }}
          >
            Find us <span className="text-base">→</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#FFD43822] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#0B3D91] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0B3D91] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#0B3D91] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: '#FFFDF5', borderTop: '1px solid #eee' }}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#FFD438] text-[#0B3D91]'
                    : 'text-[#0B3D91] hover:bg-[#FFD43822]'
                }`
              }
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3 pt-3 border-t border-gray-100 flex gap-3">
            <Link
              to="/find-us"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center px-4 py-3 rounded-full text-sm font-bold"
              style={{ backgroundColor: '#FFD438', color: '#0B3D91', fontFamily: 'Dosis, sans-serif' }}
            >
              Find us →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export { Logo }
export default Navbar
