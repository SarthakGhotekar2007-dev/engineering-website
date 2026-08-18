import React, { useEffect, useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  MapPin, Calendar, Phone, MessageCircle, Mail, Clock,
  ArrowUpCircle, Wrench, PenTool, Factory, Settings,
  FileText, Component, Ruler, Image as ImageIcon, Box,
  MessageSquare, Lightbulb, ClipboardList, Plus, Minus, CheckCircle2
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection/AnimatedSection';
import SceneWrapper from '../components/3D/SceneWrapper';
import MapMarker3D from '../components/3D/MapMarker3D';
import TiltCard from '../components/TiltCard/TiltCard';
const FloatingShaft3D = React.lazy(() => import('../components/3D/FloatingShaft3D'));
const FloatingGear3D = React.lazy(() => import('../components/3D/FloatingGear3D'));
import SEO from '../components/SEO/SEO';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    mobile: '',
    email: '',
    requirement_type: '',
    quantity: '',
    material: '',
    requirement: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const formRef = useRef(null);

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "DO YOU ACCEPT CUSTOM MACHINING REQUIREMENTS?", a: "Yes. Custom components can be discussed based on technical drawings, samples, dimensions or specific requirements." },
    { q: "CAN I SEND A DRAWING FOR QUOTATION?", a: "Yes. You can share your drawing, PDF, JPG or PNG along with your requirement for discussion and quotation." },
    { q: "DO YOU HANDLE REPAIR AND MODIFICATION WORK?", a: "Yes. We handle machine component repair, shaft repair, welding repair, modification and related workshop requirements." },
    { q: "WHAT INFORMATION SHOULD I PROVIDE FOR A REQUIREMENT?", a: "You can provide a drawing, sample component, dimensions, photographs or simply explain the requirement." },
    { q: "WHAT TYPES OF WORK DO YOU HANDLE?", a: "We handle machining, drilling, welding, fabrication, repair work and custom component requirements." },
    { q: "CAN YOU MANUFACTURE COMPONENTS FROM A SAMPLE?", a: "Yes. Existing components or samples can be inspected and discussed for suitable manufacturing or repair work." },
    { q: "HOW CAN I GET A QUICK RESPONSE?", a: "For urgent requirements, call or WhatsApp the workshop directly during working hours." },
    { q: "DO YOU ACCEPT SMALL AND CUSTOM JOBS?", a: "Yes. Custom and individual component requirements can be discussed based on feasibility and workshop capabilities." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status.loading) return;

    if (!formData.full_name || !formData.mobile || !formData.requirement_type || !formData.requirement) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus({ loading: false, success: false, error: 'Please enter a valid email address.' });
        return;
      }
    }

    setStatus({ loading: true, success: false, error: null });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          full_name: '', company_name: '', mobile: '',
          email: '', requirement_type: '', quantity: '', material: '', requirement: ''
        });
        setTimeout(() => setStatus({ loading: false, success: false, error: null }), 6000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({ loading: false, success: false, error: 'Unable to send your requirement. Please try again or contact us directly.' });
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page bg-black">
      <SEO 
        title="Contact Us - Sai Krupa Engineering Works" 
        description="Contact Sai Krupa Engineering Works in Sinnar MIDC for your machining, welding, and industrial fabrication requirements. Request a quote today."
      />

      {/* 1. Hero Section */}
      <section className="contact-hero">
        <motion.div
          className="contact-hero-bg"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        ></motion.div>
        <div className="contact-hero-overlay"></div>
        <div className="grain-overlay"></div>

        <motion.div
          className="container contact-hero-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
          }}
        >
          <motion.h1
            className="contact-massive-title"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            LET'S TALK<br />
            <motion.span
              className="text-orange"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              style={{ display: 'inline-block' }}
            >
              ENGINEERING.
            </motion.span>
          </motion.h1>
          <motion.h3
            className="contact-hero-subtitle"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Have a machining, welding, fabrication or repair requirement?
          </motion.h3>
          <motion.p
            className="contact-hero-desc"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Tell us what you need. Share your drawing, sample or dimensions<br />and our team will discuss the right solution with you.
          </motion.p>


        </motion.div>
      </section>

      {/* 2. Quick Contact Cards (Overlap) */}
      <div className="container relative-z" style={{ marginTop: '-120px', marginBottom: '80px' }}>
        <div className="quick-contact-grid">
          <AnimatedSection animation="slideRight" delay={0.1}>
            <TiltCard className="quick-card h-100">
              <div className="qc-header">
                <Phone size={24} className="text-orange qc-header-icon" />
                <div>
                  <span>CALL US</span>
                  <strong>9689515815</strong>
                </div>
              </div>
              <p className="qc-desc">Speak directly with our team</p>
              <a href="tel:+919689515815" className="qc-btn qc-btn-orange" style={{ display: 'inline-block', textAlign: 'center' }}>CALL NOW →</a>
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.2}>
            <TiltCard className="quick-card whatsapp-card h-100">
              <div className="qc-header">
                <MessageCircle size={24} className="text-green qc-header-icon" />
                <div>
                  <span>WHATSAPP</span>
                  <strong>9689515815</strong>
                </div>
              </div>
              <p className="qc-desc">Quick requirement discussion</p>
              <a href="https://wa.me/919689515815" target="_blank" rel="noreferrer" className="qc-btn qc-btn-green" style={{ display: 'inline-block', textAlign: 'center' }}>CHAT ON WHATSAPP →</a>
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <TiltCard className="quick-card h-100">
              <div className="qc-header">
                <Mail size={24} className="text-orange qc-header-icon" />
                <div>
                  <span>EMAIL</span>
                  <strong>saikrupaengg@gmail.com</strong>
                </div>
              </div>
              <p className="qc-desc">For drawings & enquiries</p>
              <a href="mailto:saikrupaengg@gmail.com" className="qc-btn qc-btn-orange" style={{ display: 'inline-block', textAlign: 'center' }}>SEND EMAIL →</a>
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.4}>
            <TiltCard className="quick-card h-100">
              <div className="qc-header">
                <Clock size={24} className="text-orange qc-header-icon" />
                <div>
                  <span>WORKING HOURS</span>
                  <strong>09:00 AM - 07:00 PM</strong>
                </div>
              </div>
              <div className="qc-footer-text">
                <div className="hour-row"><span>Sunday – Friday</span></div>
                <div className="hour-row"><span className="text-orange">Saturday – Holiday</span></div>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>

      {/* 3. Visit Our Workshop (Map Split) */}
      <AnimatedSection animation="slideLeft">
        <section className="map-split-section section-padding bg-black">
          <div className="container map-split-container">
            <div className="map-split-left">
              <h4 className="section-subtitle text-orange">FIND US IN SINNAR MIDC</h4>
              <h2 className="content-title">VISIT OUR WORKSHOP</h2>

              <div className="address-block mt-30 mb-40">
                <MapMarker3D />
                <div>
                  <strong>Sai Krupa Engineering Works</strong>
                  <p>Sinnar MIDC,<br />Maharashtra – 422112</p>
                </div>
              </div>

              <div className="workshop-visits-note mb-30" style={{ borderLeft: '2px solid var(--orange-accent)', paddingLeft: '15px' }}>
                <strong style={{ color: '#fff', fontSize: '0.9rem', letterSpacing: '1px' }}>WORKSHOP VISITS</strong>
                <p style={{ color: 'var(--metallic-grey)', fontSize: '0.9rem', marginTop: '5px' }}>Planning to visit us?<br />Please call or WhatsApp before visiting to confirm availability.</p>
              </div>

              <a href="https://www.google.com/maps/place/Gagangiri+General+Store/@19.8488615,74.0430111,3a,75y,338.01h,94.62t/data=!3m7!1e1!3m5!1s722zxOAhNMIn3dxEC9N7GA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-4.6153804381143715%26panoid%3D722zxOAhNMIn3dxEC9N7GA%26yaw%3D338.0079366353175!7i16384!8i8192!4m6!3m5!1s0x3bddb08f7e616337:0xc7a52b6f602d617c!8m2!3d19.8478908!4d74.0419966!16s%2Fg%2F12hkg4l7j?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="btn-outline-orange">GET DIRECTIONS →</a>
            </div>

            <div className="map-split-right">
              <div className="google-map-container" style={{ width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <iframe src="https://maps.google.com/maps?q=19.8488615,74.0430111&hl=en&z=15&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sinnar MIDC Workshop Location"></iframe>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* 4. Send Your Requirement (Form Split) */}
      <AnimatedSection animation="fadeIn">
        <section id="requirement" className="form-split-section section-padding bg-gunmetal">
          <div className="container form-split-container">

            <div className="form-left">
              <h4 className="section-subtitle text-orange">TELL US WHAT YOU NEED</h4>
              <h2 className="content-title mb-40">SEND YOUR REQUIREMENT</h2>

              <form
                className="dark-form"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span className="text-orange">*</span></label>
                    <input type="text" name="full_name" value={formData.full_name} onChange={handleInputChange} placeholder="Enter Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Business Name</label>
                    <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder="Enter Company Name" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Mobile Number <span className="text-orange">*</span></label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter Mobile Number" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Requirement Type <span className="text-orange">*</span></label>
                    <select name="requirement_type" value={formData.requirement_type} onChange={handleInputChange} required>
                      <option value="">Select Requirement Type</option>
                      <option value="Machining">Machining</option>
                      <option value="Welding">Welding</option>
                      <option value="Fabrication">Fabrication</option>
                      <option value="Repair Work">Repair Work</option>
                      <option value="Custom Component">Custom Component</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input type="text" name="quantity" value={formData.quantity} onChange={handleInputChange} placeholder="e.g. 20 Nos, 1 Batch" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Material (Optional)</label>
                  <select name="material" value={formData.material} onChange={handleInputChange}>
                    <option value="">Select Material</option>
                    <option value="MS">MS</option>
                    <option value="SS">SS</option>
                    <option value="EN Series">EN Series</option>
                    <option value="Cast Iron">Cast Iron</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Requirement <span className="text-orange">*</span></label>
                  <textarea rows="4" name="requirement" value={formData.requirement} onChange={handleInputChange} placeholder="Example: Need 20 shafts, MS material, 150mm length, drawing available." required></textarea>
                </div>

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: '#00ff88', marginBottom: '15px', padding: '20px', border: '1px solid #00ff88', borderRadius: '4px', background: 'rgba(0, 255, 136, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.circle
                        cx="25" cy="25" r="23"
                        stroke="#00ff88" strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M15 25L22 32L36 17"
                        stroke="#00ff88" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                      />
                    </svg>
                    <div>
                      <strong style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>✓ REQUIREMENT SENT</strong><br />
                      <span style={{ fontSize: '0.9rem' }}>Thank you. Your requirement has been received.<br />We will contact you shortly.</span>
                    </div>
                  </motion.div>
                )}
                {status.error && <div style={{ color: '#ff4444', marginBottom: '15px', padding: '15px', border: '1px solid #ff4444', borderRadius: '4px' }}>{status.error}</div>}

                <button type="submit" className="btn-primary w-100" disabled={status.loading} style={{ fontSize: '1.1rem', padding: '15px' }}>
                  {status.loading ? "SENDING..." : "SUBMIT REQUIREMENT →"}
                </button>
              </form>
            </div>

            <div className="form-right">
              <div className="quick-response-box" style={{ background: '#0B0D0F', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', borderRadius: '8px', borderTop: '3px solid var(--orange-accent)' }}>
                <h4 className="text-orange mb-15">NEED A QUICK RESPONSE?</h4>
                <p className="mb-30" style={{ color: 'var(--metallic-grey)', fontSize: '1.1rem' }}>Skip the form and contact us directly.</p>

                <div className="qr-buttons flex-col" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <a href="tel:+919689515815" className="qr-btn-solid-orange w-100" style={{ padding: '15px', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} /> CALL US
                  </a>
                  <a href="https://wa.me/919689515815" target="_blank" rel="noreferrer" className="qr-btn-solid-dark w-100" style={{ padding: '15px', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <MessageCircle size={18} className="text-green" /> <span className="text-green">WHATSAPP</span>
                  </a>
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--metallic-grey)', fontSize: '0.85rem' }}>
                  Typical response:<br /><strong style={{ color: '#fff' }}>During working hours</strong>
                </div>
              </div>

              <div className="qr-image-wrapper">
                <img src="/08_workshop_interior.png" alt="Workshop interior" />
              </div>
            </div>

          </div>
        </section>
      </AnimatedSection>




      {/* 7. Direct Workshop Communication */}
      <AnimatedSection animation="slideRight">
        <section className="direct-comm-section section-padding bg-black">
          <div className="container comm-flex">

            <div className="comm-left">
              <motion.div
                className="comm-portrait"
                style={{ position: 'relative' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src="/08_workshop_interior.png"
                  alt="Rajendra Ghotekar"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* 3D Floating Gear Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                  <SceneWrapper camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                      <FloatingGear3D />
                    </Suspense>
                  </SceneWrapper>
                </div>
              </motion.div>
            </div>

            <div className="comm-middle">
              <h4 className="section-subtitle text-orange">DIRECT WORKSHOP COMMUNICATION</h4>
              <h2 className="content-title mb-20">DIRECT. SIMPLE. PRACTICAL.</h2>
              <p className="text-grey mb-30">Discuss your requirement directly with Sai Krupa Engineering Works and understand the suitable machining, welding, fabrication or repair approach.</p>

              <div className="comm-signature">
                <div className="sig-font">Rajendra Ghotekar</div>
                <span className="sig-title">Owner<br />Sai Krupa Engineering Works</span>
              </div>
            </div>

            <div className="comm-right">
              <AnimatedSection animation="slideLeft" delay={0.2}>
                <div className="comm-feature mb-20">
                  <Settings size={28} className="text-orange" />
                  <div>
                    <strong>Practical Approach</strong>
                    <span>Solution based discussion</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={0.3}>
                <div className="comm-feature mb-20">
                  <MessageSquare size={28} className="text-orange" />
                  <div>
                    <strong>Direct Communication</strong>
                    <span>Talk to the workshop directly</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={0.4}>
                <div className="comm-feature mb-20">
                  <Settings size={28} className="text-orange" />
                  <div>
                    <strong>Right Understanding</strong>
                    <span>Better planning & execution</span>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={0.5}>
                <div className="comm-feature">
                  <Clock size={28} className="text-orange" />
                  <div>
                    <strong>Timely Response</strong>
                    <span>Quick response for your work</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* 8. Why Work With Us (Rich Animated Design) */}
      <section className="why-us-rich-section section-padding relative overflow-hidden">
        <div className="why-us-bg-layer"></div>
        <div className="container relative z-10">

          <AnimatedSection animation="fadeUp">
            <div className="why-rich-header text-center mb-50">
              <h4 className="why-rich-subtitle text-orange mb-10">
                <span className="bracket text-grey">{'{'}</span> WHY WORK WITH US? <span className="bracket text-grey">{'}'}</span>
              </h4>
              <h2 className="why-rich-title">
                BUILT ON TRUST.<br />
                DELIVERED WITH <span className="text-orange">PRECISION.</span>
              </h2>

              <div className="why-rich-divider mt-20 mb-20">
                <div className="divider-line"></div>
                <Settings size={20} className="text-orange" />
                <div className="divider-line"></div>
              </div>

              <p className="why-rich-desc text-grey">
                We combine practical experience with a solution-focused approach<br />
                to deliver the right results for your requirements.
              </p>
            </div>
          </AnimatedSection>

          <div className="why-rich-grid">
            {/* Card 1 */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
              <div className="why-rich-card">
                <div className="why-rich-card-inner">
                  <div className="card-top-content">
                    <div className="card-number">01</div>
                    <div className="card-icon-wrapper">
                      <MessageSquare size={28} className="text-white" />
                      <svg className="icon-circle-svg" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          className="circle-progress"
                          initial={{ strokeDashoffset: 301.59 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-heading">DIRECT COMMUNICATION</h3>
                  <p className="card-desc">Talk directly with the workshop.<br />Clear, open and hassle-free<br />communication.</p>
                  <div className="card-bottom-line"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <div className="why-rich-card">
                <div className="why-rich-card-inner">
                  <div className="card-top-content">
                    <div className="card-number">02</div>
                    <div className="card-icon-wrapper">
                      <Lightbulb size={28} className="text-white" />
                      <svg className="icon-circle-svg" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          className="circle-progress"
                          initial={{ strokeDashoffset: 301.59 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-heading">PRACTICAL SOLUTIONS</h3>
                  <p className="card-desc">Solutions based on actual<br />requirements and practical<br />workshop experience.</p>
                  <div className="card-bottom-line"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection animation="fadeUp" delay={0.3}>
              <div className="why-rich-card">
                <div className="why-rich-card-inner">
                  <div className="card-top-content">
                    <div className="card-number">03</div>
                    <div className="card-icon-wrapper">
                      <Settings size={28} className="text-white" />
                      <svg className="icon-circle-svg" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          className="circle-progress"
                          initial={{ strokeDashoffset: 301.59 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-heading">CUSTOM WORK</h3>
                  <p className="card-desc">Components, repair, welding<br />and fabrication as per<br />your needs.</p>
                  <div className="card-bottom-line"></div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 4 */}
            <AnimatedSection animation="fadeUp" delay={0.4}>
              <div className="why-rich-card">
                <div className="why-rich-card-inner">
                  <div className="card-top-content">
                    <div className="card-number">04</div>
                    <div className="card-icon-wrapper">
                      <ClipboardList size={28} className="text-white" />
                      <svg className="icon-circle-svg" viewBox="0 0 100 100">
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="48"
                          className="circle-progress"
                          initial={{ strokeDashoffset: 301.59 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="card-heading">CLEAR REQUIREMENTS</h3>
                  <p className="card-desc">Share your drawing, sample<br />or dimensions. We handle<br />the rest.</p>
                  <div className="card-bottom-line"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeIn" delay={0.6}>
            <div className="why-rich-footer mt-50 text-center">
              <div className="why-rich-divider mb-20">
                <div className="divider-line"></div>
                <Settings size={20} className="text-orange" />
                <div className="divider-line"></div>
              </div>
              <p className="why-rich-bottom-text text-grey">ONE WORKSHOP. COMPLETE ENGINEERING SUPPORT.</p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* 9. FAQ Section (Accordion) */}
      <section className="faq-section section-padding bg-section-dark">
        <div className="container">
          <div className="faq-header text-center mb-50">
            <span className="faq-label">CONTACT SUPPORT</span>
            <h2 className="faq-title">QUESTIONS?<br />WE'VE GOT ANSWERS.</h2>
            <p className="faq-desc mt-20 text-grey">Find quick answers about machining, fabrication, repair work and quotation requirements.</p>
          </div>

          <div className="faq-accordion-container">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <AnimatedSection animation="fadeUp" delay={0.1 * index} key={index}>
                  <div
                    className={`faq-accordion-item ${isActive ? 'active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-question-bar">
                      <div className="faq-question-text">
                        <span className="faq-number">{(index + 1).toString().padStart(2, '0')}</span>
                        <span className="faq-q">{faq.q}</span>
                      </div>
                      <button className="faq-toggle-btn">
                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Plus size={20} className="text-white" />
                        </motion.div>
                      </button>
                    </div>

                    <motion.div
                      className="faq-answer-wrapper"
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, y: isActive ? 0 : -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="faq-answer-content">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="final-cta-section section-padding bg-black relative">
        <div className="container">
          <AnimatedSection animation="scaleUp">
            <div className="cta-premium-card relative overflow-hidden cta-flex-layout">
              {/* Background Accent */}
              <div className="cta-card-bg-accent"></div>

              <div className="relative z-10 cta-text-content">
                <h4 className="final-cta-subtitle text-grey mb-15">
                  <span className="bracket text-orange">{'//'}</span> STILL HAVE A QUESTION?
                </h4>
                <h2 className="final-cta-title text-white mb-20">
                  LET'S DISCUSS YOUR <span className="text-orange">WORK.</span>
                </h2>
                <p className="cta-desc text-grey mb-40">
                  Have a requirement? Let's turn it into a precision component.
                </p>

                <div className="final-cta-actions">
                  <a href="#requirement" className="btn-primary btn-cta-glow">
                    SEND YOUR REQUIREMENT <span className="hover-arrow">→</span>
                  </a>
                </div>
              </div>

              {/* Floating 3D Component */}
              <motion.div
                className="cta-3d-wrapper"
                initial={{ x: 100, rotateY: -15, opacity: 0, scale: 0.9 }}
                whileInView={{ x: 0, rotateY: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <SceneWrapper camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <FloatingShaft3D />
                  </Suspense>
                </SceneWrapper>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 11. Sticky Bottom Bar (Mobile Only) */}
      <div className="sticky-contact-bar mobile-only-sticky">
        <a href="tel:9689515815" className="sticky-half sticky-call">
          <Phone size={20} />
          <strong>CALL 9689515815 →</strong>
        </a>
        <a href="https://wa.me/919689515815" className="sticky-half sticky-wa">
          <MessageCircle size={20} />
          <strong>WHATSAPP US →</strong>
        </a>
      </div>

    </div>
  );
};

export default ContactPage;
