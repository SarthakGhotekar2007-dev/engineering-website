import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './PremiumCTA.css';

const PremiumCTA = () => {
  return (
    <section className="premium-cta-section section-padding" id="quote">
      {/* Dynamic Background Elements */}
      <div className="cta-bg-elements">
        <div className="cta-grid"></div>
        <div className="cta-glow-1"></div>
        <div className="cta-glow-2"></div>
      </div>

      <div className="container relative z-10">
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-header-container"
          >
            <div className="cta-accent-line"></div>
            <h2 className="cta-massive-title">
              LET'S BUILD SOMETHING <br />
              <span className="text-orange-gradient">THAT WORKS.</span>
            </h2>
            <p className="cta-subtitle">
              Ready to turn your engineering challenges into precision-crafted realities? Our team of experts is standing by.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cta-actions"
          >
            <motion.button
              className="cta-btn primary-cta-btn"
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(255, 90, 0, 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span>REQUEST A QUOTE </span>
              <ArrowRight className="btn-icon" size={20} />
            </motion.button>

            <motion.a
              href="https://wa.me/919689515815"
              className="cta-btn secondary-cta-btn glass-btn"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="btn-icon" size={20} />
              <span>WHATSAPP US</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;
