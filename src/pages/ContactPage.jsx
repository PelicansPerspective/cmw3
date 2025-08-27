import React, { useState } from 'react'
import '../App.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      })
      return
    }
    
    // In a real application, you would send the form data to a server here
    // For demonstration purposes, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    })
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }
  
  return (
    <div className="container">
      <h1>Contact Us</h1>
      
      <section className="content-section">
        <p>
          We welcome collaborations, questions, and discussions related to our research. 
          Please use the form below to get in touch with our team.
        </p>
        
        {formStatus.submitted ? (
          <div className="form-success">
            <p>{formStatus.message}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.error && (
              <div className="form-error">
                <p>{formStatus.message}</p>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        )}
      </section>
      
      <section className="content-section">
        <h2>Other Ways to Connect</h2>
        
        <div className="contact-info">
          <div className="contact-method">
            <h3>Email</h3>
            <p>info@cambrianminds.org</p>
          </div>
          
          <div className="contact-method">
            <h3>Address</h3>
            <p>
              Cambrian Minds Research Center<br />
              123 Evolution Avenue<br />
              Cambridge, MA 02138
            </p>
          </div>
          
          <div className="contact-method">
            <h3>Social Media</h3>
            <p>Follow us on 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>, and 
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
