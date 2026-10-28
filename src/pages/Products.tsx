import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { divisions, masterProducts, type MasterProduct } from '../data/catalogue'
import DotPattern from '../components/ui/DotPattern'
import Button from '../components/ui/Button'
import { getProductImage } from '../data/productImages'

const ITEMS_PER_PAGE = 36

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentDivisionSlug = searchParams.get('division') || 'all'
  const currentCategorySlug = searchParams.get('category') || 'all'
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [currentDivisionSlug, currentCategorySlug, searchQuery])

  const selectedDivision = useMemo(() => {
    return divisions.find((d) => d.slug === currentDivisionSlug)
  }, [currentDivisionSlug])

  const handleDivisionSelect = (slug: string) => {
    const params = new URLSearchParams()
    if (slug !== 'all') {
      params.set('division', slug)
    }
    setSearchParams(params)
  }

  const handleCategorySelect = (slug: string) => {
    const params = new URLSearchParams()
    if (currentDivisionSlug !== 'all') {
      params.set('division', currentDivisionSlug)
    }
    if (slug !== 'all') {
      params.set('category', slug)
    }
    setSearchParams(params)
  }

  // Filter products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return masterProducts.filter((product) => {
      // Division match
      if (currentDivisionSlug !== 'all' && product.divisionSlug !== currentDivisionSlug) {
        return false
      }

      // Category match
      if (currentCategorySlug !== 'all' && product.categorySlug !== currentCategorySlug) {
        return false
      }

      // Search match
      if (query) {
        const matchesName = product.name.toLowerCase().includes(query)
        const matchesHindi = product.hindiName.toLowerCase().includes(query)
        const matchesCategory = product.category.toLowerCase().includes(query)
        const matchesSubCat = product.subCategory.toLowerCase().includes(query)
        return matchesName || matchesHindi || matchesCategory || matchesSubCat
      }

      return true
    })
  }, [currentDivisionSlug, currentCategorySlug, searchQuery])

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredProducts, currentPage])

  return (
    <main className="min-h-screen pt-20" style={{ backgroundColor: '#FFFDF5' }}>
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 overflow-hidden border-b border-[#0B3D91]/10 bg-white">
        <DotPattern color="#0B3D91" opacity={0.04} size={4} spacing={22} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFD438]/30 text-[#0B3D91] inline-block mb-3"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Master Product Portfolio — {masterProducts.length} Products
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
            >
              PlantSmör Catalogue
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed"
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              Explore our complete portfolio across {divisions.length} core food divisions — frozen produce, plant-based proteins, sauces, beverages, bakery fats, ready meals, and pantry staples.
            </p>
          </div>
        </div>
      </section>

      {/* Division Selector Strip */}
      <section className="py-4 bg-[#FFFDF5] border-b border-[#0B3D91]/10 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Row: Division Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleDivisionSelect('all')}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                currentDivisionSlug === 'all'
                  ? 'bg-[#0B3D91] text-white shadow-sm'
                  : 'bg-white text-[#0B3D91] hover:bg-[#FFD438]/20 border border-[#0B3D91]/15'
              }`}
              style={{ fontFamily: 'Dosis, sans-serif' }}
            >
              All Divisions ({masterProducts.length})
            </button>
            {divisions.map((div) => (
              <button
                key={div.slug}
                onClick={() => handleDivisionSelect(div.slug)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentDivisionSlug === div.slug
                    ? 'bg-[#0B3D91] text-white shadow-sm'
                    : 'bg-white text-[#0B3D91] hover:bg-[#FFD438]/20 border border-[#0B3D91]/15'
                }`}
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                <span>{div.emoji}</span>
                <span>{div.name}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    currentDivisionSlug === div.slug
                      ? 'bg-white/20 text-white'
                      : 'bg-[#0B3D91]/10 text-[#0B3D91]'
                  }`}
                >
                  {div.productCount}
                </span>
              </button>
            ))}
          </div>

          {/* Sub-Row: Categories of Selected Division (if a division is active) */}
          {selectedDivision && (
            <div className="flex items-center gap-1.5 overflow-x-auto pt-2 pb-1 scrollbar-none border-t border-[#0B3D91]/10 mt-2">
              <span className="text-xs font-bold text-[#0B3D91]/50 uppercase tracking-wider mr-1 shrink-0" style={{ fontFamily: 'Dosis, sans-serif' }}>
                Categories:
              </span>
              <button
                onClick={() => handleCategorySelect('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  currentCategorySlug === 'all'
                    ? 'bg-[#FFD438] text-[#0B3D91] font-bold'
                    : 'bg-white/60 text-[#0B3D91] hover:bg-white border border-[#0B3D91]/10'
                }`}
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                All in {selectedDivision.name} ({selectedDivision.productCount})
              </button>
              {selectedDivision.categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategorySelect(cat.slug)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                    currentCategorySlug === cat.slug
                      ? 'bg-[#FFD438] text-[#0B3D91] font-bold'
                      : 'bg-white/60 text-[#0B3D91] hover:bg-white border border-[#0B3D91]/10'
                  }`}
                  style={{ fontFamily: 'Dosis, sans-serif' }}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Search & Counter Bar */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Active Filter Description */}
          <div>
            <p className="text-sm font-semibold text-[#0B3D91]" style={{ fontFamily: 'Dosis, sans-serif' }}>
              Showing <span className="font-bold text-lg text-[#0B3D91]">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
              {selectedDivision && (
                <span> in <strong className="text-[#0B3D91]">{selectedDivision.name}</strong></span>
              )}
              {currentCategorySlug !== 'all' && (
                <span> &rsaquo; <strong>{selectedDivision?.categories.find((c) => c.slug === currentCategorySlug)?.name}</strong></span>
              )}
              {searchQuery && (
                <span> matching &ldquo;<strong className="text-[#0B3D91]">{searchQuery}</strong>&rdquo;</span>
              )}
            </p>
          </div>

          {/* Search Input & Reset */}
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by English or Hindi name..."
                className="w-full px-4 py-2.5 pl-9 rounded-full text-sm bg-white border border-[#0B3D91]/20 text-[#0B3D91] placeholder-[#0B3D91]/40 focus:outline-none focus:border-[#0B3D91] transition-all shadow-xs"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              />
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-[#0B3D91]/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-[#0B3D91]/50 hover:text-[#0B3D91] cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {(currentDivisionSlug !== 'all' || currentCategorySlug !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  handleDivisionSelect('all')
                }}
                className="text-xs font-bold text-[#0B3D91] hover:underline cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Clear all ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#0B3D91]/10 p-8 max-w-xl mx-auto shadow-sm">
              <span className="text-5xl block mb-4">🔍</span>
              <h2
                className="text-2xl font-semibold text-[#0B3D91] mb-2"
                style={{ fontFamily: 'Fredoka, sans-serif' }}
              >
                No products found
              </h2>
              <p
                className="text-[#0B3D91]/70 text-sm mb-6"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Try searching for a different keyword or selecting a different division.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  handleDivisionSelect('all')
                }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#FFD438] text-[#0B3D91] hover:bg-[#f5c800] cursor-pointer"
                style={{ fontFamily: 'Dosis, sans-serif' }}
              >
                Show All {masterProducts.length} Products
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-3.5">
                {paginatedProducts.map((p) => (
                  <MasterProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#0B3D91]/10">
                  <p className="text-xs text-[#0B3D91]/60" style={{ fontFamily: 'Dosis, sans-serif' }}>
                    Showing page <strong className="text-[#0B3D91]">{currentPage}</strong> of{' '}
                    <strong className="text-[#0B3D91]">{totalPages}</strong> ({filteredProducts.length} items total)
                  </p>

                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[#0B3D91]/20 text-[#0B3D91] hover:bg-[#FFD438]/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      &larr; Previous
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum: number
                      if (totalPages <= 5) {
                        pageNum = i + 1
                      } else if (currentPage <= 3) {
                        pageNum = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i
                      } else {
                        pageNum = currentPage - 2 + i
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                            currentPage === pageNum
                              ? 'bg-[#0B3D91] text-white'
                              : 'bg-white border border-[#0B3D91]/15 text-[#0B3D91] hover:bg-[#FFD438]/20'
                          }`}
                          style={{ fontFamily: 'Dosis, sans-serif' }}
                        >
                          {pageNum}
                        </button>
                      )
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[#0B3D91]/20 text-[#0B3D91] hover:bg-[#FFD438]/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      style={{ fontFamily: 'Dosis, sans-serif' }}
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Commercial Bulk / Excel Download Banner */}
      <section className="py-16 bg-[#0B3D91] text-white relative overflow-hidden">
        <DotPattern color="#FFD438" opacity={0.06} size={4} spacing={22} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
          <span
            className="text-[#FFD438] text-xs font-bold uppercase tracking-wider inline-block mb-3"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            Commercial Supply &amp; Custom Formulations
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
          >
            Supplying Over 2,200 Food Products for Modern Food Businesses
          </h2>
          <p
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: 'Dosis, sans-serif' }}
          >
            We supply bulk formats, private formulations, and institutional specifications for restaurants, food processors, retail chains, and distributors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/foodservice">
              <Button variant="yellow" size="lg">
                Submit Foodservice Enquiry &rarr;
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0B3D91]">
                About PlantSmör Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const MasterProductCard: React.FC<{ product: MasterProduct }> = ({ product }) => {
  const productImage = getProductImage(product)
  const divisionMeta = divisions.find((d) => d.slug === product.divisionSlug)
  const themeColor = divisionMeta?.color || '#0B3D91'

  return (
    <div className="bg-white rounded-3xl p-4 border border-[#0B3D91]/10 hover:border-[#FFD438] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative">
      <div>
        {/* Category Pill */}
        <div className="mb-1">
          <span
            className="text-[11px] font-semibold text-[#0B3D91]/75 px-2.5 py-0.5 rounded-full bg-[#0B3D91]/5 inline-block truncate max-w-full"
            style={{ fontFamily: 'Dosis, sans-serif' }}
            title={product.category}
          >
            {product.category}
          </span>
        </div>

        {/* Visual Stage — Large, Seamless & Floating (Homepage Style) */}
        <div className="relative my-2.5 h-32 sm:h-36 flex items-center justify-center overflow-visible">
          {productImage ? (
            <img
              src={productImage}
              alt={product.name}
              loading="lazy"
              className="w-full h-full max-h-32 sm:max-h-36 object-contain scale-110 group-hover:scale-120 transition-transform duration-300 select-none drop-shadow-md"
            />
          ) : (
            <div
              className="w-20 h-20 sm:w-22 sm:h-22 rounded-full flex items-center justify-center text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 shadow-xs"
              style={{ backgroundColor: `${themeColor}18` }}
            >
              <span role="img" aria-label={product.name} className="select-none drop-shadow-xs">
                {divisionMeta?.emoji || '🌱'}
              </span>
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-1 mt-1 text-center">
          <h3
            className="text-xs sm:text-sm font-semibold text-[#0B3D91] leading-snug group-hover:text-[#0B3D91]/80 transition-colors line-clamp-2 min-h-[2.3rem] flex items-center justify-center"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Hindi Name — Clean, Modern subtitle */}
          {product.hindiName && (
            <p
              className="text-[11px] sm:text-xs font-medium text-[#0B3D91]/65 truncate"
              style={{ fontFamily: 'Dosis, sans-serif' }}
              title={product.hindiName}
            >
              {product.hindiName}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
