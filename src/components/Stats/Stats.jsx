import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid glass">
          <div className="stat-card">
            <div className="stat-number">2017</div>
            <div className="stat-label">Established Workshop</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">9+ Years</div>
            <div className="stat-label">Workshop Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6 Core</div>
            <div className="stat-label">Capabilities</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1 Roof</div>
            <div className="stat-label">Machining & Fabrication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
