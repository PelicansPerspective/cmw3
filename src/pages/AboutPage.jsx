import React from 'react'
import '../App.css'

export default function AboutPage() {
  return (
    <div className="container">
      <h1>About Cambrian Minds</h1>
      
      <section className="content-section">
        <h2>Our Vision</h2>
        <p>
          Cambrian Minds is dedicated to exploring the intersection of consciousness studies, 
          evolutionary biology, and paleontology. Named after the Cambrian explosion—a pivotal 
          period in Earth's history that witnessed an unprecedented diversification of animal 
          body plans and complex nervous systems—our project seeks to understand how consciousness 
          may have evolved and diversified throughout the history of life.
        </p>
      </section>
      
      <section className="content-section">
        <h2>Our Team</h2>
        
        <div className="team-member">
          <h3>Dr. Sarah Chen</h3>
          <p className="title">Director, Evolutionary Neuroscience</p>
          <p>
            Dr. Chen specializes in comparative neurobiology, with a focus on reconstructing 
            the evolution of neural architectures across diverse animal phyla. Her work bridges 
            paleontological evidence with insights from contemporary organisms to build models 
            of nervous system evolution.
          </p>
        </div>
        
        <div className="team-member">
          <h3>Dr. Michael Rodriguez</h3>
          <p className="title">Lead Researcher, Consciousness Studies</p>
          <p>
            With a background in both philosophy of mind and cognitive neuroscience, Dr. Rodriguez 
            investigates the potential markers of consciousness in both extant and extinct animals, 
            developing frameworks for understanding the minimal neural requirements for subjective experience.
          </p>
        </div>
        
        <div className="team-member">
          <h3>Dr. Aisha Patel</h3>
          <p className="title">Paleobiologist</p>
          <p>
            Dr. Patel specializes in Cambrian and pre-Cambrian fossils, with particular expertise 
            in fossilized nervous system tissues. Her work has been instrumental in understanding 
            the sensory capabilities of early complex animals.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <h2>Our Approach</h2>
        <p>
          We embrace an interdisciplinary methodology that combines:
        </p>
        <ul>
          <li><strong>Comparative Neurobiology:</strong> Examining nervous system structure and function across diverse animal groups</li>
          <li><strong>Paleontological Evidence:</strong> Analyzing the fossil record for insights into ancient nervous systems</li>
          <li><strong>Philosophical Analysis:</strong> Developing conceptual frameworks for understanding consciousness across different forms of life</li>
          <li><strong>Computational Modeling:</strong> Creating simulations of primitive neural networks to test hypotheses about the emergence of consciousness</li>
        </ul>
      </section>
    </div>
  )
}
