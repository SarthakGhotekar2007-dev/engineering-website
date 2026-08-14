import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGear3D = () => {
  const gearRef = useRef();

  const material = new THREE.MeshStandardMaterial({
    color: '#FF5A00',
    metalness: 0.8,
    roughness: 0.2,
  });

  const coreMaterial = new THREE.MeshStandardMaterial({
    color: '#888888',
    metalness: 0.9,
    roughness: 0.1,
  });

  useFrame(() => {
    if (gearRef.current) {
      gearRef.current.rotation.y += 0.005;
      gearRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={1.5} 
      floatIntensity={2} 
    >
      <group ref={gearRef} scale={1.5}>
        <mesh material={material}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
        </mesh>
        <mesh material={coreMaterial}>
          <cylinderGeometry args={[0.5, 0.5, 0.8, 16]} />
        </mesh>
      </group>
    </Float>
  );
};

export default FloatingGear3D;
