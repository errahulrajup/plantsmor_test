import React from 'react'
import DotPattern from '../components/ui/DotPattern'
import WaveShape from '../components/ui/WaveShape'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: '#FFFDF5' }}>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-[#0B3D91]/10">
        <DotPattern color="#0B3D91" opacity={0.04} size={4} spacing={22} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD438]/30 text-[#0B3D91] inline-block mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our Story &amp; Philosophy
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Good Food. Thoughtfully Made for Everyone.
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              PlantSmör was created with a clear belief: plant-based food should never require compromising on rich, creamy taste or kitchen reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Narrative */}
      <section id="story" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <WaveShape className="w-full h-80" color="#FFD438" opacity={1} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-7xl mb-3">🌱</span>
                  <span
                    className="text-2xl font-bold text-[#0B3D91]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    PlantSmör
                  </span>
                  <span
                    className="text-sm text-[#0B3D91]/70 font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Spread the Change.
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-3xl md:text-4xl font-semibold text-[#0B3D91] leading-snug"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Rooted in Scandinavian Food Culture.
              </h2>
              <p
                className="text-[#0B3D91]/75 leading-relaxed text-base md:text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                In Swedish and Danish, <em>Smör</em> means butter — a daily kitchen essential celebrated for rich flavour, comforting warmth, and culinary versatility. We took inspiration from Nordic food simplicity and clean aesthetics to craft plant-powered alternatives that feel completely natural on any table.
              </p>
              <p
                className="text-[#0B3D91]/75 leading-relaxed text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Today, PlantSmör is expanding into a comprehensive plant-based food company — spanning spreads, IQF frozen vegetables, meat alternatives, and foodservice supplies. One brand, one standard of excellence, made for home cooks and master chefs alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 md:py-20 bg-white border-y border-[#0B3D91]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#0B3D91] mb-3"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              The Four Pillars of PlantSmör
            </h2>
            <p className="text-[#0B3D91]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
              How we approach every ingredient, recipe, and customer relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌱',
                title: 'Plant-Powered',
                tag: '# from plants',
                color: '#7CC576',
                desc: 'Selecting ingredients thoughtfully from nature to celebrate wholesome plant nutrition.',
              },
              {
                icon: '🍃',
                title: 'Honestly Made',
                tag: '# no compromise',
                color: '#FFD438',
                desc: 'Delivering rich taste and genuine culinary satisfaction without unnecessary fillers.',
              },
              {
                icon: '🌍',
                title: 'Thoughtfully Crafted',
                tag: '# with care',
                color: '#7EC8F8',
                desc: 'Focusing on clean processing, sustainable choices, and transparent supply standards.',
              },
              {
                icon: '🍳',
                title: 'Made for Every Kitchen',
                tag: '# home & pro',
                color: '#FF8A3D',
                desc: 'Designed to perform effortlessly whether on breakfast toast or in high-heat commercial kitchens.',
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-[#FFFDF5] rounded-3xl p-6 border border-[#0B3D91]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl block mb-3">{pillar.icon}</span>
                  <span
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full inline-block mb-2"
                    style={{ backgroundColor: `${pillar.color}30`, color: '#0B3D91', fontFamily: 'Inter, sans-serif' }}
                  >
                    {pillar.tag}
                  </span>
                  <h3
                    className="text-lg font-semibold text-[#0B3D91] mb-2"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#0B3D91]/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0B3D91] text-white text-center relative overflow-hidden">
        <DotPattern color="#FFD438" opacity={0.06} size={4} spacing={22} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Ready to Taste the PlantSmör Difference?
          </h2>
          <p
            className="text-white/75 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our complete product portfolio or get in touch with our team for commercial supply.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button variant="yellow" size="lg">
                Explore Products →
              </Button>
            </Link>
            <Link to="/foodservice">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
                Foodservice Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
