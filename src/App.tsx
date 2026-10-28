import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Foodservice from './pages/Foodservice'
import Recipes from './pages/Recipes'
import Insights from './pages/Insights'
import FindUs from './pages/FindUs'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: '#FFFDF5' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/foodservice" element={<Foodservice />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/find-us" element={<FindUs />} />
          <Route path="/contact" element={<FindUs />} />
          {/* Redirect old sub-brand and old page routes */}
          <Route path="/essentia" element={<Navigate to="/products" replace />} />
          <Route path="/chef" element={<Navigate to="/foodservice" replace />} />
          <Route path="/chef-collection" element={<Navigate to="/foodservice" replace />} />
          <Route path="/food-solutions" element={<Navigate to="/foodservice" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
