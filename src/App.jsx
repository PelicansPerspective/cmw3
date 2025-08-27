import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Import pages
import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
