import React from 'react';
import { motion } from 'framer-motion';

const MapMarker3D = () => {
  return (
    <div style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Pulse effect under the pin */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '5px',
          width: '20px',
          height: '10px',
          background: 'rgba(255, 90, 0, 0.4)',
          borderRadius: '50%',
          filter: 'blur(4px)',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating 3D Pin */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          background: 'linear-gradient(135deg, #FF7A00 0%, #FF3D00 100%)',
          width: '40px',
          height: '40px',
          borderRadius: '50% 50% 50% 0',
          transform: 'rotate(-45deg)',
          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.5), inset 2px -2px 5px rgba(0, 0, 0, 0.3), inset -2px 2px 5px rgba(255, 255, 255, 0.3)'
        }}
        initial={{ scale: 0, y: 20 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [-2, 2, -2]
        }}
        transition={{
          scale: { duration: 0.5, ease: "backOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div style={{ transform: 'rotate(45deg)', width: '12px', height: '12px', background: '#fff', borderRadius: '50%', boxShadow: 'inset 1px 1px 3px rgba(0,0,0,0.5)' }}></div>
      </motion.div>
    </div>
  );
};

export default MapMarker3D;
