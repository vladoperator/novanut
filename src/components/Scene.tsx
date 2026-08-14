import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, MeshWobbleMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Scene — aesthetic procedural 3D placeholders
 *
 * 1. Hero Walnut Cluster: photorealistic 2D sprites
 * 2. Floating Particles: gold sparkles
 * 3. Ambient Torus: slow-spinning ring for depth
 * 4. Secondary geometry groups at different depths
 * 5. Ground fog effect
 */

function WalnutCluster() {
  const groupRef = useRef<THREE.Group>(null!);
  const texture = useTexture('/walnut.png');
  const shellTexture = useTexture('/shell_walnut.png');

  // Generate cluster positions (bowl-like arrangement)
  const items = useMemo(() => {
    const pts: { pos: [number, number, number], rot: number, scale: number, isShell: boolean }[] = [];
    const count = 9; // Slightly more walnuts
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.4 + Math.random() * 0.8;
      const y = Math.random() * 0.6 - 0.2;
      pts.push({
        pos: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
        rot: Math.random() * Math.PI * 2,
        scale: 0.25 + Math.random() * 0.2,
        isShell: Math.random() > 0.5
      });
    }
    // Center pieces
    pts.push({ pos: [0, 0.2, 0], rot: Math.random() * Math.PI * 2, scale: 0.4, isShell: false });
    pts.push({ pos: [0.3, -0.2, 0.2], rot: Math.random() * Math.PI * 2, scale: 0.35, isShell: true });
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.z += Math.sin(delta) * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0.5, -1]}>
      {items.map((item, i) => (
        <Float
          key={i}
          speed={1.5 + i * 0.2}
          rotationIntensity={0}
          floatIntensity={0.5}
          floatingRange={[-0.05, 0.05]}
        >
          <sprite position={item.pos} scale={[item.scale, item.scale, 1]}>
            <spriteMaterial 
              map={item.isShell ? shellTexture : texture} 
              transparent={true} 
              rotation={item.rot} 
              depthWrite={false}
            />
          </sprite>
        </Float>
      ))}
    </group>
  );
}

function GiantWalnut() {
  const giantTexture = useTexture('/giant_walnut.png');
  const spriteRef = useRef<THREE.Sprite>(null!);
  
  useFrame((state, delta) => {
    if (spriteRef.current) {
      // Gentle floating and very slow rotation
      spriteRef.current.material.rotation += delta * 0.05;
      spriteRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <sprite ref={spriteRef} position={[2.5, 0.5, 1.2]} scale={[2.5, 2.5, 1]}>
      <spriteMaterial 
        map={giantTexture} 
        transparent={true} 
        depthWrite={false}
      />
    </sprite>
  );
}

function AmbientRing() {
  const groupRef = useRef<THREE.Group>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
    }
    if (ring1.current) ring1.current.rotation.x += delta * 0.1;
    if (ring2.current) ring2.current.rotation.y -= delta * 0.15;
    if (ring3.current) ring3.current.rotation.z += delta * 0.08;
  });

  const material = (
    <meshStandardMaterial
      color="#2a5a3f"
      emissive="#1a3a2a"
      emissiveIntensity={0.4}
      transparent
      opacity={0.3}
      roughness={0.4}
      metalness={0.5}
    />
  );

  return (
    <group ref={groupRef} position={[0, 1, -4]} scale={2.5}>
      <mesh ref={ring1}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        {material}
      </mesh>
      <mesh ref={ring2} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.1, 0.015, 16, 100]} />
        {material}
      </mesh>
      <mesh ref={ring3} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[0.9, 0.015, 16, 100]} />
        {material}
      </mesh>
    </group>
  );
}

function FloatingLeaf({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const speed = useMemo(() => 0.3 + Math.random() * 0.5, []);
  const axis = useMemo(() => new THREE.Vector3(
    Math.random() - 0.5,
    1,
    Math.random() - 0.5
  ).normalize(), []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotateOnAxis(axis, delta * speed);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshWobbleMaterial
          color="#3a7a4f"
          factor={0.2}
          speed={1}
          roughness={0.6}
          metalness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function DecoSpheres() {
  const positions: [number, number, number][] = [
    [-3, 2, -6],
    [4, 3, -8],
    [-2, 0, -5],
    [3, -0.5, -3],
    [-4, 1, -3],
  ];

  return (
    <group>
      {positions.map((pos, i) => (
        <Float
          key={i}
          speed={0.8 + i * 0.15}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <mesh position={pos} scale={0.15 + i * 0.05}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#c8a960' : '#2a5a3f'}
              roughness={0.4}
              metalness={0.5}
              transparent
              opacity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial
        color="#1a3a2a"
        roughness={0.9}
        metalness={0.1}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight color="#ffeedd" intensity={0.5} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        color="#fff5e0"
        castShadow={false}
      />
      <directionalLight
        position={[-3, 4, -2]}
        intensity={0.4}
        color="#c8a960"
      />
      <pointLight
        position={[2.5, 1, -1]}
        intensity={0.8}
        color="#ddc07a"
        distance={8}
        decay={2}
      />

      {/* Fog for depth */}
      <fog attach="fog" args={['#faf6ee', 8, 25]} />

      {/* 3D Elements */}
      <WalnutCluster />
      <GiantWalnut />
      <AmbientRing />
      <DecoSpheres />
      <GroundPlane />

      {/* Floating leaf-like shapes */}
      <FloatingLeaf position={[-2, 2.5, -2]} scale={0.12} />
      <FloatingLeaf position={[3, 3, -5]} scale={0.1} />
      <FloatingLeaf position={[-1, 1, -3]} scale={0.08} />
      <FloatingLeaf position={[1.5, 2.8, -1]} scale={0.09} />

      {/* Gold sparkle particles */}
      <Sparkles
        count={80}
        scale={[15, 10, 15]}
        size={2}
        speed={0.3}
        opacity={0.4}
        color="#c8a960"
      />
    </>
  );
}
