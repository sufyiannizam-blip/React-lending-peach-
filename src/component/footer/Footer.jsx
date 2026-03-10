import "./footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo Section */}
        <div className="footer-column logo-section">
          <h2>Logo</h2>
          <p>Follow us on</p>
          <div className="social-icons">
            <div className="icon-box">FB</div>
            <div className="icon-box">in</div>
            <div className="icon-box">gp</div>
            <div className="icon-box">im</div>
            <div className="icon-box">ig</div>
          </div>
        </div>

        {/* Column 1 */}
        <div className="footer-column">
          <h3>About us</h3>
          <ul className="footer-links">
            <li><a href="#">About Global Traveler</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Travel Interest</h3>
          <ul className="footer-links">
            <li><a href="#">Family Vacation</a></li>
            <li><a href="#">Honeymoon</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Art and Culture</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Top Destinations</h3>
          <ul className="footer-links">
            <li><a href="#">Paris</a></li>
            <li><a href="#">Italy</a></li>
            <li><a href="#">London</a></li>
            <li><a href="#">New York City</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Guidebook Shop</h3>
          <ul className="footer-links">
            <li><a href="#">Destination Guide</a></li>
            <li><a href="#">World Region Guides</a></li>
            <li><a href="#">Shopping Guides</a></li>
          </ul>
        </div>
      </div>

      {/* Black Copyright Bar */}
      <div className="footer-bottom">
        Copyright © 2024 Global Traveler. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
