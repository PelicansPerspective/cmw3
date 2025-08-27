import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cambrian Minds</h3>
            <p>Exploring consciousness through the lens of evolution and paleobiology</p>
          </div>
          
          <div className="footer-section">
            <h3>Navigation</h3>
            <nav className="footer-nav">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} Cambrian Minds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
