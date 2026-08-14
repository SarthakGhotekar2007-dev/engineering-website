import React from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';

const Quote = () => {
  return (
    <section className="quote-section section-padding" id="quote">
      <div className="container quote-container">
        <div className="quote-content">
          <h4 className="section-subtitle">START A CONVERSATION</h4>
          <h2 className="section-title">
            Have An Industrial<br />
            Requirement?
          </h2>
          <p className="quote-text">
            Share your requirement with Sai Krupa Engineering Works.
          </p>
          
          <div className="quote-buttons">
            <Link to="/contact" className="btn-primary quote-btn" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>REQUEST A QUOTE →</Link>
            <a href="tel:9689515815" className="btn-outline">CALL 9689515815</a>
            <a href="https://wa.me/919689515815" className="btn-outline">WHATSAPP US</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
