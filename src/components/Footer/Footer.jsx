import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <footer className="footer">
      {/* Premium Glow Effect */}
      <div className="footer-glow"></div>

      {/* Top 1px Animated Gradient Line */}
      <motion.div
        className="footer-animated-line"
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Background Technical Graphics */}
      <div className="footer-bg-tech">
        <div className="bg-tech-grid"></div>
        <div className="bg-tech-info">
          PRECISION / ENGINEERING<br />
          TOLERANCE ±0.01 MM
        </div>
      </div>

      <div className="container relative z-10">

        {/* Main Footer Content */}
        <motion.div
          className="footer-main"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Column */}
          <motion.div className="footer-col brand-col" variants={itemVariants}>
            <h3 className="footer-brand-title">SAI KRUPA<span className="text-orange">.</span></h3>
            <p className="brand-text">Precision engineering and fabrication services built for the future of industry. Delivering excellence in every component.</p>

            <div className="premium-badge">
              <div className="badge-icon">
                <div className="inner-dot"></div>
              </div>
              <div className="badge-text">
                <span className="badge-title">YOUR TRUSTED PARTNER</span>
                <span className="badge-subtitle">IN PRECISION MANUFACTURING</span>
              </div>
            </div>
          </motion.div>

          {/* Explore Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-col-title">EXPLORE</h3>
            <div className="footer-links">
              {['About Us', 'Capabilities', 'Our Machinery', 'Industries Served', 'Quality Assurance'].map((item, idx) => (
                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="hover-link" key={idx}>
                  <span className="link-text">{item}</span>
                  <span className="hover-line"></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Capabilities Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h3 className="footer-col-title">SERVICES</h3>
            <div className="footer-links">
              {['Lathe Machining', 'Precision Welding', 'Heavy Fabrication', 'Industrial Repair', 'Custom Engineering'].map((item, idx) => (
                <a href="#capabilities" className="hover-link" key={idx}>
                  <span className="link-text">{item}</span>
                  <span className="hover-line"></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div className="footer-col contact-col" variants={itemVariants}>
            <h3 className="footer-col-title">CONTACT</h3>
            <div className="footer-contacts">

              <a href="tel:+919689515815" className="contact-item group">
                <div className="contact-icon-box">
                  <Phone size={16} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+91 9689515815</span>
                </div>
              </a>

              <a href="mailto:saikrupaengg@gmail.com" className="contact-item group">
                <div className="contact-icon-box">
                  <Mail size={16} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">saikrupaengg@gmail.com</span>
                </div>
              </a>

              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="contact-item group">
                <div className="contact-icon-box">
                  <MapPin size={16} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">Sinnar MIDC, 422112</span>
                </div>
              </a>

            </div>
          </motion.div>
        </motion.div>

        <div className="footer-divider"></div>

        {/* Bottom Copyright & Social Area */}
        <div className="footer-bottom">
          <div className="copyright-wrapper">
            <p className="copyright-text">© {new Date().getFullYear()} SAI KRUPA ENGINEERING WORKS. ALL RIGHTS RESERVED.</p>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="dot-sep">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>

          <div className="social-and-status">
            <div className="performance-text">
              <span className="pulse-dot"></span>
              SYSTEMS ONLINE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
