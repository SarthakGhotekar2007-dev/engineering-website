import React, { useEffect } from 'react';
import { Settings, Calendar, Briefcase, Shield, Target, Users, Settings2, Phone, MessageCircle, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import SceneWrapper from '../components/3D/SceneWrapper';
const FloatingShaft3D = React.lazy(() => import('../components/3D/FloatingShaft3D'));
import SEO from '../components/SEO/SEO';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page bg-black">
      <SEO 
        title="About Us - Sai Krupa Engineering Works" 
        description="Learn about Sai Krupa Engineering Works, our history, mission, and the team behind our precision engineering services in Sinnar MIDC."
      />
      {/* 1. About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        
        {/* 3D Background */}
        <div className="hero-3d-container" style={{ position: 'absolute', right: '-15%', top: '50%', transform: 'translateY(-50%)', width: '70%', height: '100%', zIndex: 0 }}>
          <SceneWrapper camera={{ position: [0, 0, 8], fov: 45 }}>
            <React.Suspense fallback={null}>
              <FloatingShaft3D />
            </React.Suspense>
          </SceneWrapper>
        </div>

        <div className="grain-overlay"></div>

        <div className="container about-hero-container">
          <h4 className="section-subtitle">ABOUT US</h4>
          <h1 className="about-massive-title">
            BUILT ON EXPERIENCE.<br />
            <span className="text-orange">FOCUSED ON QUALITY.</span>
          </h1>

          <div className="about-hero-divider">
            <span className="line"></span>
            <span className="text">SINCE 2017</span>
          </div>

          <p className="about-hero-desc">
            Sai Krupa Engineering Works is a trusted engineering workshop providing precision machining, welding, drilling, fabrication, repair and custom manufacturing services for industrial and custom requirements.
          </p>
        </div>
      </section>



      {/* 2. Who We Are Section */}
      <AnimatedSection>
        <section className="who-we-are section-padding bg-black">
          <div className="container who-we-are-container">

            <div className="who-images-left">
              <div className="experience-badge">
                <Settings className="badge-icon" size={32} />
                <div className="badge-text">
                  <strong>9+</strong>
                  <span>Years Of<br />Experience</span>
                </div>
              </div>

              <div className="image-grid">
                <div className="img-top">
                  <img src="/08_workshop_interior.png" alt="Workshop overview" />
                </div>
                <div className="img-bottom-left">
                  <img src="/09_welding_work.png" alt="Welding process" />
                </div>
                <div className="img-bottom-right">
                  <img src="/01_lathe_machine.png" alt="Machining precision" />
                </div>
              </div>
            </div>

            <div className="who-content-right">
              <h4 className="section-subtitle">WHO WE ARE</h4>
              <h2 className="content-title">ENGINEERING WORK WITH A PRACTICAL WORKSHOP MINDSET.</h2>

              <div className="content-paragraphs">
                <p>Established in 2017, Sai Krupa Engineering Works has grown with a simple belief — deliver reliable engineering solutions with honesty, precision and commitment.</p>
                <p>From machining and welding to fabrication and repair, we handle every job with attention to detail and a focus on long-lasting results.</p>
                <p>Located in Sinnar MIDC, Maharashtra, we proudly serve industries, workshops, contractors and individual customers with dedication and transparency.</p>
              </div>

              <div className="who-stats-row">
                <div className="who-stat">
                  <Calendar size={28} />
                  <strong>2017</strong>
                  <span>Established</span>
                </div>
                <div className="who-stat">
                  <Users size={28} />
                  <strong>9+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="who-stat">
                  <Briefcase size={28} />
                  <strong>500+</strong>
                  <span>Projects Completed</span>
                </div>
                <div className="who-stat">
                  <Shield size={28} />
                  <strong>100%</strong>
                  <span>Quality Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 3. Core Values */}
      <AnimatedSection animation="fadeIn" delay={0.2}>
        <section className="core-values section-padding bg-gunmetal">
          <div className="container">
            <div className="values-header">
              <h4 className="section-subtitle text-center">OUR VALUES</h4>
              <h2 className="content-title text-center">WHAT DEFINES US</h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <Target className="value-icon" size={40} />
                <h3>QUALITY FIRST</h3>
                <p>We never compromise on quality. Every component is checked for precision and performance.</p>
              </div>
              <div className="value-card">
                <Users className="value-icon" size={40} />
                <h3>CUSTOMER FOCUSED</h3>
                <p>We understand customer requirements deeply and deliver solutions that truly fit their needs.</p>
              </div>
              <div className="value-card">
                <Settings2 className="value-icon" size={40} />
                <h3>SKILLED WORKFORCE</h3>
                <p>Our team brings practical experience, technical knowledge and dedication to every project.</p>
              </div>
              <div className="value-card">
                <Shield className="value-icon" size={40} />
                <h3>RELIABLE & HONEST</h3>
                <p>Honest communication, transparent pricing and on-time delivery — that's our promise.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Why Choose Us (Darker section) */}
      <AnimatedSection>
        <section className="why-choose-us section-padding bg-black">
          <div className="container founder-container">
            <div className="founder-image">
              <img src="/08_workshop_interior.png" alt="Rajendra Ghotekar" />
            </div>
            <div className="founder-content">
              <h4 className="section-subtitle">FOUNDER & OWNER</h4>
              <h2 className="content-title">RAJENDRA GHOTEKAR</h2>

              <p className="founder-bio">With a strong foundation in practical engineering and a passion for quality work, Rajendra Ghotekar established Sai Krupa Engineering Works in 2017.</p>
              <p className="founder-bio">His hands-on approach, technical understanding and customer-first mindset have helped the workshop build long-term trust and strong relationships.</p>

              <div className="signature">Rajendra Ghotekar</div>
            </div>

            <div className="founder-quote-box">
              <div className="quote-marks">"</div>
              <p>Our goal is simple — deliver quality work that adds value to our customers' success.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 5. Contact / Conversion CTA */}
      <AnimatedSection animation="scaleUp">
        <section className="about-cta section-padding bg-deep-black">
          <div className="container cta-flex-container">

            {/* Left Side: Conversion CTA */}
            <div className="cta-left">
              <h2 className="cta-massive-title">
                HAVE A PROJECT<br />
                <span className="text-orange">IN MIND?</span>
              </h2>
              <p className="cta-desc">
                Send us your drawing, component requirement or production challenge. Let's discuss how we can help.
              </p>
              <div className="cta-action-group">
                <a href="/contact" className="btn-primary-tech massive-btn">
                  START YOUR PROJECT <span>→</span>
                </a>
                <a href="tel:+919689515815" className="cta-small-link">
                  OR TALK DIRECTLY WITH OUR TEAM
                </a>
              </div>
            </div>

            {/* Right Side: Interactive Contact Blocks */}
            <div className="cta-right-contacts">
              <div className="contact-header">
                CONTACT
                <div className="contact-header-line"></div>
              </div>

              <a href="tel:+919689515815" className="interactive-contact-block">
                <div className="icb-top">
                  <span className="icb-id">01</span>
                  <Phone size={24} className="icb-icon" />
                </div>
                <div className="icb-content">
                  <span className="icb-label">CALL</span>
                  <strong className="icb-value">+91 96895 15815</strong>
                </div>
                <div className="icb-hover-reveal">
                  AVAILABLE MON–SAT <span className="arrow">→</span>
                </div>
              </a>

              <a href="https://wa.me/919689515815" className="interactive-contact-block" target="_blank" rel="noreferrer">
                <div className="icb-top">
                  <span className="icb-id">02</span>
                  <MessageCircle size={24} className="icb-icon whatsapp-icon" />
                </div>
                <div className="icb-content">
                  <span className="icb-label">WHATSAPP</span>
                  <strong className="icb-value">+91 96895 15815</strong>
                </div>
                <div className="icb-hover-reveal whatsapp-reveal">
                  CHAT ON WHATSAPP <span className="arrow">→</span>
                </div>
              </a>

              <a href="https://www.google.com/maps/place/Gagangiri+General+Store/@19.8488615,74.0430111,3a,75y,338.01h,94.62t/data=!3m7!1e1!3m5!1s722zxOAhNMIn3dxEC9N7GA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.6153804381143715%26panoid%3D722zxOAhNMIn3dxEC9N7GA%26yaw%3D338.0079366353175!7i16384!8i8192!4m6!3m5!1s0x3bddb08f7e616337:0xc7a52b6f602d617c!8m2!3d19.8478908!4d74.0419966!16s%2Fg%2F12hkg4l7j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" className="interactive-contact-block" target="_blank" rel="noreferrer">
                <div className="icb-top">
                  <span className="icb-id">03</span>
                  <MapPin size={24} className="icb-icon" />
                </div>
                <div className="icb-content">
                  <span className="icb-label">LOCATION</span>
                  <strong className="icb-value">SINNAR MIDC<br />MAHARASHTRA</strong>
                </div>
                <div className="icb-hover-reveal">
                  OPEN LOCATION <span className="arrow">→</span>
                </div>
              </a>

            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;
