import React from 'react'
import DotPattern from '../components/ui/DotPattern'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

const FindUs: React.FC = () => {
  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: '#FFFDF5' }}>
      {/* Banner */}
      <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#0B3D91]/10">
        <DotPattern color="#0B3D91" opacity={0.04} size={4} spacing={22} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD438]/30 text-[#0B3D91] inline-block mb-3"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Stockists &amp; Retail Availability
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Where to Find PlantSmör
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Locate retail partner stores carrying PlantSmör products, or order directly for commercial foodservice supply.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Retail Stores Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#0B3D91]/10 flex flex-col justify-between">
              <div>
                <span className="text-4xl block mb-4">🛒</span>
                <h2
                  className="text-2xl font-semibold text-[#0B3D91] mb-3"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Retail Supermarkets &amp; Grocers
                </h2>
                <p className="text-[#0B3D91]/75 text-sm md:text-base leading-relaxed mb-6" style={{ fontFamily: 'Dosis, sans-serif' }}>
                  PlantSmör spreads and frozen vegetable selections are steadily arriving at selected premium grocers and regional supermarkets.
                </p>

                <div className="p-4 rounded-2xl bg-[#FFFDF5] border border-[#0B3D91]/10 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    Store Locator Status
                  </h4>
                  <p className="text-xs text-[#0B3D91]/70" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    National store distribution rollout in progress. If your favorite local market doesn't stock PlantSmör yet, let their store manager know!
                  </p>
                </div>
              </div>

              <div>
                <Link to="/products">
                  <Button variant="outline" size="md">
                    Explore Product Range →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Foodservice / Bulk Supply Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#0B3D91]/10 flex flex-col justify-between">
              <div>
                <span className="text-4xl block mb-4">📦</span>
                <h2
                  className="text-2xl font-semibold text-[#0B3D91] mb-3"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Commercial &amp; Foodservice Supply
                </h2>
                <p className="text-[#0B3D91]/75 text-sm md:text-base leading-relaxed mb-6" style={{ fontFamily: 'Dosis, sans-serif' }}>
                  Are you a restaurant, cloud kitchen, bakery, caterer, or distributor? We deliver bulk cases and wholesale pallets directly.
                </p>

                <div className="p-4 rounded-2xl bg-[#FFFDF5] border border-[#0B3D91]/10 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    B2B Order Inquiries
                  </h4>
                  <p className="text-xs text-[#0B3D91]/70" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    Direct dispatch and scheduled regional supply available across multiple commercial product categories.
                  </p>
                </div>
              </div>

              <div>
                <Link to="/foodservice">
                  <Button variant="primary" size="md">
                    Go to Foodservice Inquiries →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FindUs
