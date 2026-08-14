import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShaft3D = () => {
  const groupRef = useRef();
  
  // Use state to check if we are on a coarse pointer (mobile)
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const matchMedia = window.matchMedia("(pointer: coarse)");
    setIsMobile(matchMedia.matches);

    const handleMediaChange = (e) => setIsMobile(e.matches);
    matchMedia.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e) => {
      if (!isMobile) {
        // Normalize mouse coordinates to -1 to 1
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1
        });
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      matchMedia.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Materials
  const materials = useMemo(() => {
    return {
      steel: new THREE.MeshStandardMaterial({
        color: '#aaaaaa',
        metalness: 0.9,
        roughness: 0.2,
      }),
      darkSteel: new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0.8,
        roughness: 0.4,
      }),
      orangeAccent: new THREE.MeshStandardMaterial({
        color: '#FF5A00',
        metalness: 0.8,
        roughness: 0.3,
      })
    };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow constant rotation around its axis
      groupRef.current.rotation.y += delta * 0.2;
      
      // Mouse follow interaction on desktop (max 5 degrees)
      if (!isMobile) {
        // Target rotations based on mouse (5 degrees = ~0.087 radians)
        const targetX = mousePosition.y * 0.087;
        const targetZ = mousePosition.x * 0.087;
        
        // Smoothly interpolate to target, offset to a cool isometric-ish angle
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX + Math.PI / 4, 0.05);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ + Math.PI / 6, 0.05);
      } else {
        // Static angle for mobile
        groupRef.current.rotation.x = Math.PI / 4;
        groupRef.current.rotation.z = Math.PI / 6;
      }
    }
  });

  return (
    <Float
      speed={1.5} // Animation speed
      rotationIntensity={0.1} // Very subtle floating rotation
      floatIntensity={0.5} // Floating height (subtle)
      floatingRange={[-0.08, 0.08]} // Maps to roughly -8px to +8px in standard camera
    >
      <group ref={groupRef} scale={1.2}>
        {/* Main Shaft (Cylinder) */}
        <mesh material={materials.steel}>
          <cylinderGeometry args={[0.3, 0.3, 4, 32]} />
        </mesh>
        
        {/* Central Bearing/Housing (Torus/Cylinder mix) */}
        <mesh material={materials.darkSteel} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 1, 32]} />
        </mesh>
        <mesh material={materials.steel} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.1, 16, 32]} />
        </mesh>

        {/* Small orange accent ring */}
        <mesh material={materials.orangeAccent} position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.2, 32]} />
        </mesh>

        {/* Steps down on shaft ends */}
        <mesh material={materials.steel} position={[0, 2, 0]}>
          <cylinderGeometry args={[0.2, 0.3, 0.5, 32]} />
        </mesh>
        <mesh material={materials.steel} position={[0, -2, 0]}>
          <cylinderGeometry args={[0.3, 0.2, 0.5, 32]} />
        </mesh>

        {/* Rim Lights for Premium Feel */}
        {/* Subtle orange accent light from bottom right */}
        <pointLight position={[3, -3, 2]} intensity={20} color="#FF5A00" distance={10} />
        {/* Cool rim light from top left */}
        <pointLight position={[-3, 3, -2]} intensity={10} color="#ffffff" distance={10} />
      </group>
    </Float>
  );
};

export default FloatingShaft3D;
