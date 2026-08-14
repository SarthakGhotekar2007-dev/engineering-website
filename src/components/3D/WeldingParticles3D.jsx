import React from 'react';
import { Sparkles } from '@react-three/drei';

const WeldingParticles3D = () => {
  return (
    <Sparkles 
      count={40} 
      scale={5} 
      size={4} 
      speed={0.4} 
      opacity={0.8} 
      color="#FF5A00" 
      noise={1}
    />
  );
};

export default WeldingParticles3D;
