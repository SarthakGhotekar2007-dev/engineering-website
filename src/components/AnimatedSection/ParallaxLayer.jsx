import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxLayer = ({ children, offset = 100, className = '', style = {}, zIndex = 0 }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`parallax-wrapper ${className}`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ y, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxLayer;
