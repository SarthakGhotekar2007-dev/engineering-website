import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SceneWrapper from '../3D/SceneWrapper';
const Process3DModel = React.lazy(() => import('../3D/Process3DModel'));
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: '01',
    title: 'RAW MATERIAL',
    details: ['Material selection', 'Grade verification', 'Dimensions check'],
    tolerance: '± 0.05 MM',
    status: 'MATERIAL READY',
    precision: 15
  },
  {
    id: '02',
    title: 'MACHINING',
    details: ['Precision Turning', 'Drilling', 'Milling'],
    tolerance: '± 0.01 MM',
    status: 'SPINDLE ACTIVE',
    precision: 40
  },
  {
    id: '03',
    title: 'WELDING',
    details: ['Arc Welding', 'MIG/TIG Welding', 'Joint Inspection'],
    tolerance: '± 0.05 MM',
    status: 'WELDING ACTIVE',
    precision: 60
  },
  {
    id: '04',
    title: 'FABRICATION',
    details: ['Structural Assembly', 'Frame Alignment', 'Custom fitting'],
    tolerance: '± 0.1 MM',
    status: 'ASSEMBLY ACTIVE',
    precision: 80
  },
  {
    id: '05',
    title: 'FINISHING',
    details: ['Surface Grinding', 'Anti-rust Coating', 'Final Polish'],
    tolerance: '± 0.005 MM',
    status: 'FINISHING ACTIVE',
    precision: 95
  },
  {
    id: '06',
    title: 'DELIVERY',
    details: ['Quality check', 'Custom packaging', 'Dispatch'],
    tolerance: 'N/A',
    status: 'DISPATCH READY',
    precision: 100
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Scroll-driven progression using GSAP
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate step based on progress (0 to 0.99 map to 0 to 4)
          let step = Math.floor(progress * processSteps.length);
          if (step >= processSteps.length) step = processSteps.length - 1;
          setActiveStep(step);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeData = processSteps[activeStep];

  return (
    <section className="process-section bg-black section-padding" id="process" ref={sectionRef}>
      {/* 3D Background Process Model */}
      <div className="process-3d-bg">
        <SceneWrapper camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Process3DModel activeStep={activeStep} />
          </Suspense>
        </SceneWrapper>
      </div>

      {/* Large faint background number */}
      <div className="bg-huge-number">
        {activeData.id}
      </div>

      <div className="container relative z-10">
        <div className="process-header">
          <h4 className="section-subtitle">ENGINEERING PROCESS</h4>
          <h2 className="massive-section-title">WORKFLOW</h2>
          <p className="process-desc">From requirement to delivery, every component follows a controlled engineering process.</p>
        </div>

        <div className="process-layout">
          {/* Left side: Timeline */}
          <div className="process-timeline-container">

            <div className="timeline-track">
              {/* Progress Line Background */}
              <div className="timeline-line-bg"></div>

              {/* Active Progress Line */}
              <div className="timeline-line-active-wrapper">
                <motion.div
                  className="timeline-line-active"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>

              {/* Nodes */}
              <div className="timeline-nodes">
                {processSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  const isPast = index < activeStep;

                  return (
                    <div
                      key={step.id}
                      className={`timeline-node-wrapper ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    >
                      <div className="node-id">{step.id}</div>

                      <div className="node-indicator">
                        <div className="node-circle">
                          {isActive && <motion.div layoutId="active-dot" className="node-dot-active" />}
                        </div>
                      </div>

                      <div className="node-title">{step.title}</div>

                      {/* Hover Info Panel (only visible on active) */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="node-info-panel"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="panel-header">PROJECT INPUT</div>
                            <div className="panel-divider"></div>
                            <ul className="panel-list">
                              {step.details.map((detail, i) => (
                                <li key={i}><span className="bullet">•</span> {detail}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side: Technical HUD */}
          <div className="process-hud-container">
            <div className="tech-hud">
              <div className="hud-header">
                ENGINEERING WORKFLOW
                <div className="hud-scan-line"></div>
              </div>

              <div className="hud-body">
                <div className="hud-row">
                  <span className="hud-label">CURRENT STAGE</span>
                  <span className="hud-value highlight">{activeData.id} / {activeData.title}</span>
                </div>

                <div className="hud-row hud-progress-row">
                  <div className="hud-label-flex">
                    <span className="hud-label">PRECISION CHECK</span>
                    <span className="hud-percent">{activeData.precision}%</span>
                  </div>
                  <div className="hud-progress-bar">
                    <motion.div
                      className="hud-progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${activeData.precision}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <div className="hud-row">
                  <span className="hud-label">TOLERANCE</span>
                  <span className="hud-value">{activeData.tolerance}</span>
                </div>

                <div className="hud-row border-none">
                  <span className="hud-label">STATUS</span>
                  <span className="hud-value status-blinker">
                    <span className="status-dot"></span> {activeData.status}
                  </span>
                </div>
              </div>

              <div className="hud-footer">
                SAI KRUPA ENGINEERING
              </div>

              {/* Corner Accents */}
              <div className="hud-corner top-left"></div>
              <div className="hud-corner top-right"></div>
              <div className="hud-corner bottom-left"></div>
              <div className="hud-corner bottom-right"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
