import React from 'react';
import './Inp.css';
import bg3 from "../../assets/bg3.png"

const Inp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-wrapper">
      {/* 1. KONTAKT BO'LIMI (FORM) */}
      <section style={{backgroundImage:`url(${bg3})`}} className="contact-section">
        <div className="contact-container">
          <div className="contact-spacer"></div>
          <div className="contact-card">
            <h2>A quick way to discuss details</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Phone*</label>
                <input type="tel" placeholder="Your phone number" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your working email" />
              </div>
              <div className="form-group">
                <label>Message*</label>
                <textarea placeholder="Your message" rows="3" required></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">I agree to receive communications from Createx Construction Bureau.</label>
              </div>
              <button type="submit" className="send-btn">SEND REQUEST</button>
            </form>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Inp;

