import React, { useState } from 'react'
import DotPattern from '../components/ui/DotPattern'
import Button from '../components/ui/Button'

const Foodservice: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Cafe',
    categoryInterest: 'Plant-Based Spreads',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: '#FFFDF5' }}>
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#0B3D91] text-white">
        <DotPattern color="#FFD438" opacity={0.06} size={4} spacing={22} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-[#FFD438] inline-block mb-4"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Foodservice &amp; Commercial Supply
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              PlantSmör for Professional Kitchens &amp; Food Businesses.
            </h1>
            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Delivering consistent, high-performing plant-based ingredients for restaurants, hotels, bakeries, food manufacturers, and commercial distributors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#enquire">
                <Button variant="yellow" size="lg">
                  Submit Trade Enquiry →
                </Button>
              </a>
              <a href="#solutions">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
                  Explore Solutions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-4xl font-semibold text-[#0B3D91] mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              Tailored Solutions for Every Channel
            </h2>
            <p className="text-[#0B3D91]/70 text-base md:text-lg" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Whether you are plating culinary dishes or formulating packaged food at scale, PlantSmör provides reliable plant-based execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🍳',
                title: 'Restaurants & Cafes',
                desc: 'Versatile spreads and IQF vegetables designed for rapid kitchen prep and premium plant-based menu options.',
                color: '#FFD438',
              },
              {
                icon: '🏨',
                title: 'Hotels & Caterers',
                desc: 'Bulk pack sizes and dependable consistency for breakfast buffets, banquet dining, and large-scale hospitality.',
                color: '#7EC8F8',
              },
              {
                icon: '🏭',
                title: 'Food Manufacturers',
                desc: 'Reliable industrial supplies, bulk fat solutions, and IQF vegetables for ready meals, bakery, and prepared foods.',
                color: '#7CC576',
              },
              {
                icon: '🚚',
                title: 'Wholesale & Distributors',
                desc: 'Organized supply chain support, scheduled deliveries, and dedicated account management for regional distributors.',
                color: '#FF8A3D',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#0B3D91]/10 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3
                    className="text-xl font-semibold text-[#0B3D91] mb-2"
                    style={{ fontFamily: 'Fredoka, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0B3D91]/70 leading-relaxed" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span
                    className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider"
                    style={{ fontFamily: 'Dosis, sans-serif' }}
                  >
                    Dedicated Support
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PlantSmör */}
      <section className="py-16 md:py-20 bg-white border-y border-[#0B3D91]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FFFDF5] border border-[#0B3D91]/10">
              <span className="text-3xl block mb-3">⚡</span>
              <h4 className="text-lg font-semibold text-[#0B3D91] mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Kitchen Performance
              </h4>
              <p className="text-sm text-[#0B3D91]/70 leading-relaxed" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Engineered for heat stability, clean melt, and seamless blending across pan-frying, baking, and emulsion recipes.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#FFFDF5] border border-[#0B3D91]/10">
              <span className="text-3xl block mb-3">📦</span>
              <h4 className="text-lg font-semibold text-[#0B3D91] mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Bulk Formats
              </h4>
              <p className="text-sm text-[#0B3D91]/70 leading-relaxed" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Available in food-grade tubs, bulk blocks, and multi-kilo IQF vegetable bags designed to reduce kitchen packaging waste.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#FFFDF5] border border-[#0B3D91]/10">
              <span className="text-3xl block mb-3">🤝</span>
              <h4 className="text-lg font-semibold text-[#0B3D91] mb-2" style={{ fontFamily: 'Fredoka, sans-serif' }}>
                Quality Consistency
              </h4>
              <p className="text-sm text-[#0B3D91]/70 leading-relaxed" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Batch-to-batch taste, texture, and melting reliability ensure your recipes taste identical every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Enquiry Form */}
      <section id="enquire" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#0B3D91]/10 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD438]/30 text-[#0B3D91] inline-block mb-3"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Direct Commercial Enquiries
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold text-[#0B3D91] mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                Partner with PlantSmör
              </h2>
              <p className="text-[#0B3D91]/70 text-sm md:text-base" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Fill out the form below to request product specifications, pricing, sample batches, or distributor terms.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center bg-[#FFFDF5] rounded-2xl border border-[#0B3D91]/10 p-6">
                <span className="text-5xl block mb-4">✅</span>
                <h3
                  className="text-2xl font-semibold text-[#0B3D91] mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Thank You for Your Enquiry!
                </h3>
                <p className="text-[#0B3D91]/70 text-sm max-w-md mx-auto mb-6" style={{ fontFamily: 'Dosis, sans-serif' }}>
                  Our foodservice team will review your requirements and reach out within 1-2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#FFD438] text-[#0B3D91]"
                  style={{ fontFamily: 'Dosis, sans-serif' }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Business / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Green Olive Bistro"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 / International number"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      <option>Restaurant / Cafe</option>
                      <option>Hotel / Resort / Banquet</option>
                      <option>Bakery / Confectionery</option>
                      <option>Food Processor / Manufacturer</option>
                      <option>Distributor / Wholesaler</option>
                      <option>Retail Supermarket Chain</option>
                      <option>Other Food Business</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                      Primary Product Interest
                    </label>
                    <select
                      value={formData.categoryInterest}
                      onChange={(e) => setFormData({ ...formData, categoryInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      <option>Plant-Based Spreads (Bulk Tubs / Blocks)</option>
                      <option>Frozen Vegetables (IQF Bulk)</option>
                      <option>Plant-Based Meat Alternatives</option>
                      <option>Cooking Oils & Fats</option>
                      <option>Custom Food Formulation</option>
                      <option>Full Portfolio Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    Requirements &amp; Estimated Monthly Volume
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your kitchen, delivery location, and expected volume requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF5] border border-[#0B3D91]/20 text-[#0B3D91] focus:outline-none focus:border-[#0B3D91] text-sm"
                    style={{ fontFamily: 'Dosis, sans-serif' }}
                  />
                </div>

                <div className="pt-2 text-center">
                  <Button variant="primary" size="lg" className="w-full md:w-auto px-10">
                    Submit Foodservice Enquiry →
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Foodservice
