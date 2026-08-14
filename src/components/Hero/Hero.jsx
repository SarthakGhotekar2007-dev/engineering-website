import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Calendar, Briefcase, Users, Shield, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SceneWrapper from '../3D/SceneWrapper';
const Hero3DModel = React.lazy(() => import('../3D/Hero3DModel'));
import './Hero.css';

// Text Split Component for word-by-word animation
const SplitText = ({ text, className }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.04 * i }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isObjectHovered, setIsObjectHovered] = useState(false);
  const heroRef = useRef(null);



  const handleMouseMove = (event) => {
    // Normalize mouse coordinates for 3D model (-1 to 1)
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    // Return to neutral position when cursor leaves Hero
    setMousePosition({ x: 0, y: 0 });
  };

  // Fade out cursor trail
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.length > 0 ? prev.slice(1) : []);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero" 
      id="home" 
      ref={heroRef} 
      style={{ position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="hero-bg-image"></div>
      
      {/* Technical Grid / Blueprint Background */}
      <div className="hero-technical-grid">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprintGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" />
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
        </svg>
      </div>
      
      {/* 3D Background Layer */}
      <div className="hero-3d-container">
        <SceneWrapper camera={{ position: [3, 0, 5], fov: 45 }} style={{ pointerEvents: 'auto' }}>
          <Suspense fallback={null}>
            <Hero3DModel mousePosition={mousePosition} onHoverChange={setIsObjectHovered} />
          </Suspense>
        </SceneWrapper>
      </div>

      <div className="hero-overlay"></div>
      <div className="grain-overlay"></div>

      {/* ROTATE Label for 3D Model Hover */}
      <AnimatePresence>
        {isObjectHovered && !window.matchMedia("(pointer: coarse)").matches && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              left: mousePosition.x * window.innerWidth / 2 + window.innerWidth / 2,
              top: -mousePosition.y * window.innerHeight / 2 + window.innerHeight / 2,
              transform: 'translate(15px, 15px)',
              pointerEvents: 'none',
              zIndex: 100,
              background: 'rgba(255, 90, 0, 0.95)',
              color: 'white',
              fontSize: '11px',
              fontWeight: 'bold',
              padding: '6px 10px',
              borderRadius: '4px',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(255, 90, 0, 0.3)'
            }}
          >
            + ROTATE
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container hero-container">
        
        <div className="hero-main-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge-highlight">SINCE 2017</span>
            <span className="badge-separator">•</span>
            <span>SINNAR MIDC, MAHARASHTRA</span>
          </motion.div>

          <h1 className="hero-massive-title">
            <SplitText text="ENGINEERING" className="line-1" />
            <SplitText text="THAT WORKS." className="line-2" />
          </h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Precision Machining. Industrial Welding.<br />
            Custom Fabrication. Reliable Solutions.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a 
              href="#capabilities" 
              className="btn-primary"
            >
              EXPLORE CAPABILITIES <span className="cta-arrow">→</span>
            </motion.a>
            <motion.a 
              href="/about"
              className="btn-outline-play"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} /> WATCH WORKSHOP
            </motion.a>
          </motion.div>
        </div>

        <div className="hero-pagination">
          <div className="page-dot active">01</div>
          <div className="page-line"></div>
          <div className="page-dot">02</div>
          <div className="page-line"></div>
          <div className="page-dot">03</div>
        </div>

        {/* Floating Stats Bar */}
        <motion.div 
          className="floating-stats-bar glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="stat-item">
            <Calendar className="stat-icon" size={32} />
            <div className="stat-text">
              <h4>9+</h4>
              <p>Years<br/>Experience</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <Briefcase className="stat-icon" size={32} />
            <div className="stat-text">
              <h4>500+</h4>
              <p>Projects<br/>Completed</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <Users className="stat-icon" size={32} />
            <div className="stat-text">
              <h4>100+</h4>
              <p>Happy<br/>Clients</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <Shield className="stat-icon" size={32} />
            <div className="stat-text">
              <h4>100%</h4>
              <p>Quality<br/>Commitment</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
