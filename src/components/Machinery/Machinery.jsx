import React, { Suspense, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SceneWrapper from '../3D/SceneWrapper';
const Machinery3DModel = React.lazy(() => import('../3D/Machinery3DModel'));
import './Machinery.css';

const Machinery = () => {
  const [isExploded, setIsExploded] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const scanRef = useRef(null);

  const machines = [
    { name: 'LATHE', image: '/01_lathe_machine.png', specs: 'Precision Turning & Custom Components' },
    { name: 'DRILLING', image: '/02_drilling_machine.png', specs: 'General & Industrial Component Drilling' },
    { name: 'ARC WELDING', image: '/03_arc_welding.png', specs: 'Heavy Duty Structural Welding' },
    { name: 'MIG WELDING', image: '/09_welding_work.png', specs: 'High Speed Fabrication Welding' },
    { name: 'TIG WELDING', image: '/03_arc_welding.png', specs: 'Precision Welding For Fine Finish' },
    { name: 'FABRICATION', image: '/04_grinding_fabrication.png', specs: 'Custom Industrial Structures' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScanned) {
          setHasScanned(true);
          // Complete scan after 2 seconds
          setTimeout(() => setScanComplete(true), 2000);
        }
      },
      { threshold: 0.5 }
    );
    
    if (scanRef.current) observer.observe(scanRef.current);
    return () => observer.disconnect();
  }, [hasScanned]);

  return (
    <section className="machinery-section bg-gunmetal section-padding" id="machinery">
      <div className="container">
        <h4 className="section-subtitle">OUR WORKSHOP</h4>
        <h2 className="massive-section-title">MACHINERY</h2>
        
        {/* Interactive 3D Machine Section */}
        <div className="interactive-3d-machinery" ref={scanRef}>
          <div className="machinery-3d-header">
            <h3>HEAVY DUTY LATHE</h3>
            <p>Interactive 3D Model</p>
          </div>
          
          <div className="machinery-3d-canvas-container">
            {/* Technical Scan Effect */}
            {hasScanned && !scanComplete && (
              <motion.div 
                className="technical-scan-line"
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 2, ease: "linear" }}
              />
            )}
            
            {scanComplete && (
              <motion.div 
                className="system-analysis-panel"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="sap-header">SYSTEM ANALYSIS</div>
                <ul>
                  <li><span className="sap-check">✓</span> SPINDLE</li>
                  <li><span className="sap-check">✓</span> CHUCK</li>
                  <li><span className="sap-check">✓</span> BED</li>
                  <li><span className="sap-check">✓</span> TAILSTOCK</li>
                </ul>
              </motion.div>
            )}

            <SceneWrapper camera={{ position: [0, 2, 8], fov: 45 }} style={{ pointerEvents: 'auto' }}>
              <Suspense fallback={null}>
                <Machinery3DModel isExploded={isExploded} />
              </Suspense>
            </SceneWrapper>
            
            {/* Exploded View Toggle Overlaid on Canvas */}
            <div className="exploded-view-toggle">
              <button 
                className={`btn-explode ${isExploded ? 'active' : ''}`}
                onClick={() => setIsExploded(!isExploded)}
              >
                {isExploded ? 'ASSEMBLE VIEW' : 'EXPLODED VIEW'}
              </button>
            </div>
          </div>
          
          <div className="machinery-3d-controls">
            <span>← Drag to Rotate →</span>
            <span>Scroll to Zoom</span>
            <span>Hover to Inspect</span>
          </div>
        </div>

        <div className="machinery-grid">
          {machines.map((machine, idx) => (
            <div className="machine-card" key={idx}>
              <div className="machine-image">
                <img src={machine.image} alt={machine.name} />
                <div className="machine-overlay"></div>
              </div>
              <div className="machine-info">
                <h3>{machine.name}</h3>
                <p>{machine.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machinery;
