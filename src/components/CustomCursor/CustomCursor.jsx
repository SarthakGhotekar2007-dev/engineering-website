import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench } from 'lucide-react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const updateMousePosition = (e) => {
      setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if the element being hovered is clickable
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="cursor-gear-container"
      animate={{
        x: mousePosition.x - 16, // Center offset for 32px icon
        y: mousePosition.y - 16,
        scale: isVisible ? (isHovering ? 1.1 : 1) : 0,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 800, 
        damping: 35, 
        mass: 0.1 
      }}
    >
      {/* Default Gear Icon */}
      <motion.div
        className="gear-wrapper"
        animate={{
          rotate: 360,
          opacity: isHovering ? 0 : 1,
          scale: isHovering ? 0.5 : 1
        }}
        transition={{
          rotate: { repeat: Infinity, ease: "linear", duration: 8 },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
      >
        <Settings size={32} className="cursor-gear-icon" strokeWidth={2} />
        <div className="gear-center-dot"></div>
      </motion.div>

      {/* Hover Wrench Icon */}
      <motion.div
        className="gear-wrapper wrench-wrapper"
        animate={{
          rotate: isHovering ? [0, -25, 25, -15, 15, 0] : -90, // Wrench tightening animation
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.5
        }}
        transition={{
          rotate: { duration: 0.6, ease: "easeInOut" },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
      >
        <Wrench size={28} className="cursor-gear-icon wrench-icon" strokeWidth={2.5} />
      </motion.div>

    </motion.div>
  );
};

export default CustomCursor;
