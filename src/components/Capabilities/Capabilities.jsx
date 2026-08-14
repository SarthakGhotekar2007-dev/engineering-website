import React from 'react';
import './Capabilities.css';

const Capabilities = () => {
  const cards = [
    {
      id: '01',
      title: 'PRECISION\nMACHINING',
      desc: 'Turning, facing, threading, boring, shaft & bush manufacturing and custom components.',
      image: '/01_lathe_machine.png'
    },
    {
      id: '02',
      title: 'INDUSTRIAL\nDRILLING',
      desc: 'General and industrial drilling for components and fabrication requirements.',
      image: '/02_drilling_machine.png'
    },
    {
      id: '03',
      title: 'ARC / MIG / TIG\nWELDING',
      desc: 'High quality welding solutions using Arc, MIG and TIG welding processes.',
      image: '/03_arc_welding.png'
    },
    {
      id: '04',
      title: 'CUSTOM\nFABRICATION',
      desc: 'Frames, gates, structures, machine parts, supports and custom fabrication work.',
      image: '/04_grinding_fabrication.png'
    },
    {
      id: '05',
      title: 'REPAIR &\nMAINTENANCE',
      desc: 'Machine parts repair, shaft repair, welding repair and general maintenance work.',
      image: '/09_welding_work.png'
    },
    {
      id: '06',
      title: 'CUSTOM COMPONENT\nMANUFACTURING',
      desc: 'Custom jobs based on drawings, samples, measurements and customer requirements.',
      image: '/06_custom_component.png'
    }
  ];

  return (
    <section className="capabilities-grid-section" id="capabilities">
      <div className="container">
        <div className="cap-grid">
          {cards.map(card => (
            <div className="cap-card" key={card.id}>
              <div className="cap-image-wrapper">
                <img src={card.image} alt={card.title} />
                <div className="cap-overlay"></div>
                <div className="cap-number">{card.id}</div>
              </div>
              <div className="cap-content">
                <h3 className="cap-title">{card.title}</h3>
                <p className="cap-desc">{card.desc}</p>
                <div className="cap-arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
