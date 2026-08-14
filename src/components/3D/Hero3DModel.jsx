import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

const Hero3DModel = ({ mousePosition, onHoverChange }) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (onHoverChange) {
      onHoverChange(hovered);
    }
  }, [hovered, onHoverChange]);
  const groupRef = useRef();
  const gearRef = useRef();
  const bearingRef = useRef();
  
  const { scrollYProgress } = useScroll();

  // Premium Industrial Materials
  const metalMaterial = React.useMemo(() => new THREE.MeshStandardMaterial({
    color: '#9CA3AF',
    metalness: 0.85,
    roughness: 0.15,
  }), []);
  
  const darkMetalMaterial = React.useMemo(() => new THREE.MeshStandardMaterial({
    color: '#374151',
    metalness: 0.9,
    roughness: 0.2,
  }), []);

  const orangeAccentMaterial = React.useMemo(() => new THREE.MeshStandardMaterial({
    color: '#FF5A00',
    metalness: 0.6,
    roughness: 0.3,
    emissive: '#FF5A00',
    emissiveIntensity: 0.1,
  }), []);

  useFrame((state, delta) => {
    // 1. Exploded View Logic based on Scroll
    const progress = scrollYProgress.get();
    
    // As user scrolls down (e.g. progress 0 -> 0.2), parts move apart
    // Max explosion offset
    const explodeOffset = Math.min(progress * 6, 2.5);
    
    if (gearRef.current) {
      gearRef.current.position.y = THREE.MathUtils.lerp(
        gearRef.current.position.y,
        1.2 + explodeOffset,
        0.1
      );
    }
    
    if (bearingRef.current) {
      bearingRef.current.position.y = THREE.MathUtils.lerp(
        bearingRef.current.position.y,
        -1.2 - explodeOffset,
        0.1
      );
    }

    // 2. Mouse-follow rotation logic
    if (groupRef.current) {
      // Capped rotation based on mouse position (approx max 5 degrees)
      const maxRotation = (5 * Math.PI) / 180;
      const targetRotationX = (Math.PI / 6) + (mousePosition.y * maxRotation); 
      const targetRotationY = (-Math.PI / 6) + (mousePosition.x * maxRotation); 
      
      // Smooth interpolation/easing
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
      
      // Handle scale when hovered (1.5 is base scale)
      const targetScale = hovered ? 1.5 * 1.05 : 1.5;
      groupRef.current.scale.x += (targetScale - groupRef.current.scale.x) * 0.1;
      groupRef.current.scale.y += (targetScale - groupRef.current.scale.y) * 0.1;
      groupRef.current.scale.z += (targetScale - groupRef.current.scale.z) * 0.1;
      
      // Handle subtle orange highlight (emissive)
      const targetEmissive = hovered ? 0.3 : 0.1;
      orangeAccentMaterial.emissiveIntensity += (targetEmissive - orangeAccentMaterial.emissiveIntensity) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      {/* Starting rotation so it looks like an angled 3D blueprint view */}
      <group 
        ref={groupRef} 
        position={[0, 0, 0]} 
        scale={1.5} 
        rotation={[Math.PI / 6, -Math.PI / 6, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        
        {/* Central Shaft */}
        <mesh material={darkMetalMaterial} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 4.5, 32]} />
        </mesh>
        
        {/* Accent Ring on Shaft */}
        <mesh material={orangeAccentMaterial} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.42, 0.08, 16, 32]} />
        </mesh>

        {/* Top Gear Component */}
        <group ref={gearRef} position={[0, 1.2, 0]}>
          <mesh material={metalMaterial} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 0.4, 16]} />
          </mesh>
          {/* Inner Gear Ring */}
          <mesh material={darkMetalMaterial} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.9, 0.15, 16, 32]} />
          </mesh>
          {/* Gear Teeth Approximation */}
          {[...Array(8)].map((_, i) => (
            <mesh key={i} material={metalMaterial} position={[
              Math.sin((i / 8) * Math.PI * 2) * 1.5, 
              0, 
              Math.cos((i / 8) * Math.PI * 2) * 1.5
            ]} rotation={[0, (i / 8) * Math.PI * 2, 0]}>
              <boxGeometry args={[0.3, 0.4, 0.4]} />
            </mesh>
          ))}
        </group>
        
        {/* Bottom Bearing Component */}
        <group ref={bearingRef} position={[0, -1.2, 0]}>
          <mesh material={metalMaterial} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[1.2, 1.2, 0.6, 32]} />
          </mesh>
          <mesh material={darkMetalMaterial} position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.8, 0.1, 16, 32]} />
          </mesh>
          <mesh material={orangeAccentMaterial} position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.8, 0.05, 16, 32]} />
          </mesh>
        </group>
        
      </group>
    </Float>
  );
};

export default Hero3DModel;
