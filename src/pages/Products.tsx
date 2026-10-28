import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { divisions, masterProducts, type MasterProduct } from '../data/catalogue'
import DotPattern from '../components/ui/DotPattern'
import Button from '../components/ui/Button'
import { getProductImage } from '../data/productImages'

const ITEMS_PER_PAGE = 24

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
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Master Product Portfolio — {masterProducts.length} Products
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B3D91] leading-tight mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              PlantSmör Catalogue
            </h1>
            <p
              className="text-lg md:text-xl text-[#0B3D91]/80 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
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
              style={{ fontFamily: 'Inter, sans-serif' }}
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
                style={{ fontFamily: 'Inter, sans-serif' }}
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
              <span className="text-xs font-bold text-[#0B3D91]/50 uppercase tracking-wider mr-1 shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                Categories:
              </span>
              <button
                onClick={() => handleCategorySelect('all')}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  currentCategorySlug === 'all'
                    ? 'bg-[#FFD438] text-[#0B3D91] font-bold'
                    : 'bg-white/60 text-[#0B3D91] hover:bg-white border border-[#0B3D91]/10'
                }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
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
                  style={{ fontFamily: 'Inter, sans-serif' }}
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
            <p className="text-sm font-semibold text-[#0B3D91]" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                style={{ fontFamily: 'Inter, sans-serif' }}
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
                style={{ fontFamily: 'Inter, sans-serif' }}
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
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                No products found
              </h2>
              <p
                className="text-[#0B3D91]/70 text-sm mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Try searching for a different keyword or selecting a different division.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  handleDivisionSelect('all')
                }}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#FFD438] text-[#0B3D91] hover:bg-[#f5c800] cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Show All {masterProducts.length} Products
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((p) => (
                  <MasterProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#0B3D91]/10">
                  <p className="text-xs text-[#0B3D91]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Showing page <strong className="text-[#0B3D91]">{currentPage}</strong> of{' '}
                    <strong className="text-[#0B3D91]">{totalPages}</strong> ({filteredProducts.length} items total)
                  </p>

                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[#0B3D91]/20 text-[#0B3D91] hover:bg-[#FFD438]/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
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
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {pageNum}
                        </button>
                      )
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold border border-[#0B3D91]/20 text-[#0B3D91] hover:bg-[#FFD438]/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
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
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Commercial Supply &amp; Custom Formulations
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-4"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Supplying Over 2,200 Food Products for Modern Food Businesses
          </h2>
          <p
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
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
    <div className="group relative flex flex-col justify-between h-full p-4 sm:p-5 rounded-3xl transition-all duration-300 cursor-pointer overflow-visible hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_16px_36px_rgba(11,61,145,0.06)] border border-transparent hover:border-slate-200/50">
      <div>
        {/* Top Tag & ID */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className="text-[11px] font-semibold tracking-wider uppercase text-[#0B3D91] px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/70 shadow-2xs truncate max-w-[70%]"
            style={{ fontFamily: 'Inter, sans-serif' }}
            title={product.category}
          >
            {product.category}
          </span>
          <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-md text-amber-800 bg-amber-50/90 border border-amber-200/60 shadow-2xs">
            #{product.id}
          </span>
        </div>

        {/* Spacious Stage: SINGLE fluid organic blob + MAXIMUM SIZE floating image */}
        <div className="relative my-3 w-full h-52 sm:h-56 flex items-center justify-center overflow-visible">
          {/* Single Organic Fluid Blob Background (Directly on canvas, no box-in-a-box) */}
          <div
            className="absolute inset-0 rounded-[44%_56%_68%_32%/42%_48%_52%_58%] opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 shadow-sm"
            style={{ backgroundColor: `${themeColor}18` }}
          />

          {productImage ? (
            <img
              src={productImage}
              alt={product.name}
              loading="lazy"
              className="relative z-10 w-44 sm:w-52 h-44 sm:h-52 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300 select-none"
            />
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span
                role="img"
                aria-label={product.name}
                className="text-6xl sm:text-7xl select-none drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              >
                {divisionMeta?.emoji || '🌱'}
              </span>
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-1 pt-2.5 border-t border-slate-200/50 text-center">
          <h3
            className="text-base sm:text-lg font-bold text-[#0B3D91] leading-snug group-hover:text-[#FF8A3D] transition-colors line-clamp-1"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Hindi Name */}
          {product.hindiName && (
            <p
              className="text-xs sm:text-sm font-medium text-slate-500 truncate"
              style={{ fontFamily: 'Inter, sans-serif' }}
              title={product.hindiName}
            >
              {product.hindiName}
            </p>
          )}

          {/* Specification Badge */}
          <div className="mt-2 flex items-center justify-center">
            <span
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100/80 text-slate-600 truncate max-w-full"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {product.subCategory || 'Pure Formulation'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
