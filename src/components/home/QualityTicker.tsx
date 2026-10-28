import React from 'react'

const tickerItems = [
  { icon: '🌿', text: '100% Plant-Based' },
  { icon: '❄️', text: 'IQF Cryogenic Freshness' },
  { icon: '✨', text: 'Clean Label Formulations' },
  { icon: '🚫', text: '0g Trans Fat' },
  { icon: '🌾', text: 'Non-Hydrogenated Oils' },
  { icon: '🏭', text: 'Commercial Scale Reliability' },
  { icon: '📦', text: '164 Active SKUs' },
  { icon: '🇮🇳', text: 'Tailored for Indian Food Service' },
  { icon: '👨‍🍳', text: 'Chef & Baker Approved' },
  { icon: '🌿', text: '100% Plant-Based' },
  { icon: '❄️', text: 'IQF Cryogenic Freshness' },
  { icon: '✨', text: 'Clean Label Formulations' },
  { icon: '🚫', text: '0g Trans Fat' },
  { icon: '🌾', text: 'Non-Hydrogenated Oils' },
  { icon: '🏭', text: 'Commercial Scale Reliability' },
  { icon: '📦', text: '164 Active SKUs' },
  { icon: '🇮🇳', text: 'Tailored for Indian Food Service' },
  { icon: '👨‍🍳', text: 'Chef & Baker Approved' },
]

const QualityTicker: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden py-3 border-y border-slate-200/60"
      style={{
        backgroundColor: '#FCFBF7',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {tickerItems.map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-2.5 mx-5 text-xs sm:text-sm font-semibold text-[#0B3D91]/75 shrink-0 transition-opacity hover:opacity-100"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="text-base select-none">{item.icon}</span>
            <span>{item.text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B54F]/70 ml-2" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default QualityTicker
