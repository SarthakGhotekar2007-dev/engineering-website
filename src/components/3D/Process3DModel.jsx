import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Process3DModel = ({ activeStep }) => {
  const groupRef = useRef();

  // Materials with transparency for crossfading
  const rawMaterial = new THREE.MeshStandardMaterial({
    color: '#555555',
    roughness: 0.9,
    metalness: 0.1,
    transparent: true,
  });

  const machinedMaterial = new THREE.MeshStandardMaterial({
    color: '#888888',
    roughness: 0.4,
    metalness: 0.8,
    transparent: true,
  });

  const weldedMaterial = new THREE.MeshStandardMaterial({
    color: '#777777',
    roughness: 0.6,
    metalness: 0.7,
    transparent: true,
  });

  const finishedMaterial = new THREE.MeshStandardMaterial({
    color: '#d0d0d0',
    roughness: 0.1,
    metalness: 1.0,
    transparent: true,
  });

  // Refs for each stage to control opacity and scale
  const step0Ref = useRef(); // Raw
  const step1Ref = useRef(); // Machining
  const step2Ref = useRef(); // Welding
  const step3Ref = useRef(); // Fabrication
  const step4Ref = useRef(); // Finishing
  const step5Ref = useRef(); // Delivery

  const drillRef = useRef();
  const weldSparkRef = useRef();

  useFrame((state, delta) => {
    // Smooth global rotation
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }

    const fadeSpeed = 5 * delta;

    // Helper to smoothly transition opacity and scale
    const updateStepNode = (ref, material, isActive, targetScale = 1) => {
      if (!ref.current) return;
      const targetOpacity = isActive ? 1 : 0;
      const targetS = isActive ? targetScale : targetScale * 0.8;
      
      material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, fadeSpeed);
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, targetS, fadeSpeed));
      ref.current.visible = material.opacity > 0.01;
    };

    updateStepNode(step0Ref, rawMaterial, activeStep === 0, 1.2);
    updateStepNode(step1Ref, machinedMaterial, activeStep === 1, 1.2);
    updateStepNode(step2Ref, weldedMaterial, activeStep === 2, 1.2);
    
    if (step3Ref.current) {
      const targetOpacity = activeStep === 3 ? 1 : 0;
      step3Ref.current.visible = targetOpacity > 0;
    }
    
    updateStepNode(step4Ref, finishedMaterial, activeStep === 4, 1.2);
    
    if (step5Ref.current) {
      const targetOpacity = activeStep === 5 ? 1 : 0;
      step5Ref.current.visible = targetOpacity > 0;
    }

    // Animations for specific steps
    if (activeStep === 1 && drillRef.current) { // Machining
      drillRef.current.rotation.y += 0.2;
      drillRef.current.position.y = 1.2 + Math.sin(state.clock.elapsedTime * 6) * 0.3;
    }

    if (activeStep === 2 && weldSparkRef.current) { // Welding
      weldSparkRef.current.scale.setScalar(Math.random() * 0.5 + 0.5);
      weldSparkRef.current.position.x = Math.sin(state.clock.elapsedTime * 10) * 0.1;
      weldSparkRef.current.position.z = Math.cos(state.clock.elapsedTime * 10) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      
      {/* 0. Raw Material (Block) */}
      <mesh ref={step0Ref} material={rawMaterial}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      </mesh>

      {/* 1. Machining (Cylinder + Drill) */}
      <group ref={step1Ref}>
        <mesh material={machinedMaterial}>
          <cylinderGeometry args={[0.8, 0.8, 1.8, 32]} />
        </mesh>
        <mesh ref={drillRef} position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
          <meshStandardMaterial color="#FF5A00" emissive="#FF5A00" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* 2. Welding (Two pieces + sparks) */}
      <group ref={step2Ref}>
        <mesh material={weldedMaterial} position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.9, 32]} />
        </mesh>
        <mesh material={weldedMaterial} position={[0, -0.45, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.9, 32]} />
        </mesh>
        {/* Weld Seam */}
        <mesh material={rawMaterial} position={[0, 0, 0]}>
          <torusGeometry args={[0.82, 0.05, 16, 32]} />
        </mesh>
        <mesh ref={weldSparkRef} position={[0.8, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial color="#FF5A00" />
        </mesh>
      </group>

      {/* 3. Fabrication (Assembled with brackets) */}
      <group ref={step3Ref}>
        <mesh material={weldedMaterial}>
          <cylinderGeometry args={[0.8, 0.8, 1.8, 32]} />
        </mesh>
        <mesh material={weldedMaterial} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
        <mesh material={weldedMaterial} position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
      </group>

      {/* 4. Finishing (Polished) */}
      <group ref={step4Ref}>
        <mesh material={finishedMaterial}>
          <cylinderGeometry args={[0.8, 0.8, 1.8, 64]} />
        </mesh>
        <mesh material={finishedMaterial} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
        <mesh material={finishedMaterial} position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
      </group>

      {/* 5. Delivery (Boxed/Complete with Checkmark floating) */}
      <group ref={step5Ref}>
        <mesh material={finishedMaterial}>
          <cylinderGeometry args={[0.8, 0.8, 1.8, 64]} />
        </mesh>
        <mesh material={finishedMaterial} position={[0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
        <mesh material={finishedMaterial} position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI/2]}>
          <boxGeometry args={[1.2, 0.2, 0.4]} />
        </mesh>
        {/* Simple floating Checkmark made of boxes */}
        <group position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <mesh position={[-0.2, -0.2, 0]}>
            <boxGeometry args={[0.6, 0.1, 0.1]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>
          <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.9, 0.1, 0.1]} />
            <meshBasicMaterial color="#00ff00" />
          </mesh>
        </group>
      </group>

    </group>
  );
};

export default Process3DModel;
