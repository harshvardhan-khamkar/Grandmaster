import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// A procedural, glowing, geometric piece to act as a placeholder for our futuristic 3D pieces
function HolographicPiece({ position, color, speed = 1, scale = 1 }: { position: [number, number, number], color: string, speed?: number, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {/* Using a stylized octahedron as a futuristic piece representation */}
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
          distort={0.2}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// A glowing, grid-based futuristic chessboard
function HolographicBoard() {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      // Subtle pulse or movement
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 2;
    }
  });

  return (
    <group>
      <gridHelper 
        ref={gridRef}
        args={[20, 20, '#00F0FF', '#AA3BFF']} 
        position={[0, -2, 0]}
      />
      {/* Base glow under the board */}
      <mesh position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="#0A0D1A" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function ChessScene() {
  return (
    <>
      <color attach="background" args={['#05070D']} />
      <fog attach="fog" args={['#05070D', 5, 30]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00F0FF" />
      <directionalLight position={[-10, 10, -5]} intensity={1} color="#AA3BFF" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#AA3BFF" distance={10} />

      {/* Futuristic Chessboard */}
      <HolographicBoard />

      {/* Floating Pieces */}
      <group position={[0, 0, 0]}>
        <HolographicPiece position={[-4, 1, -2]} color="#00F0FF" scale={1.2} />
        <HolographicPiece position={[4, 0.5, -4]} color="#AA3BFF" speed={0.5} scale={0.8} />
        <HolographicPiece position={[0, 2, -6]} color="#FFD700" speed={1.5} scale={1.5} />
        <HolographicPiece position={[-3, -0.5, 3]} color="#00F0FF" speed={0.8} scale={0.9} />
        <HolographicPiece position={[3, 1.5, 2]} color="#AA3BFF" speed={1.2} scale={1.1} />
      </group>

      {/* Background Particles */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

      {/* Post Processing for the Cyberpunk/Holo Glow */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} />
      </EffectComposer>
    </>
  );
}
