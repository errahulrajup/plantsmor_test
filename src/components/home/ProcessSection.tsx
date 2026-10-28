import React from 'react'

const steps = [
  {
    number: '01',
    icon: '🌾',
    title: 'Farm Sourcing',
    subtitle: 'Direct from Partner Farms',
    description:
      'We partner directly with verified Indian farm clusters and grower cooperatives, harvesting vegetables, fruits, and oilseeds at absolute peak nutritional maturity.',
    badgeColor: '#3F7A4A',
    badgeBg: '#EDF6EE',
  },
  {
    number: '02',
    icon: '❄️',
    title: 'Cryogenic IQF',
    subtitle: 'Ultra-Fast Flash Freezing',
    description:
      'Our Individually Quick Frozen (IQF) technology locks in cell structure, vibrant natural color, and essential vitamins in minutes — without ice crystals or moisture loss.',
    badgeColor: '#3A759E',
    badgeBg: '#EDF4FA',
  },
  {
    number: '03',
    icon: '🌱',
    title: 'Clean Emulsification',
    subtitle: 'Zero Hydrogenation & Trans Fat',
    description:
      'For table margarines and bakery shortenings, we use cold-process micro-emulsification with non-hydrogenated plant oils — yielding clean, velvety buttery textures.',
    badgeColor: '#9A7225',
    badgeBg: '#FDF7E8',
  },
  {
    number: '04',
    icon: '🚚',
    title: 'Cold-Chain Delivery',
    subtitle: 'Certified Temperature Control',
    description:
      'Every batch travels inside unbroken, monitored cold-chain logistics from our processing hub to commercial kitchens and retail freezers at consistent -18°C.',
    badgeColor: '#A85A2D',
    badgeBg: '#FDF2EC',
  },
]

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Soft Premium Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7CC576]" />
            <span
              className="text-xs font-semibold tracking-wider uppercase text-[#0B3D91]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              The PlantSmör Standard
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B3D91] leading-[1.18] tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            From Field to Food Service —<br />
            <span className="text-[#B47C35]">Engineered for Pure Taste.</span>
          </h2>

          <p
            className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Four transparent steps. Zero artificial shortcuts. Crafted to deliver consistent,
            high-yield plant ingredients for discerning home cooks and industrial kitchens.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200/70 hover:border-[#0B3D91]/20 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_24px_rgba(11,61,145,0.03)] hover:shadow-[0_16px_36px_rgba(11,61,145,0.08)]"
            >
              {/* Subtle Step Watermark */}
              <div
                className="absolute top-5 right-6 text-5xl font-black text-slate-100 select-none pointer-events-none group-hover:text-slate-200/70 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {step.number}
              </div>

              <div>
                {/* Soft Icon Stage */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-xs group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: step.badgeBg }}
                >
                  <span role="img" aria-label={step.title}>{step.icon}</span>
                </div>

                {/* Step Subtitle / Tag */}
                <span
                  className="inline-block text-[11px] font-bold tracking-widest uppercase mb-2"
                  style={{ color: step.badgeColor, fontFamily: 'Inter, sans-serif' }}
                >
                  Step {step.number} • {step.subtitle}
                </span>

                {/* Step Title */}
                <h3
                  className="text-xl font-bold text-[#0B3D91] mb-3 leading-snug"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p
                  className="text-slate-600 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Step Indicator Line */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Stage {idx + 1} of 4
                </span>
                <span
                  className="text-xs font-bold"
                  style={{ color: step.badgeColor, fontFamily: 'Inter, sans-serif' }}
                >
                  Verified ✓
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Bottom Callout Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/80 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EDF6EE] flex items-center justify-center text-xl shrink-0">
              🔬
            </div>
            <div>
              <h4
                className="text-base sm:text-lg font-bold text-[#0B3D91]"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Need Technical Specification Sheets or Custom Blends?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                We provide complete lab certificates of analysis (CoA), fat melt curves, and microbiological safety reports.
              </p>
            </div>
          </div>
          <a
            href="/foodservice"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#0B3D91] bg-[#FFF3B8] hover:bg-[#FFE566] transition-all duration-200 shadow-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>Request Spec Sheets &amp; Samples</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
