import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-container">
        <div className="about-content">
          <div className="section-header">
            <h4 className="section-subtitle">WHO WE ARE</h4>
            <h2 className="section-title">
              Engineering Work<br />
              With A Practical<br />
              Workshop Mindset.
            </h2>
          </div>
          
          <p className="about-text">
            Sai Krupa Engineering Works is an established workshop in the Sinnar MIDC region, managed by Rajendra Ghotekar. Since 2017, the workshop has focused on machining, welding, drilling, fabrication, repair and custom component work.
          </p>
          
          <a href="#capabilities" className="btn-secondary">
            DISCOVER OUR STORY <span className="btn-arrow">→</span>
          </a>
        </div>
        
        <div className="about-image-wrapper">
          <img 
            src="/08_workshop_interior.png" 
            alt="Sai Krupa Workshop" 
            className="about-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
