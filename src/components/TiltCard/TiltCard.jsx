import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import './TiltCard.css';

const TiltCard = ({ children, className }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const matchMedia = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(matchMedia.matches);
    
    const handler = (e) => setIsTouchDevice(e.matches);
    matchMedia.addEventListener('change', handler);
    return () => matchMedia.removeEventListener('change', handler);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  // Rotate between -10 and 10 degrees on X, -15 and 15 on Y for pronounced 3D effect
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.2) 0%, transparent 80%)`;
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 1]); // Optional, can just use hover state

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`tilt-card-wrapper ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        z: isHovered ? 20 : 0,
        scale: isHovered ? 1.02 : 1
      }}
      style={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      <div className="tilt-card-content" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
      
      {/* Dynamic Glare Overlay */}
      {!isTouchDevice && (
        <motion.div 
          className="tilt-card-glare"
          style={{
            background: glareBackground,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
