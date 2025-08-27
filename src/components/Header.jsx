import React from 'react'
import { Link } from 'react-router-dom'
import useMobile from '../hooks/use-mobile'

export default function Header() {
  const isMobile = useMobile()
  const [menuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">Cambrian Minds</Link>
        </div>
        
        {isMobile ? (
          <>
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            
            {menuOpen && (
              <nav className="mobile-nav">
                <ul>
                  <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                  <li><Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link></li>
                  <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                  <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
