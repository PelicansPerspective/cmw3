import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1>Cambrian Minds</h1>
          <p>Exploring consciousness through the lens of evolution and paleobiology</p>
        </div>
      </section>
      
      <div className="container">
        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            Cambrian Minds is dedicated to exploring the origins and evolution of consciousness
            through an interdisciplinary approach that bridges neuroscience, evolutionary biology,
            paleontology, and philosophy of mind.
          </p>
          <p>
            Just as the Cambrian explosion marked a profound diversification of life forms and
            anatomical innovations, we believe that consciousness itself has evolved through various
            forms and expressions across the tree of life.
          </p>
          <Link to="/research">Learn more about our research</Link>
        </section>
        
        <section className="content-section">
          <h2>Featured Publications</h2>
          <div className="publication-list">
            <div className="publication-item">
              <h3>The Evolutionary Foundations of Consciousness</h3>
              <p>Exploring the origins of consciousness through comparative neurobiology</p>
            </div>
            <div className="publication-item">
              <h3>Cambrian Innovations and the Dawn of Awareness</h3>
              <p>How early anatomical innovations may have enabled new forms of experience</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
