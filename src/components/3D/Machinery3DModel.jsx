import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const Machinery3DModel = ({ isExploded }) => {
  const groupRef = useRef();
  const spindleRef = useRef();
  const tailstockRef = useRef();
  const headstockRef = useRef();
  const chuckRef = useRef();
  const { pointer } = useThree();

  // Materials
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: '#333333',
    roughness: 0.7,
    metalness: 0.5,
  });

  const orangeMaterial = new THREE.MeshStandardMaterial({
    color: '#FF5A00',
    roughness: 0.4,
    metalness: 0.8,
  });

  const steelMaterial = new THREE.MeshStandardMaterial({
    color: '#a0a0a0',
    roughness: 0.2,
    metalness: 0.9,
  });

  const [hoveredPart, setHoveredPart] = useState(null);

  useFrame((state, delta) => {
    // Spindle rotation
    if (chuckRef.current) {
      chuckRef.current.rotation.x += 0.05;
    }

    // Exploded View Translation
    const lerpSpeed = 0.05;
    if (isExploded) {
      if (headstockRef.current) headstockRef.current.position.x = THREE.MathUtils.lerp(headstockRef.current.position.x, -3, lerpSpeed);
      if (chuckRef.current) chuckRef.current.position.x = THREE.MathUtils.lerp(chuckRef.current.position.x, -1.8, lerpSpeed);
      if (tailstockRef.current) tailstockRef.current.position.x = THREE.MathUtils.lerp(tailstockRef.current.position.x, 3, lerpSpeed);
    } else {
      if (headstockRef.current) headstockRef.current.position.x = THREE.MathUtils.lerp(headstockRef.current.position.x, -2, lerpSpeed);
      if (chuckRef.current) chuckRef.current.position.x = THREE.MathUtils.lerp(chuckRef.current.position.x, -1.2, lerpSpeed);
      if (tailstockRef.current) tailstockRef.current.position.x = THREE.MathUtils.lerp(tailstockRef.current.position.x, 2, lerpSpeed);
    }

    // Subtle mouse sway for the whole group
    if (groupRef.current && !isExploded) { // less sway when exploded to keep things in view
      const targetRotationX = (pointer.y * Math.PI) / 32;
      const targetRotationY = (pointer.x * Math.PI) / 32;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.1;
    } else if (groupRef.current) {
      // Reset rotation gently when exploded
      groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (0 - groupRef.current.rotation.y) * 0.1;
    }
  });

  // Custom Point/Hotspot Component
  const Hotspot = ({ partName, title, desc, position }) => (
    <Html position={position} center className={isExploded ? "opacity-0" : ""}>
      <div 
        className="hotspot-dot"
        onMouseEnter={() => setHoveredPart(partName)}
        onMouseLeave={() => setHoveredPart(null)}
      >
        <div className="hotspot-inner"></div>
        {hoveredPart === partName && (
          <div className="tooltip-3d">
            <strong>{title}</strong>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </Html>
  );

  return (
    <>
      <OrbitControls 
        enablePan={false} 
        enableZoom={true} 
        minDistance={4}
        maxDistance={12}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
      />
      
      <group ref={groupRef} position={[0, -1, 0]}>
        
        {/* Main Body (Lathe Bed) */}
        <mesh 
          material={bodyMaterial} 
          position={[0, 0, 0]}
        >
          <boxGeometry args={[5, 0.5, 1.5]} />
          {!isExploded && (
             <Hotspot partName="BED" title="MACHINE BED" desc="Heavy duty cast iron base" position={[0, 0.5, 0.8]} />
          )}
        </mesh>

        {/* Headstock */}
        <mesh ref={headstockRef} material={bodyMaterial} position={[-2, 1, 0]}>
          <boxGeometry args={[1, 1.5, 1.5]} />
          {!isExploded && (
            <Hotspot partName="SPINDLE" title="SPINDLE DRIVE" desc="High torque precision drive system" position={[0, 1, 0]} />
          )}
        </mesh>

        {/* Chuck / Spindle Assembly */}
        <group ref={chuckRef} position={[-1.2, 1, 0]}>
          <mesh material={steelMaterial} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.6, 0.6, 0.6, 32]} />
          </mesh>
          <mesh material={orangeMaterial} position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
          </mesh>
          
          {!isExploded && (
             <Hotspot partName="CHUCK" title="PRECISION CHUCK" desc="Accurate material holding mechanism" position={[0.6, 0, 0]} />
          )}
        </group>

        {/* Tailstock */}
        <mesh ref={tailstockRef} material={bodyMaterial} position={[2, 0.6, 0]}>
          <boxGeometry args={[0.8, 0.8, 1]} />
          {!isExploded && (
            <Hotspot partName="TAILSTOCK" title="TAILSTOCK" desc="Support for long workpieces" position={[0, 0.8, 0]} />
          )}
        </mesh>

      </group>
    </>
  );
};

export default Machinery3DModel;
