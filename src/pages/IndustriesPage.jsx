import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar, MapPin, Settings, SearchCode, PenTool, Factory,
  Wrench, CheckCircle2, FileText, Component, Ruler, Lightbulb,
  MessageSquare, LayoutList, CheckCircle, Flame, Factory as IndustryIcon, Phone
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import TiltCard from '../components/TiltCard/TiltCard';
import SceneWrapper from '../components/3D/SceneWrapper';
const WeldingParticles3D = React.lazy(() => import('../components/3D/WeldingParticles3D'));
import './IndustriesPage.css';

const IndustriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      id: '01',
      title: 'MANUFACTURING & ENGINEERING',
      image: '/05_gears_and_shafts.png',
      bullets: ['Machine Components', 'Shafts', 'Bushes', 'Custom Parts', 'Repair Components']
    },
    {
      id: '02',
      title: 'INDUSTRIAL FACTORIES',
      image: '/08_workshop_interior.png',
      bullets: ['Machine Part Requirements', 'Maintenance Work', 'Welding', 'Drilling', 'Fabrication']
    },
    {
      id: '03',
      title: 'FABRICATION & CONTRACTORS',
      image: '/04_grinding_fabrication.png',
      bullets: ['Frames', 'Structures', 'Supports', 'Custom Fabrication', 'Welding Work']
    },
    {
      id: '04',
      title: 'AGRICULTURAL EQUIPMENT',
      image: '/10_turned_shaft_component.png',
      bullets: ['Farm Equipment Parts', 'Shaft Work', 'Repair Work', 'Custom Components', 'Welding & Fabrication']
    },
    {
      id: '05',
      title: 'MAINTENANCE & REPAIR',
      image: '/09_welding_work.png',
      bullets: ['Broken Components', 'Shaft Repair', 'Machine Part Repair', 'Welding Repair', 'Modification']
    }
  ];

  const [activeInd, setActiveInd] = useState('01');

  const interactiveIndustries = [
    {
      id: '01',
      title: 'MACHINING',
      desc: 'Precision components',
      fullDesc: 'Precision machining for custom components, shafts, bushes and other industrial requirements.',
      image: '/05_gears_and_shafts.png'
    },
    {
      id: '02',
      title: 'DRILLING',
      desc: 'Accurate hole work',
      fullDesc: 'Accurate drilling work based on component requirements and specifications.',
      image: '/02_drilling_machine.png'
    },
    {
      id: '03',
      title: 'WELDING',
      desc: 'Industrial joining',
      fullDesc: 'Reliable welding solutions for industrial fabrication and repair work.',
      image: '/03_arc_welding.png'
    },
    {
      id: '04',
      title: 'FABRICATION',
      desc: 'Custom structures',
      fullDesc: 'Custom fabrication of frames, supports and industrial structures.',
      image: '/04_grinding_fabrication.png'
    },
    {
      id: '05',
      title: 'REPAIR WORK',
      desc: 'Restoration & repair',
      fullDesc: 'Professional repair and restoration of broken machine parts and components.',
      image: '/09_welding_work.png'
    },
    {
      id: '06',
      title: 'CUSTOM JOBS',
      desc: 'Built to requirement',
      fullDesc: 'Specialized engineering jobs handled precisely according to your technical drawings.',
      image: '/06_custom_component.png'
    }
  ];

  const activeIndData = interactiveIndustries.find(ind => ind.id === activeInd);

  return (
    <div className="industries-page bg-black">

      {/* 1. Industries Hero Section */}
      <section className="ind-hero">
        <div className="ind-hero-bg"></div>
        <div className="ind-hero-overlay"></div>
        <div className="grain-overlay"></div>

        <div className="container ind-hero-container">
          <div className="ind-hero-content">
            <h4 className="section-subtitle">INDUSTRIES WE SERVE</h4>
            <h1 className="ind-massive-title">
              ENGINEERING SOLUTIONS<br />
              <span className="text-orange">FOR REAL-WORLD</span><br />
              INDUSTRIAL REQUIREMENTS.
            </h1>

            <p className="ind-hero-desc">
              Machining, Welding, Drilling, Fabrication And Repair Solutions For Factories, Engineering Businesses, Contractors And Custom Industrial Requirements.
            </p>

            <div className="ind-hero-pills mt-40">
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
        </div>
      </section>

      {/* 2. About Our Industrial Work (Interactive Selector) */}
      <AnimatedSection animation="slideLeft">
        <section className="about-industrial bg-gunmetal" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="container">

            <div className="flex justify-between items-end mb-40">
              <div>
                <div className="tech-label mb-10 text-grey">INDUSTRIES / 01</div>
                <h2 className="content-title text-white">BUILT FOR DIFFERENT<br />INDUSTRIAL REQUIREMENTS.</h2>
              </div>
              <div className="status-label text-orange flex items-center gap-2 mb-2">
                <span className="pulse-dot"></span> WORKSHOP ACTIVE
              </div>
            </div>

            <p className="text-grey mb-50 max-w-700">From individual components to fabrication and repair work, we support practical industrial requirements.</p>

            <div className="interactive-ind-split">
              {/* Left: 6 Items List */}
              <div className="ind-selector-list">
                {interactiveIndustries.map((ind, index) => (
                  <AnimatedSection animation="fadeUp" delay={0.1 * index} key={ind.id} once={true}>
                    <div
                      className={`ind-list-item ${activeInd === ind.id ? 'active' : ''}`}
                      onClick={() => setActiveInd(ind.id)}
                    >
                      <div className="ili-left">
                        <span className="ili-num">{ind.id}</span>
                        <div className="ili-text">
                          <h4>{ind.title}</h4>
                          <p>{ind.desc}</p>
                        </div>
                      </div>
                      <div className="ili-right">→</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Right: Dynamic Image Display */}
              <AnimatedSection animation="scaleUp" delay={0.3} once={true} className="ind-display-wrapper">
                <div className="ind-display-panel">
                  {interactiveIndustries.map((ind) => (
                    <div
                      key={ind.id}
                      className={`idp-image-box ${activeInd === ind.id ? 'visible' : 'hidden'}`}
                    >
                      <img src={ind.image} alt={ind.title} />
                      <div className="idp-overlay-gradient"></div>

                      {/* Hover Capability View */}
                      <div className="idp-hover-action">VIEW CAPABILITY →</div>

                      <div className="idp-bottom-badge">
                        <span>{ind.id} / {ind.title}</span>
                      </div>
                    </div>
                  ))}

                  <div className="idp-content">
                    <div className="idp-desc">{activeIndData.fullDesc}</div>
                    <div className="idp-counter">{activeInd} / 06</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 3. Industries We Serve Grid (Premium 3x3 Showcase) */}
      <section className="industries-grid-section section-padding bg-black">
        <div className="container">

          <div className="ind-grid-header mb-60">
            <div className="tech-label text-grey mb-10">INDUSTRIES / 06</div>
            <div className="cta-quote-divider mb-30" style={{ maxWidth: '100%', margin: '15px 0' }}></div>
            <h2 className="content-title text-white mb-20" style={{ fontSize: '2.5rem' }}>
              BUILT FOR THE INDUSTRIES<br />
              THAT KEEP THINGS MOVING.
            </h2>
            <p className="text-grey max-w-600" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              From precision components to fabrication, repair and custom engineering, we support practical industrial requirements.
            </p>
          </div>

          <div className="ind-3x3-grid">
            {/* Card 01 */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <TiltCard className="premium-ind-card">
                <div className="pic-img-wrapper">
                  <img src="/05_gears_and_shafts.png" alt="Manufacturing & Engineering" />
                  <div className="pic-overlay"></div>
                  <div className="pic-view-btn">VIEW CAPABILITY →</div>
                </div>
                <div className="pic-content">
                  <div className="pic-tag">01 / COMPONENT</div>
                  <div className="pic-number-bg">01</div>
                  <h3 className="pic-title"><span className="pic-num-front">01</span> MANUFACTURING &<br />ENGINEERING</h3>
                  <ul className="pic-bullets">
                    <li>Machine Components</li>
                    <li>Shafts</li>
                    <li>Bushes</li>
                    <li>Custom Parts</li>
                  </ul>
                  <div className="pic-hover-arrow">EXPLORE →</div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 02 */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <TiltCard className="premium-ind-card">
                <div className="pic-img-wrapper">
                  <img src="/08_workshop_interior.png" alt="Industrial Factories" />
                  <div className="pic-overlay"></div>
                  <div className="pic-view-btn">VIEW CAPABILITY →</div>
                </div>
                <div className="pic-content">
                  <div className="pic-tag">02 / INDUSTRY</div>
                  <div className="pic-number-bg">02</div>
                  <h3 className="pic-title"><span className="pic-num-front">02</span> INDUSTRIAL<br />FACTORIES</h3>
                  <ul className="pic-bullets">
                    <li>Machine Part Reqs.</li>
                    <li>Maintenance Work</li>
                    <li>Welding & Drilling</li>
                    <li>Fabrication</li>
                  </ul>
                  <div className="pic-hover-arrow">EXPLORE →</div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 03 */}
            <AnimatedSection animation="fadeUp" delay={0.5}>
              <TiltCard className="premium-ind-card">
                <div className="pic-img-wrapper" style={{ position: 'relative' }}>
                  <img src="/04_grinding_fabrication.png" alt="Fabrication & Contractors" />
                  
                  {/* 3D Welding Particles Overlay */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                    <SceneWrapper camera={{ position: [0, 0, 5], fov: 45 }}>
                      <React.Suspense fallback={null}>
                        <WeldingParticles3D />
                      </React.Suspense>
                    </SceneWrapper>
                  </div>

                  <div className="pic-overlay"></div>
                  <div className="pic-view-btn">VIEW CAPABILITY →</div>
                </div>
                <div className="pic-content">
                  <div className="pic-tag">03 / FAB</div>
                  <div className="pic-number-bg">03</div>
                  <h3 className="pic-title"><span className="pic-num-front">03</span> FABRICATION &<br />CONTRACTORS</h3>
                  <ul className="pic-bullets">
                    <li>Frames</li>
                    <li>Structures</li>
                    <li>Supports</li>
                    <li>Custom Fabrication</li>
                  </ul>
                  <div className="pic-hover-arrow">EXPLORE →</div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 04 */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <TiltCard className="premium-ind-card">
                <div className="pic-img-wrapper">
                  <img src="/10_turned_shaft_component.png" alt="Agricultural Equipment" />
                  <div className="pic-overlay"></div>
                  <div className="pic-view-btn">VIEW CAPABILITY →</div>
                </div>
                <div className="pic-content">
                  <div className="pic-tag">04 / AGRI</div>
                  <div className="pic-number-bg">04</div>
                  <h3 className="pic-title"><span className="pic-num-front">04</span> AGRICULTURAL<br />EQUIPMENT</h3>
                  <ul className="pic-bullets">
                    <li>Farm Equipment Parts</li>
                    <li>Shaft Work</li>
                    <li>Repair Work</li>
                    <li>Welding & Fab</li>
                  </ul>
                  <div className="pic-hover-arrow">EXPLORE →</div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 05 */}
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <TiltCard className="premium-ind-card">
                <div className="pic-img-wrapper">
                  <img src="/09_welding_work.png" alt="Maintenance & Repair" />
                  <div className="pic-overlay"></div>
                  <div className="pic-view-btn">VIEW CAPABILITY →</div>
                </div>
                <div className="pic-content">
                  <div className="pic-tag">05 / REPAIR</div>
                  <div className="pic-number-bg">05</div>
                  <h3 className="pic-title"><span className="pic-num-front">05</span> MAINTENANCE &<br />REPAIR</h3>
                  <ul className="pic-bullets">
                    <li>Broken Components</li>
                    <li>Shaft Repair</li>
                    <li>Machine Part Repair</li>
                    <li>Modification</li>
                  </ul>
                  <div className="pic-hover-arrow">EXPLORE →</div>
                </div>
              </TiltCard>
            </AnimatedSection>

            {/* Card 06 - CTA Card */}
            <AnimatedSection animation="fadeUp" delay={0.6}>
              <TiltCard className="premium-ind-card cta-type-card">
                <div className="pic-content" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                  <div className="pic-tag">06 / CUSTOM</div>
                  <div className="pic-number-bg">06</div>
                  <h3 className="pic-title"><span className="pic-num-front">06</span> CUSTOM ENGINEERING<br />REQUIREMENTS</h3>
                  <div className="cta-quote-divider mb-30 mt-20"></div>
                  <h4 className="text-white mb-10" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>HAVE A UNIQUE REQUIREMENT?</h4>
                  <p className="text-grey mb-40">Share your drawing, sample or measurements with us.</p>

                  <button className="btn-primary-tech" style={{ width: '100%', justifyContent: 'center' }}>SEND REQUIREMENT →</button>
                </div>
              </TiltCard>
            </AnimatedSection>
          </div>


        </div>
      </section>

      {/* 4. Multiple Industrial Requirements (Process Flows) */}
      <AnimatedSection animation="fadeIn">
        <section className="process-flows-section bg-black">
          {/* Compact Stats Strip */}
          <div className="compact-stats-strip">
            <div className="container">
              <div className="css-inner">
                <div className="css-item">
                  <span className="css-num">2017</span>
                  <span className="css-label">ESTABLISHED</span>
                </div>
                <div className="css-item">
                  <span className="css-num">06+</span>
                  <span className="css-label">CAPABILITIES</span>
                </div>
                <div className="css-item">
                  <span className="css-num">CUSTOM</span>
                  <span className="css-label">REQUIREMENTS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="process-header-block mb-50">
              <div className="tech-label text-grey mb-15">INDUSTRIES WE SERVE</div>
              <h2 className="content-title text-white mb-20" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
                ONE WORKSHOP.<br />
                <span className="text-orange">MULTIPLE INDUSTRIAL REQUIREMENTS.</span>
              </h2>
              <p className="text-grey max-w-600" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                Machining, fabrication and maintenance for practical industrial requirements.
              </p>
            </div>

            <div className="multi-flows-grid">

              <div className="flow-box new-flow-box">
                <div className="flow-box-header">
                  <h4>01 / MANUFACTURING</h4>
                  <div className="fb-arrow">→</div>
                </div>
                <p className="fb-desc">Precision machining for industrial components and custom requirements.</p>
                <div className="flow-box-steps">
                  <div className="f-step">
                    <div className="f-icon"><Settings size={24} /></div>
                    <span>Lathe</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><SearchCode size={24} /></div>
                    <span>Drilling</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><PenTool size={24} /></div>
                    <span>Welding</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><Settings size={24} /></div>
                    <span>Custom</span>
                  </div>
                </div>
              </div>

              <div className="flow-box new-flow-box">
                <div className="flow-box-header">
                  <h4>02 / FABRICATION</h4>
                  <div className="fb-arrow">→</div>
                </div>
                <p className="fb-desc">Custom fabrication for heavy structures, frames and process equipment.</p>
                <div className="flow-box-steps">
                  <div className="f-step">
                    <div className="f-icon"><PenTool size={24} /></div>
                    <span>Welding</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><Flame size={24} /></div>
                    <span>Cutting</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><IndustryIcon size={24} /></div>
                    <span>Structures</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><Wrench size={24} /></div>
                    <span>Assembly</span>
                  </div>
                </div>
              </div>

              <div className="flow-box new-flow-box">
                <div className="flow-box-header">
                  <h4>03 / MAINTENANCE</h4>
                  <div className="fb-arrow">→</div>
                </div>
                <p className="fb-desc">Professional repair, restoration and modification of machine parts.</p>
                <div className="flow-box-steps">
                  <div className="f-step">
                    <div className="f-icon"><Wrench size={24} /></div>
                    <span>Repair</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><Settings size={24} /></div>
                    <span>Machining</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><PenTool size={24} /></div>
                    <span>Welding</span>
                  </div>
                  <div className="f-arrow">→</div>
                  <div className="f-step">
                    <div className="f-icon"><Settings size={24} /></div>
                    <span>Modification</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="ticker-wrapper mt-60">
              <div className="ticker-track">
                <span>MACHINE COMPONENTS • INDUSTRIAL SUPPORT • CUSTOM PARTS • REPAIR WORK • FABRICATED STRUCTURES •&nbsp;&nbsp;</span>
                <span>MACHINE COMPONENTS • INDUSTRIAL SUPPORT • CUSTOM PARTS • REPAIR WORK • FABRICATED STRUCTURES •&nbsp;&nbsp;</span>
                <span>MACHINE COMPONENTS • INDUSTRIAL SUPPORT • CUSTOM PARTS • REPAIR WORK • FABRICATED STRUCTURES •&nbsp;&nbsp;</span>
                <span>MACHINE COMPONENTS • INDUSTRIAL SUPPORT • CUSTOM PARTS • REPAIR WORK • FABRICATED STRUCTURES •&nbsp;&nbsp;</span>
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 5. Bring Us Your Requirement */}
      <section className="requirement-section section-padding bg-gunmetal">
        <div className="container">

          <div className="req-header-block mb-50 text-center">
            <h4 className="tech-label text-grey mb-15">HAVE A REQUIREMENT?</h4>
            <h2 className="content-title text-white mb-20" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
              BRING US YOUR IDEA.<br />
              <span className="text-orange">WE'LL BUILD IT.</span>
            </h2>
            <p className="text-grey max-w-600 mx-auto" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Share a drawing, sample, measurement or simply explain what you need.
            </p>
          </div>

          <div className="req-flex-container">
            <div className="req-inputs-grid">
              <div className="req-input-box">
                <div className="req-top-line"></div>
                <div className="req-card-header"><span className="req-num">01</span></div>
                <div className="req-icon"><FileText size={32} /></div>
                <strong>DRAWING</strong>
                <span>Technical<br />Drawing</span>
                <div className="req-hover-action">→ SHARE</div>
              </div>
              <div className="req-input-box">
                <div className="req-top-line"></div>
                <div className="req-card-header"><span className="req-num">02</span></div>
                <div className="req-icon"><Component size={32} /></div>
                <strong>SAMPLE</strong>
                <span>Existing<br />Component</span>
                <div className="req-hover-action">→ SHARE</div>
              </div>
              <div className="req-input-box">
                <div className="req-top-line"></div>
                <div className="req-card-header"><span className="req-num">03</span></div>
                <div className="req-icon"><Ruler size={32} /></div>
                <strong>MEASURE</strong>
                <span>Dimensions /<br />Measurements</span>
                <div className="req-hover-action">→ SHARE</div>
              </div>
              <div className="req-input-box">
                <div className="req-top-line"></div>
                <div className="req-card-header"><span className="req-num">04</span></div>
                <div className="req-icon"><Wrench size={32} /></div>
                <strong>REPAIR</strong>
                <span>Damaged<br />Component</span>
                <div className="req-hover-action">→ SHARE</div>
              </div>
              <div className="req-input-box">
                <div className="req-top-line"></div>
                <div className="req-card-header"><span className="req-num">05</span></div>
                <div className="req-icon"><Lightbulb size={32} /></div>
                <strong>IDEA</strong>
                <span>Explain Your<br />Requirement</span>
                <div className="req-hover-action">→ SHARE</div>
              </div>
            </div>

            <div className="req-process-box mt-40">
              <h5 className="text-center text-grey mb-50" style={{ letterSpacing: '2px', fontFamily: 'monospace' }}>OUR PROCESS / 05 STEPS</h5>

              <div className="animated-timeline-container">
                <div className="timeline-line">
                  <div className="timeline-progress"></div>
                </div>

                <div className="timeline-nodes">
                  <div className="t-node">
                    <span className="t-num">01</span>
                    <div className="t-dot"></div>
                    <strong>DISCUSS</strong>
                    <span className="t-desc">Understand your requirement</span>
                  </div>
                  <div className="t-node">
                    <span className="t-num">02</span>
                    <div className="t-dot"></div>
                    <strong>PLAN</strong>
                    <span className="t-desc">Choose the right process</span>
                  </div>
                  <div className="t-node">
                    <span className="t-num">03</span>
                    <div className="t-dot"></div>
                    <strong>PRODUCE</strong>
                    <span className="t-desc">Precision machining & fab</span>
                  </div>
                  <div className="t-node">
                    <span className="t-num">04</span>
                    <div className="t-dot"></div>
                    <strong>CHECK</strong>
                    <span className="t-desc">Quality check and testing</span>
                  </div>
                  <div className="t-node">
                    <span className="t-num">05</span>
                    <div className="t-dot"></div>
                    <strong>DELIVER</strong>
                    <span className="t-desc">Final component delivery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="req-footer-cta mt-20">
              <div className="rfc-left">
                <h3 className="text-white mb-10" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>READY TO DISCUSS YOUR REQUIREMENT?</h3>
                <p className="text-grey m-0">Send us your drawing, sample or idea.</p>
              </div>
              <div className="rfc-right">
                <Link to="/contact" className="btn-primary-tech" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>REQUEST A QUOTE →</Link>
              </div>
            </div>

            <div className="req-status-bar mt-20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-grey" style={{ fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '1px' }}>
                <span className="pulse-dot"></span> CURRENTLY ACCEPTING CUSTOM ENGINEERING REQUIREMENTS
              </div>
              <div className="text-grey" style={{ fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '1px' }}>
                EST. 2017 • SINNAR, MAHARASHTRA
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default IndustriesPage;
