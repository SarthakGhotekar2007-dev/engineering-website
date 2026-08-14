import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';

const SceneWrapper = ({ children, style, camera = { position: [0, 0, 5], fov: 45 } }) => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, ...style }}>
      <Canvas 
        camera={camera} 
        dpr={[1, 1.5]} 
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#FF5A00" />
        <Suspense fallback={null}>
          {children}
          <Environment preset="warehouse" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneWrapper;
