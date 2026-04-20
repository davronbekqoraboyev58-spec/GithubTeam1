import React from 'react';
import './Footer.css';
// Ikonkalar uchun font-awesome yoki shunga o'xshash kutubxonadan foydalanishingiz mumkin
// Bu yerda matnli ikonkalardan foydalanildi

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Yuqori qism: Logo va Newsletter */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              CREATE<span>X</span>
              <div className="social-icons">
                <a href="#"><i className="fab fa-whatsapp"></i></a>
                <a href="#"><i className="fab fa-facebook-messenger"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <p className="brand-description">
              Createx Construction Bureau has been successfully operating in the USA 
              construction market since 2000. We are proud to offer you quality 
              construction and exemplary service. Our mission is to set the highest 
              standards for construction sphere.
            </p>
          </div>

          <div className="footer-newsletter">
            <h3>Let’s stay in touch</h3>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" />
              <button type="button">SUBSCRIBE</button>
            </div>
            <p className="subscribe-note">
              *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
            </p>
          </div>
        </div>

        {/* O'rta qism: Kontakt va Linklar */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>HEAD OFFICE</h4>
            <p><strong>Address:</strong> 8502 Preston Rd. Inglewood, New York</p>
            <p><strong>Call:</strong> (405) 555-0128</p>
            <p><strong>Email:</strong> hello@createx.com</p>
          </div>

          <div className="footer-column">
            <h4>WHO WE ARE</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Available Positions</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>OUR EXPERIENCE</h4>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
        </div>

        {/* Pastki qism: Mualliflik huquqi */}
        <div className="footer-bottom">
          <div className="copyright">
            © All rights reserved. Made with <span className="heart">❤</span> by Createx Studio
          </div>
          <div className="go-to-top" onClick={scrollToTop}>
            <span>GO TO TOP</span>
            <button className="scroll-btn">↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;