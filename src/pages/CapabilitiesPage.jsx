import React, { useEffect, useState } from 'react';
import { Settings, Calendar, Briefcase, Shield, CheckCircle2, Clock, MapPin, SearchCode, PenTool, Wrench, Users, Target, Settings2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import TiltCard from '../components/TiltCard/TiltCard';
import './CapabilitiesPage.css';

const CapabilitiesPage = () => {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: '01',
      title: 'CUSTOM APPROACH',
      icon: <Shield size={24} className="animate-shield" />,
      desc: 'Every project is unique. We build as per your need.',
      label: 'PROJECT INPUT',
      features: ['Drawing', 'Sample', 'Specification'],
      status: 'CUSTOM BUILT'
    },
    {
      id: '02',
      title: 'QUALITY ASSURED',
      icon: <Settings size={24} className="animate-gear" />,
      desc: 'Quality checks at every stage for perfect results.',
      label: 'INSPECTION',
      features: ['Dimension Check', 'Material Testing', 'Final QC'],
      status: 'QUALITY VERIFIED'
    },
    {
      id: '03',
      title: 'ON-TIME DELIVERY',
      icon: <Clock size={24} className="animate-clock" />,
      desc: 'Committed to delivering every project on time.',
      label: 'LOGISTICS',
      features: ['Timeline Planning', 'Fast Execution', 'Safe Dispatch'],
      status: 'SCHEDULE ALIGNED'
    },
    {
      id: '04',
      title: 'COMPLETE SUPPORT',
      icon: <Settings2 size={24} className="animate-sliders" />,
      desc: 'From discussion to delivery, we are with you at every step.',
      label: 'SERVICE',
      features: ['Consultation', 'Updates', 'After-Sales'],
      status: 'SUPPORT ACTIVE'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      id: '01',
      title: 'PRECISION MACHINING',
      image: '/01_lathe_machine.png',
      icon: <Settings size={28} />,
      desc: 'High precision lathe work for a wide range of components and custom parts.',
      features: ['Turning', 'Boring', 'Facing', 'Shaft Work', 'Threading', 'Bush Work', 'Custom Components']
    },
    {
      id: '02',
      title: 'DRILLING',
      image: '/02_drilling_machine.png',
      icon: <SearchCode size={28} />,
      desc: 'Accurate and efficient drilling solutions for all types of industrial components.',
      features: ['General Drilling', 'Industrial Component Drilling', 'Hole Making', 'Custom Drilling Requirements']
    },
    {
      id: '03',
      title: 'WELDING',
      image: '/03_arc_welding.png',
      icon: <PenTool size={28} />,
      desc: 'Strong, reliable and clean welding for industrial and custom applications.',
      features: ['Arc Welding', 'Gas Welding', 'MIG Welding', 'Repair Welding', 'TIG Welding']
    },
    {
      id: '04',
      title: 'CUSTOM FABRICATION',
      image: '/04_grinding_fabrication.png',
      icon: <Wrench size={28} />,
      desc: 'Custom fabrication for industrial, structural and commercial requirements.',
      features: ['Frames', 'Machine Parts', 'Gates', 'Supports', 'Industrial Structures', 'Custom Fabricated Components']
    },
    {
      id: '05',
      title: 'REPAIR & MAINTENANCE',
      image: '/09_welding_work.png',
      icon: <Settings size={28} />,
      desc: 'Expert repair and maintenance to extend the life of your equipment and components.',
      features: ['Shaft Repair', 'Fabrication Repair', 'Machine Part Repair', 'Modification Work', 'Welding Repair']
    }
  ];

  return (
    <div className="capabilities-page bg-black">
      
      {/* 1. Capabilities Hero Section */}
      <section className="cap-hero">
        <div className="cap-hero-bg"></div>
        <div className="cap-hero-overlay"></div>
        <div className="grain-overlay"></div>
        
        <div className="container cap-hero-container">
          <div className="cap-hero-content">
            <h4 className="section-subtitle">WHAT WE DO</h4>
            <h1 className="cap-massive-title">
              ENGINEERING<br />
              <span className="text-orange">CAPABILITIES</span>
            </h1>
            
            <p className="cap-hero-subtext">Precision Work. Practical Solutions. Reliable Results.</p>
            
            <p className="cap-hero-desc">
              From machining to fabrication, we combine experience, technology and craftsmanship to deliver work that meets industrial standards and exceeds expectations.
            </p>
            
            <button className="btn-outline mt-30">LET'S BUILD TOGETHER <span>→</span></button>
          </div>

          <div className="cap-hero-stats glass">
            <div className="hero-stat-row">
              <Settings className="stat-icon" size={32} />
              <div className="stat-text">
                <strong>2017</strong>
                <span>ESTABLISHED</span>
              </div>
            </div>
            <div className="stat-divider-horizontal"></div>
            <div className="hero-stat-row">
              <Users className="stat-icon" size={32} />
              <div className="stat-text">
                <strong>9+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>
            </div>
            <div className="stat-divider-horizontal"></div>
            <div className="hero-stat-row">
              <Briefcase className="stat-icon" size={32} />
              <div className="stat-text">
                <strong>500+</strong>
                <span>PROJECTS COMPLETED</span>
              </div>
            </div>
            <div className="stat-divider-horizontal"></div>
            <div className="hero-stat-row">
              <Shield className="stat-icon" size={32} />
              <div className="stat-text">
                <strong>100%</strong>
                <span>QUALITY COMMITMENT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities Grid Section */}
      <AnimatedSection>
      <section className="core-capabilities section-padding bg-black">
        <div className="container">
          <div className="text-center mb-60">
            <h4 className="section-subtitle">OUR EXPERTISE</h4>
            <h2 className="content-title text-white">6 CORE CAPABILITIES</h2>
            <p className="text-grey">One Workshop. Multiple Engineering Solutions.</p>
          </div>

          <div className="core-cap-grid">
            {/* Standard 5 Cards */}
            {capabilities.map((cap) => (
              <TiltCard key={cap.id} className="core-cap-card">
                <div className="core-cap-img-wrapper">
                  <img src={cap.image} alt={cap.title} />
                  <div className="core-cap-number">{cap.id}</div>
                  <div className="core-cap-icon-box">{cap.icon}</div>
                </div>
                
                <div className="core-cap-content">
                  <h3 className="core-cap-title">{cap.title}</h3>
                  <p className="core-cap-desc">{cap.desc}</p>
                  
                  <ul className="core-cap-features">
                    {cap.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle2 size={14} className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn-explore">EXPLORE CAPABILITY <span>→</span></button>
                </div>
              </TiltCard>
            ))}

            {/* Custom 6th Card with Process Flow */}
            <TiltCard className="core-cap-card">
              <div className="core-cap-img-wrapper">
                <img src="/06_custom_component.png" alt="Custom Manufacturing" />
                <div className="core-cap-number">06</div>
                <div className="core-cap-icon-box"><Settings size={28} /></div>
              </div>
              
              <div className="core-cap-content">
                <h3 className="core-cap-title">CUSTOM COMPONENT<br/>MANUFACTURING</h3>
                <p className="core-cap-desc">End-to-end custom component manufacturing as per your drawing, sample or requirement.</p>
                
                <div className="process-flow-diagram">
                  <div className="flow-step">
                    <div className="flow-icon"><PenTool size={20} /></div>
                    <span>Drawing</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-icon"><Target size={20} /></div>
                    <span>Measurement</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-icon"><Settings size={20} /></div>
                    <span>Machining</span>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <div className="flow-icon"><CheckCircle2 size={20} /></div>
                    <span>Finishing</span>
                  </div>
                </div>
                
                <button className="btn-explore mt-auto">EXPLORE CAPABILITY <span>→</span></button>
              </div>
            </TiltCard>

          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* 3. Custom Solutions / Bottom CTA */}
      <AnimatedSection>
        <section className="custom-solutions-section bg-deep-black section-padding relative overflow-hidden">
          
          {/* Subtle Technical Background HUD */}
          <div className="solutions-bg-hud">
            <div className="hud-graphic">
              <pre>
{`       ┌───────────────┐
       │               │
 X ────┤   PRECISION   ├──── X
       │               │
 Y ────┤    SYSTEM     ├──── Y
       │               │
       └───────────────┘
`}
              </pre>
              <div className="hud-metric">± 0.01 MM</div>
            </div>
          </div>

          <div className="container custom-solutions-flex relative z-10">
            
            <div className="custom-solutions-left">
              <h4 className="section-subtitle">CUSTOM SOLUTIONS</h4>
              <h2 className="content-title">
                BUILT AROUND<br/>
                YOUR REQUIREMENTS
              </h2>
              <p className="text-grey mb-30">
                We work on customer drawings, samples or ideas and deliver components with precision, quality and reliability.
              </p>
              
              <a href="#contact" className="btn-primary-tech massive-btn-sol">
                SEND YOUR REQUIREMENT <ArrowRight size={20} className="btn-icon arrow-smooth" />
              </a>

              {/* Technical Metadata Left */}
              <div className="tech-metadata-left mt-30">
                <div className="metadata-title">CUSTOM ENGINEERING</div>
                <div className="metadata-line"></div>
                <div className="metadata-items">
                  <span>DRAWING <CheckCircle2 size={12} className="text-orange" /></span>
                  <span>SAMPLE <CheckCircle2 size={12} className="text-orange" /></span>
                  <span>PROTOTYPE <CheckCircle2 size={12} className="text-orange" /></span>
                  <span>BATCH <CheckCircle2 size={12} className="text-orange" /></span>
                </div>
              </div>
            </div>

            <div className="custom-solutions-right">
              {/* Live Engineering Status */}
              <div className="live-eng-status">
                <div className="status-top">
                  <span className="pulse-dot"></span>
                  ENGINEERING SUPPORT
                </div>
                <div className="status-bottom">
                  READY FOR REQUIREMENTS
                </div>
              </div>

              {/* Vertical Technical Modules */}
              <div className="tech-modules-container">
                {solutions.map((sol, index) => {
                  const isActive = activeSolution === index;
                  return (
                    <motion.div 
                      key={sol.id}
                      className={`tech-module-card ${isActive ? 'active' : ''}`}
                      onMouseEnter={() => setActiveSolution(index)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="tm-header">
                        <div className="tm-id">{sol.id} <span className="tm-dot">●</span></div>
                        <h4 className="tm-title">{sol.title}</h4>
                        <div className="tm-icon">{sol.icon}</div>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            className="tm-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="tm-content-inner">
                              <p className="tm-desc">{sol.desc}</p>
                              
                              <div className="tm-divider">
                                <span className="tm-divider-text">{sol.id} / {sol.title}</span>
                                <span className="tm-divider-line"></span>
                              </div>

                              <div className="tm-footer-info">
                                <div className="tm-features">
                                  <span className="tm-label">{sol.label}</span>
                                  {sol.features.map(f => (
                                    <span key={f} className="tm-feature-item">
                                      <CheckCircle2 size={12} /> {f}
                                    </span>
                                  ))}
                                </div>
                                <div className="tm-status-box">
                                  <span className="tm-label">STATUS</span>
                                  <span className="tm-status-text">{sol.status}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Footer Tagline */}
      <div className="footer-tagline-bar bg-black">
        <div className="container">
          <p>Precision. Strength. Reliability. <span className="text-orange">That's Our Capability.</span></p>
        </div>
      </div>

    </div>
  );
};

export default CapabilitiesPage;
