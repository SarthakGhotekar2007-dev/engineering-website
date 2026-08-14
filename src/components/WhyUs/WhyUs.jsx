import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, Settings, ShieldCheck, ArrowRight } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    { 
      id: '01', 
      title: 'QUALITY FIRST', 
      desc: 'We never compromise on quality. Every component is checked for precision and performance.',
      icon: <Target size={32} strokeWidth={1.5} />,
      techDetail: 'PRECISION CHECK',
      techDesc: 'Tolerance verified to ±0.01mm using CMM inspection.',
      colSpan: 1
    },
    { 
      id: '02', 
      title: 'CUSTOMER FOCUSED', 
      desc: 'We understand customer requirements deeply and deliver solutions that truly fit their needs.',
      icon: <Users size={32} strokeWidth={1.5} />,
      techDetail: 'REQUIREMENT ALIGNMENT',
      techDesc: '100% adherence to client blueprints and delivery timelines.',
      colSpan: 1
    },
    { 
      id: '03', 
      title: 'RELIABLE & HONEST', 
      desc: 'Honest communication, transparent pricing and on-time delivery — that\'s our promise.',
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      techDetail: 'TRUST METRIC',
      techDesc: '98% on-time delivery rate with zero hidden costs.',
      colSpan: 1
    },
    { 
      id: '04', 
      title: 'SKILLED WORKFORCE', 
      desc: 'Precision starts with people who understand the process. Our team brings practical experience, technical knowledge and dedication to every project.',
      icon: <Settings size={32} strokeWidth={1.5} />,
      techDetail: 'EXPERT ENGINEERS',
      techDesc: 'Over 50+ years of combined machining and fabrication experience.',
      colSpan: 3,
      featured: true
    }
  ];

  return (
    <section className="whyus-section section-padding bg-deep-black" id="about">
      {/* Subtle Background Graphics */}
      <div className="whyus-bg-graphics">
        <div className="bg-tech-text">01 / VALUES</div>
        <div className="bg-tech-list">
          <div>PRECISION ─────────</div>
          <div>TRUST ─────────────</div>
          <div>QUALITY ───────────</div>
        </div>
        <div className="bg-engineering-grid"></div>
      </div>

      <div className="container relative z-10">
        <div className="whyus-header">
          <div className="header-badge">[ OUR VALUES ]</div>
          <h2 className="whyus-massive-title">
            BUILT ON PRECISION.<br/>
            DRIVEN BY TRUST.
          </h2>
          <p className="whyus-subtitle">
            Engineering isn't just what we do.<br/>
            It's how we approach every project.
          </p>
        </div>
        
        <div className="whyus-bento-grid">
          {values.map((val, index) => (
            <motion.div 
              key={val.id}
              className={`whyus-bento-card ${val.featured ? 'featured-card' : ''}`}
              style={{ gridColumn: `span ${val.colSpan}` }}
              onMouseEnter={() => setHoveredCard(val.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ 
                y: -12,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                borderColor: "rgba(255, 90, 0, 0.5)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="card-default-content">
                <motion.div 
                  className="card-icon"
                  animate={{ scale: hoveredCard === val.id ? 1.1 : 1, rotate: hoveredCard === val.id ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {val.icon}
                </motion.div>
                <h3 className="card-title">{val.title}</h3>
                <p className="card-desc">{val.desc}</p>
              </div>

              {/* Hover Technical Detail */}
              <AnimatePresence>
                {hoveredCard === val.id && (
                  <motion.div 
                    className="card-hover-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="hover-tech-header">
                      {val.techDetail}
                      <motion.div 
                        className="hover-tech-line"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      ></motion.div>
                    </div>
                    <p className="hover-tech-desc">{val.techDesc}</p>
                    <div className="hover-tech-footer">
                      {val.id} / {val.title.split(' ')[0]}
                    </div>
                    {val.featured && (
                      <div className="featured-scan-effect"></div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Strong Statement Ending */}
        <motion.div 
          className="whyus-ending"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="ending-statement">
            WE DON'T JUST MAKE COMPONENTS.<br/>
            <span className="text-orange">WE BUILD CONFIDENCE INTO EVERY PART.</span>
          </h3>
          <a href="#process" className="ending-link">
            OUR APPROACH <ArrowRight size={20} className="link-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
