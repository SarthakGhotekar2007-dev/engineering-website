import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section bg-gunmetal section-padding">
      <div className="container experience-container">
        <div className="experience-content">
          <div className="experience-number">
            09<span className="plus">+</span>
          </div>
          <div className="experience-text">
            <h2>YEARS OF ENGINEERING EXPERIENCE</h2>
            <div className="experience-details">
              <p>Established In 2017</p>
              <p>Sai Krupa Engineering Works</p>
              <p>Sinnar MIDC, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-bg"></div>
    </section>
  );
};

export default Experience;
