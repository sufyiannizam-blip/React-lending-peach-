import "./newsletter-section.css"
import React from 'react'

const Newsletters = () => {
  return (
    <>
      <div className="newsletter-section">
      <h2>Get Your Travel Inspiration</h2>
      <p className="subtitle">Straight to Your Inbox</p>

      {/* Simple HTML Form without JavaScript logic */}
      <form className="subscribe-form">
        <input 
          type="email" 
          className="email-input" 
          placeholder="email address" 
          required 
        />
        <button type="submit" className="subscribe-btn">
          Subscribe
        </button>
      </form>

      <p className="footer-text">
        Subscribe to our newsletter and exclusive promotions. 
        Read our <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
    </>
  )
}

export default Newsletters
