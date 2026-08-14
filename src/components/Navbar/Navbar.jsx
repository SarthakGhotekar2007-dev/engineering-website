import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const MagneticCTA = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    
    // Calculate movement (max ~8px)
    const rawX = (clientX - (left + width / 2)) * 0.1;
    const rawY = (clientY - (top + height / 2)) * 0.1;
    
    setPosition({ 
      x: Math.max(-8, Math.min(8, rawX)), 
      y: Math.max(-8, Math.min(8, rawY)) 
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      onClick={() => navigate('/contact')}
      className="btn-primary quote-btn-desktop"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/capabilities', label: 'CAPABILITIES' },
    { path: '/machinery', label: 'MACHINERY' },
    { path: '/industries', label: 'INDUSTRIES' },
    { path: '/contact', label: 'CONTACT' }
  ];

  // Animation variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const mobileMenuVariants = {
    closed: { x: '100%', transition: { type: "tween", duration: 0.4, ease: "easeInOut" } },
    open: {
      x: 0,
      transition: { type: "tween", duration: 0.4, ease: "easeInOut", staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="show"
      variants={navContainerVariants}
    >
      <div className="container nav-container">

        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Sai Krupa Engineering Works" className="navbar-logo-img" />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div variants={itemVariants} key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${isActive ? 'active-link' : ''}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="active-indicator"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right Actions */}
        <motion.div className="nav-right" variants={itemVariants}>
          <MagneticCTA>
            REQUEST A QUOTE <span className="cta-arrow">→</span>
          </MagneticCTA>
          <div className="menu-toggle" onClick={toggleMenu}>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={mobileItemVariants}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'mobile-active-link' : ''}
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} style={{ marginTop: '20px' }}>
                <Link to="/contact" className="btn-primary" onClick={toggleMenu}>
                  REQUEST A QUOTE <span className="cta-arrow">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
