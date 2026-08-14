import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Settings, Wrench, SearchCode, PenTool, Flame, Factory, ChevronRight, Phone, ArrowRight, Circle, RefreshCcw, Target, Box, Scissors, Sparkles, Package, Orbit } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import SceneWrapper from '../components/3D/SceneWrapper';
const Machinery3DModel = React.lazy(() => import('../components/3D/Machinery3DModel'));
import './MachineryPage.css';

const MachineryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCap, setActiveCap] = useState('SHAFT');

  const capData = {
    'SHAFT': { title: 'SHAFT', desc: 'Turning • Facing • Threading', label: 'PRECISION MACHINING' },
    'BUSH': { title: 'BUSH', desc: 'Boring • Facing • Grooving', label: 'INTERNAL MACHINING' },
    'THREADING': { title: 'THREADING', desc: 'Internal • External • Custom Pitch', label: 'THREAD CUTTING' },
    'TURNING': { title: 'TURNING', desc: 'OD Turning • Step Turning', label: 'SURFACE MACHINING' },
    'CUSTOM': { title: 'CUSTOM COMPONENTS', desc: 'Specialized parts based on drawing', label: 'CUSTOM MANUFACTURING' }
  };

  const machines = [
    {
      id: '01',
      title: 'LATHE MACHINE',
      image: '/01_lathe_machine.png',
      bullets: ['Turning', 'Facing', 'Threading', 'Boring', 'Shaft Work', 'Bush Work', 'Custom Components']
    },
    {
      id: '02',
      title: 'DRILLING MACHINE',
      image: '/02_drilling_machine.png',
      bullets: ['General Drilling', 'Industrial Component Drilling', 'Hole Making', 'Fabrication Requirements']
    },
    {
      id: '03',
      title: 'ARC WELDING SETUP',
      image: '/03_arc_welding.png',
      bullets: ['Structural Welding', 'Machine Parts', 'Repair Work', 'Fabrication']
    },
    {
      id: '04',
      title: 'MIG WELDING',
      image: '/04_grinding_fabrication.png',
      bullets: ['Fabrication', 'Industrial Components', 'Custom Jobs']
    },
    {
      id: '05',
      title: 'TIG WELDING',
      image: '/09_welding_work.png',
      bullets: ['Precision Welding', 'Custom Components', 'Suitable Specialised Jobs']
    },
    {
      id: '06',
      title: 'GAS WELDING',
      image: '/03_arc_welding.png',
      bullets: ['Repair Work', 'Heating', 'Joining', 'Workshop Requirements']
    }
  ];

  return (
    <div className="machinery-page bg-black">

      {/* 1. Machinery Hero Section */}
      <section className="mach-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="mach-hero-bg"></div>
        <div className="mach-hero-overlay"></div>
        
        {/* 3D Model Background */}
        <div className="hero-3d-container" style={{ position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)', width: '60%', height: '80%', zIndex: 0 }}>
          <SceneWrapper camera={{ position: [5, 2, 8], fov: 45 }} style={{ pointerEvents: 'auto' }}>
            <React.Suspense fallback={null}>
              <Machinery3DModel isExploded={false} />
            </React.Suspense>
          </SceneWrapper>
        </div>

        <div className="grain-overlay"></div>

        <div className="container mach-hero-container">
          <h4 className="section-subtitle">OUR MACHINERY</h4>
          <h1 className="mach-massive-title">
            THE MACHINES<br />
            <span className="text-orange">BEHIND OUR WORK.</span>
          </h1>
          <p className="mach-hero-desc">
            Equipped for machining, drilling, welding, repair and custom fabrication requirements.
          </p>

          <div className="mach-hero-pills">
            <div className="info-pill">
              <Calendar size={18} />
              <span>SINCE 2017</span>
            </div>
            <div className="pill-dot">•</div>
            <div className="info-pill">
              <MapPin size={18} />
              <span>SINNAR MIDC, MAHARASHTRA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Workshop Overview & Machinery Grid Combined */}
      <AnimatedSection animation="fadeIn">
        <section className="workshop-machinery-section section-padding bg-deep-black relative overflow-hidden" id="capabilities">

          {/* Subtle Blueprint Background */}
          <div className="blueprint-bg">
            <pre>
              {`X ───────────────────────────────

Y ────────────────

Z ───────────────────────────────

              01
              02
              03`}
            </pre>
          </div>

          <div className="container relative z-10">

            <div className="workshop-top-split">
              <div className="workshop-top-left">
                <div className="tech-label">03 / WORKSHOP CAPABILITY</div>
                <h2 className="content-title mach-compact-title">
                  A PRACTICAL WORKSHOP<br />
                  BUILT FOR REAL ENGINEERING.
                </h2>
                <p className="text-grey mb-30 mt-20">
                  Since 2017, we have been delivering practical engineering solutions with dedication, quality and direct communication.
                </p>
                <a href="#machinery-grid" className="btn-primary-tech massive-btn-sol">
                  EXPLORE OUR CAPABILITIES <ArrowRight size={20} className="btn-icon arrow-smooth" />
                </a>
              </div>

              <div className="workshop-top-right">

                <div className="workshop-panels-container">
                  {/* Workshop Data Panel */}
                  <div className="workshop-data-panel">
                    <div className="data-panel-header">
                      WORKSHOP DATA
                      <div className="header-line"></div>
                    </div>
                    <div className="data-panel-body">
                      <div className="data-row">
                        <span className="data-huge">2017</span>
                        <span className="data-label">WORKSHOP SINCE</span>
                      </div>
                      <div className="data-row">
                        <span className="data-huge">03</span>
                        <span className="data-label">SKILLED WORKERS</span>
                      </div>
                      <div className="data-row">
                        <span className="data-huge text-orange">CORE</span>
                        <span className="data-label">MACHINING / FABRICATION</span>
                      </div>
                    </div>
                  </div>

                  {/* Workshop Status Panel */}
                  <div className="workshop-status-panel">
                    <div className="status-header">WORKSHOP STATUS</div>
                    <div className="status-row active">
                      <span className="pulse-dot"></span> OPERATIONAL
                    </div>
                    <div className="status-details">
                      <div className="sd-row"><span>MACHINING</span> <span className="text-orange">AVAILABLE</span></div>
                      <div className="sd-row"><span>FABRICATION</span> <span className="text-orange">AVAILABLE</span></div>
                      <div className="sd-row"><span>WELDING</span> <span className="text-orange">AVAILABLE</span></div>
                    </div>
                    <div className="status-footer">EST. SINCE 2017</div>
                  </div>
                </div>

              </div>
            </div>

            <div className="machinery-grid-section mt-80" id="machinery-grid">
              <h3 className="tech-label mb-30">MACHINERY</h3>
              <div className="machinery-3x2-grid">

                {/* Card 1 */}
                <div className="mach-tech-card">
                  <img src="/01_lathe_machine.png" alt="Lathe Work" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">01</span>
                    <Settings size={28} className="mtc-icon icon-lathe" />
                  </div>
                  <h4 className="mtc-title">LATHE WORK</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>01 / LATHE WORK</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>TURNING</li>
                      <li>FACING</li>
                      <li>THREADING</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    PRECISION MACHINING <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="mach-tech-card">
                  <img src="/02_drilling_machine.png" alt="Drilling" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">02</span>
                    <SearchCode size={28} className="mtc-icon icon-drill" />
                  </div>
                  <h4 className="mtc-title">DRILLING</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>02 / DRILLING</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>GENERAL DRILLING</li>
                      <li>HOLE MAKING</li>
                      <li>CUSTOM REQ.</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    PRECISION DRILLING <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="mach-tech-card">
                  <img src="/03_arc_welding.png" alt="Welding" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">03</span>
                    <PenTool size={28} className="mtc-icon icon-weld" />
                  </div>
                  <h4 className="mtc-title">WELDING</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>03 / WELDING</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>ARC WELDING</li>
                      <li>TIG WELDING</li>
                      <li>MIG WELDING</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    STRONG JOINTS <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

                {/* Card 4 */}
                <div className="mach-tech-card">
                  <img src="/04_grinding_fabrication.png" alt="Gas Welding" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">04</span>
                    <Flame size={28} className="mtc-icon icon-gas" />
                  </div>
                  <h4 className="mtc-title">GAS WELDING</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>04 / GAS WELDING</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>REPAIR WORK</li>
                      <li>HEATING</li>
                      <li>JOINING</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    GAS OPERATIONS <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

                {/* Card 5 */}
                <div className="mach-tech-card">
                  <img src="/05_gears_and_shafts.png" alt="Fabrication" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">05</span>
                    <Factory size={28} className="mtc-icon icon-fab" />
                  </div>
                  <h4 className="mtc-title">FABRICATION</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>05 / FABRICATION</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>STRUCTURES</li>
                      <li>CUSTOM FRAMES</li>
                      <li>SUPPORTS</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    CUSTOM BUILD <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

                {/* Card 6 */}
                <div className="mach-tech-card">
                  <img src="/06_custom_component.png" alt="Repair Work" className="mtc-bg-image" />
                  <div className="mtc-header">
                    <span className="mtc-num">06</span>
                    <Wrench size={28} className="mtc-icon icon-repair" />
                  </div>
                  <h4 className="mtc-title">REPAIR WORK</h4>
                  <div className="mtc-hover-content">
                    <div className="mtc-divider">
                      <span>06 / REPAIR WORK</span>
                      <div className="line"></div>
                    </div>
                    <ul className="mtc-list">
                      <li>MACHINE PARTS</li>
                      <li>SHAFTS</li>
                      <li>MODIFICATION</li>
                    </ul>
                    <div className="mtc-status">STATUS <span className="pulse-dot"></span> AVAILABLE</div>
                  </div>
                  <div className="mtc-default-footer">
                    MAINTENANCE <ArrowRight size={16} className="mtc-arrow" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Interactive Machine Capabilities & Process Pipeline */}
      <AnimatedSection animation="fadeIn">
        <section className="machine-interactive-section section-padding bg-black relative">
          <div className="container relative z-10">

            {/* Top Info Bar */}
            <div className="interactive-top-bar">
              <div className="tech-label">02 / MACHINERY</div>
              <div className="status-label"><span className="pulse-dot"></span> WORKSHOP OPERATIONAL</div>
            </div>

            <h2 className="mach-compact-title mt-20 mb-10">ONE MACHINE.<br />MANY POSSIBILITIES.</h2>
            <p className="text-grey mb-60 max-w-600">
              From precision turning to custom components, our machining capabilities adapt to the requirement.
            </p>

            {/* Interactive Split Panel */}
            <div className="interactive-panels-container">

              {/* Left: Machine Profile */}
              <div className="machine-profile-panel">
                <div className="panel-header-sm">01 / MACHINE PROFILE</div>

                <div className="mp-image-container">
                  <img src="/01_lathe_machine.png" alt="Lathe Machine" className="mp-machine-img" />
                  <div className="mp-img-overlay"></div>
                </div>

                <h3 className="mp-title mt-20">LATHE MACHINE</h3>
                <div className="mp-subtitle text-orange">PRECISION TURNING</div>

                <div className="mp-divider"></div>

                <ul className="mp-features">
                  <li>Turning</li>
                  <li>Facing</li>
                  <li>Threading</li>
                </ul>

                <div className="mp-status mt-auto">
                  <span>STATUS</span>
                  <span className="text-white flex items-center gap-2"><span className="pulse-dot"></span> READY</span>
                </div>
              </div>

              {/* Right: Capability Map */}
              <div className="capability-map-panel">
                <div className="panel-header-sm">MACHINE CAPABILITIES</div>

                <div className="cap-selectors-row">
                  {/* Selector 1 */}
                  <div
                    className={`cap-selector ${activeCap === 'SHAFT' ? 'active' : ''}`}
                    onClick={() => setActiveCap('SHAFT')}
                  >
                    <div className="cs-num">01</div>
                    <div className="cs-icon"><Settings size={24} /></div>
                    <div className="cs-name">SHAFT</div>
                  </div>
                  {/* Selector 2 */}
                  <div
                    className={`cap-selector ${activeCap === 'BUSH' ? 'active' : ''}`}
                    onClick={() => setActiveCap('BUSH')}
                  >
                    <div className="cs-num">02</div>
                    <div className="cs-icon"><Circle size={24} /></div>
                    <div className="cs-name">BUSH</div>
                  </div>
                  {/* Selector 3 */}
                  <div
                    className={`cap-selector ${activeCap === 'THREADING' ? 'active' : ''}`}
                    onClick={() => setActiveCap('THREADING')}
                  >
                    <div className="cs-num">03</div>
                    <div className="cs-icon"><Orbit size={24} /></div>
                    <div className="cs-name">THREAD</div>
                  </div>
                  {/* Selector 4 */}
                  <div
                    className={`cap-selector ${activeCap === 'TURNING' ? 'active' : ''}`}
                    onClick={() => setActiveCap('TURNING')}
                  >
                    <div className="cs-num">04</div>
                    <div className="cs-icon"><RefreshCcw size={24} /></div>
                    <div className="cs-name">TURNING</div>
                  </div>
                  {/* Selector 5 */}
                  <div
                    className={`cap-selector ${activeCap === 'CUSTOM' ? 'active' : ''}`}
                    onClick={() => setActiveCap('CUSTOM')}
                  >
                    <div className="cs-num">05</div>
                    <div className="cs-icon"><Target size={24} /></div>
                    <div className="cs-name">CUSTOM</div>
                  </div>
                </div>

                <div className="cap-details-box">
                  <div className="cd-header">SELECTED: {capData[activeCap].title}</div>
                  <div className="cd-desc">{capData[activeCap].desc}</div>
                  <div className="cd-label">{capData[activeCap].label}</div>
                </div>
              </div>

            </div>

            {/* Process Pipeline */}
            <div className="process-pipeline-section mt-100">
              <h3 className="tech-label mb-40 text-center">FROM RAW MATERIAL TO FINISHED COMPONENT</h3>

              <div className="pipeline-container">
                <div className="pipeline-line-bg"></div>
                <div className="pipeline-line-fill"></div>

                <div className="pipeline-nodes-wrapper">
                  <div className="p-node">
                    <div className="p-icon-box"><Box size={24} className="icon-cube" /></div>
                    <div className="p-num">01</div>
                    <div className="p-name">RAW</div>
                  </div>
                  <div className="p-node">
                    <div className="p-icon-box"><Scissors size={24} className="icon-cut" /></div>
                    <div className="p-num">02</div>
                    <div className="p-name">MACHINE</div>
                  </div>
                  <div className="p-node group-weld">
                    <div className="p-icon-box"><Flame size={24} className="icon-spark" /></div>
                    <div className="p-num">03</div>
                    <div className="p-name">WELDING</div>
                    <div className="p-tooltip">
                      <strong>WELDING</strong>
                      <span>Gas Welding</span>
                      <span>Arc Welding</span>
                      <span>Precision Joint</span>
                    </div>
                  </div>
                  <div className="p-node">
                    <div className="p-icon-box"><Factory size={24} className="icon-fab-lines" /></div>
                    <div className="p-num">04</div>
                    <div className="p-name">FAB</div>
                  </div>
                  <div className="p-node">
                    <div className="p-icon-box"><Sparkles size={24} className="icon-polish" /></div>
                    <div className="p-num">05</div>
                    <div className="p-name">FINISH</div>
                  </div>
                  <div className="p-node">
                    <div className="p-icon-box"><Package size={24} className="icon-slide" /></div>
                    <div className="p-num">06</div>
                    <div className="p-name">DELIVERY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Counters */}
            <div className="tech-counters-row mt-80">
              <div className="t-counter">
                <span className="tc-num">06</span>
                <span className="tc-label">CORE PROCESSES</span>
              </div>
              <div className="t-counter">
                <span className="tc-num">03</span>
                <span className="tc-label">WORKERS</span>
              </div>
              <div className="t-counter">
                <span className="tc-num">2017</span>
                <span className="tc-label">ESTABLISHED</span>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 5. Team & CTA Split */}
      <AnimatedSection animation="fadeIn">
        <section className="team-cta-split bg-black">
          <div className="team-cta-container">

            <div className="team-section section-padding">
              <div className="tech-label mb-30">OUR TEAM / 03</div>
              <h2 className="content-title mb-20 team-hierarchical-title">
                <span className="th-small">SMALL TEAM.</span><br />
                PRACTICAL EXPERIENCE.<br />
                <span className="th-orange text-orange">DIRECT COMMUNICATION.</span>
              </h2>
              <p className="text-grey mb-40 max-w-500">Our experienced team ensures every job is handled with care, quality and responsibility.</p>

              <div className="team-profiles-list">
                {/* Profile 1 */}
                <div className="team-profile-card">
                  <div className="tpc-header">
                    <span className="tpc-num">01</span>
                    <div className="tpc-name-role">
                      <h5 className="tpc-name">RAJENDRA GHOTEKAR</h5>
                      <span className="tpc-role">FOUNDER & OWNER</span>
                    </div>
                  </div>
                  <div className="tpc-hover-content">
                    <div className="tpc-line"></div>
                    <ul className="tpc-skills">
                      <li>Workshop Leadership</li>
                      <li>Production</li>
                      <li>Quality Control</li>
                    </ul>
                    <div className="tpc-link">VIEW PROFILE →</div>
                  </div>
                </div>

                {/* Profile 2 */}
                <div className="team-profile-card">
                  <div className="tpc-header">
                    <span className="tpc-num">02</span>
                    <div className="tpc-name-role">
                      <h5 className="tpc-name">WORKSHOP TEAM</h5>
                      <span className="tpc-role">MACHINING & FABRICATION</span>
                    </div>
                  </div>
                  <div className="tpc-hover-content">
                    <div className="tpc-line"></div>
                    <ul className="tpc-skills">
                      <li>Lathe Operations</li>
                      <li>Welding & Gas Welding</li>
                      <li>Custom Fabrication</li>
                    </ul>
                    <div className="tpc-link">VIEW PROFILE →</div>
                  </div>
                </div>

                {/* Profile 3 */}
                <div className="team-profile-card">
                  <div className="tpc-header">
                    <span className="tpc-num">03</span>
                    <div className="tpc-name-role">
                      <h5 className="tpc-name">WORKSHOP TEAM</h5>
                      <span className="tpc-role">PRODUCTION & QUALITY</span>
                    </div>
                  </div>
                  <div className="tpc-hover-content">
                    <div className="tpc-line"></div>
                    <ul className="tpc-skills">
                      <li>Material Inspection</li>
                      <li>Precision Check</li>
                      <li>Timely Delivery</li>
                    </ul>
                    <div className="tpc-link">VIEW PROFILE →</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section section-padding relative">
              {/* Background image overlay */}
              <div className="cta-bg-wrapper">
                <img src="/05_gears_and_shafts.png" alt="Engineering Background" className="cta-bg-image" />
                <div className="cta-bg-overlay"></div>
                <div className="cta-grid-overlay"></div>
              </div>

              <div className="cta-content-wrapper relative z-10">
                <div className="cta-top-bar mb-30">
                  <div className="tech-label text-white">PROJECT / 01</div>
                  <div className="status-label text-orange"><span className="pulse-dot"></span> ACCEPTING NEW REQUIREMENTS</div>
                </div>

                <h2 className="content-title mb-20 text-white cta-huge-title">HAVE A DRAWING<br />OR SAMPLE?</h2>
                <p className="text-grey mb-40 max-w-500">Share your drawing, sample or measurements with our engineering team.</p>

                <div className="cta-quote-divider"></div>

                <ul className="cta-quote-list">
                  <li>DRAWING</li>
                  <li>SAMPLE</li>
                  <li>MEASUREMENTS</li>
                  <li>CUSTOM REQUIREMENT</li>
                </ul>

                <Link to="/contact" className="btn-primary-tech cta-submit-btn mt-40" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>REQUEST A QUOTE <ArrowRight size={20} className="btn-icon arrow-smooth" style={{marginLeft: '8px'}} /></Link>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 6. Workshop Gallery */}
      <section className="gallery-section section-padding bg-gunmetal">
        <div className="container">
          <div className="gallery-header mb-50">
            <div className="tech-label mb-10">WORKSHOP / 06</div>
            <h2 className="content-title text-white">BUILT IN THE WORKSHOP.<br />DELIVERED TO SPEC.</h2>
            <p className="text-grey mt-10">A look inside our machining, welding and fabrication work.</p>
          </div>

          <div className="gallery-3x2-grid">
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/01_lathe_machine.png" alt="Lathe Work" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">01 / LATHE WORK</div>
                  <div className="gtc-hover-info">
                    <p>Precision turning</p>
                    <p>Threading and facing</p>
                    <div className="gtc-link text-orange mt-10">VIEW PROCESS →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/02_drilling_machine.png" alt="Drilling" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">02 / DRILLING</div>
                  <div className="gtc-hover-info">
                    <p>Accurate hole making</p>
                    <p>Custom depth control</p>
                    <div className="gtc-link text-orange mt-10">VIEW PROCESS →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.5}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/03_arc_welding.png" alt="Welding" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">03 / WELDING</div>
                  <div className="gtc-hover-info">
                    <p>Precision joining</p>
                    <p>Industrial fabrication</p>
                    <div className="gtc-link text-orange mt-10">VIEW PROCESS →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/04_grinding_fabrication.png" alt="Fabrication" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">04 / FABRICATION</div>
                  <div className="gtc-hover-info">
                    <p>Structural assemblies</p>
                    <p>Custom engineering</p>
                    <div className="gtc-link text-orange mt-10">VIEW PROCESS →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/08_workshop_interior.png" alt="Workshop" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">05 / WORKSHOP</div>
                  <div className="gtc-hover-info">
                    <p>Practical workspace</p>
                    <p>Direct communication</p>
                    <div className="gtc-link text-orange mt-10">VIEW PROCESS →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.6}>
              <div className="gallery-tech-card">
                <div className="gtc-img-wrapper">
                  <img src="/10_turned_shaft_component.png" alt="Finished Components" />
                  <div className="gtc-overlay"></div>
                </div>
                <div className="gtc-content">
                  <div className="gtc-top">06 / FINISHED COMPONENTS</div>
                  <div className="gtc-hover-info">
                    <p>Machined to requirement</p>
                    <p>Ready for application</p>
                    <div className="gtc-link text-orange mt-10">VIEW WORK →</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MachineryPage;
