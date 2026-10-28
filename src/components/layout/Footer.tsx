import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DotPattern from '../ui/DotPattern'
import { Logo } from './Navbar'
// Footer uses the inverse Logo variant (white text on navy bg)

const footerLinks = {
  Products: [
    { label: 'Plant-Based Spreads', to: '/products/plant-based-spreads' },
    { label: 'Frozen Vegetables', to: '/products/frozen-vegetables' },
    { label: 'Plant-Based Meat Alternatives', to: '/products/plant-based-meat-alternatives' },
    { label: 'Dairy Alternatives', to: '/products/dairy-alternatives' },
    { label: 'All Products', to: '/products' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Story', to: '/about#story' },
    { label: 'Foodservice', to: '/foodservice' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Careers', to: '/careers' },
  ],
  Connect: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Find Us', to: '/find-us' },
    { label: 'Recipes', to: '/recipes' },
    { label: 'Insights', to: '/insights' },
    { label: 'Trade Enquiries', to: '/foodservice#enquire' },
  ],
}

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({
  href,
  label,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/60 hover:bg-white/10 transition-all duration-200"
  >
    {children}
  </a>
)

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
    alert('Thanks for subscribing!')
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0B3D91' }}
    >
      {/* Dot pattern overlay */}
      <DotPattern color="#FFD438" opacity={0.05} size={5} spacing={28} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo inverse className="h-11 w-auto object-contain" />
            <p className="text-white/70 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Good food. A brighter tomorrow.
            </p>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs" style={{ fontFamily: 'Dosis, sans-serif' }}>
              PlantSmör brings the best of plants to every table, kitchen and food business — naturally delicious, thoughtfully crafted.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-2">
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-3">
              <h4
                className="text-white font-semibold text-sm uppercase tracking-wider"
                style={{ fontFamily: 'Fredoka, sans-serif', letterSpacing: '0.08em' }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row md:items-center gap-6"
          style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
        >
          <div className="flex-1">
            <h3
              className="text-white text-xl md:text-2xl font-semibold mb-1"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              # stay in the loop
            </h3>
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Dosis, sans-serif' }}>
              New products, recipes, and plant-based inspiration — straight to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 md:w-56 px-4 py-3 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#FFD438] focus:bg-white/15 transition-all"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:bg-[#f5c800] active:scale-95 shrink-0"
              style={{ backgroundColor: '#FFD438', color: '#0B3D91', fontFamily: 'Dosis, sans-serif' }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs" style={{ fontFamily: 'Dosis, sans-serif' }}>
            © PlantSmör. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
