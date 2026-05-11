import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, SpotLight, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing';

// Realistic Physical Materials
const goldMaterial = new THREE.MeshPhysicalMaterial({
  color: '#D4AF37',
  metalness: 1,
  roughness: 0.2,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  envMapIntensity: 2,
});

const darkMarbleMaterial = new THREE.MeshPhysicalMaterial({
  color: '#0A0A0A',
  metalness: 0.1,
  roughness: 0.1,
  clearcoat: 0.8,
  clearcoatRoughness: 0.2,
  envMapIntensity: 1.5,
});

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ffffff',
  metalness: 0.1,
  roughness: 0.05,
  transmission: 0.9,
  ior: 1.5,
  thickness: 2,
  envMapIntensity: 2,
  clearcoat: 1,
});

// Procedural Lathe Geometry for a King Piece
function createKingGeometry() {
  const points = [];
  // Base
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(1.2, 0));
  points.push(new THREE.Vector2(1.2, 0.4));
  points.push(new THREE.Vector2(1.0, 0.5));
  points.push(new THREE.Vector2(0.9, 0.8));
  // Stem
  points.push(new THREE.Vector2(0.6, 1.0));
  points.push(new THREE.Vector2(0.5, 2.5));
  points.push(new THREE.Vector2(0.4, 4.0));
  // Collars
  points.push(new THREE.Vector2(0.8, 4.2));
  points.push(new THREE.Vector2(0.8, 4.4));
  points.push(new THREE.Vector2(0.5, 4.5));
  // Head/Crown
  points.push(new THREE.Vector2(0.9, 5.2));
  points.push(new THREE.Vector2(0.7, 5.5));
  points.push(new THREE.Vector2(0.4, 5.6));
  // Cross on top (simplified as a knob for Lathe)
  points.push(new THREE.Vector2(0.2, 5.8));
  points.push(new THREE.Vector2(0.3, 6.2));
  points.push(new THREE.Vector2(0.0, 6.4));
  return new THREE.LatheGeometry(points, 32);
}

// Procedural Lathe Geometry for a Queen Piece
function createQueenGeometry() {
  const points = [];
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(1.1, 0));
  points.push(new THREE.Vector2(1.1, 0.4));
  points.push(new THREE.Vector2(0.9, 0.5));
  points.push(new THREE.Vector2(0.8, 0.8));
  points.push(new THREE.Vector2(0.5, 1.0));
  points.push(new THREE.Vector2(0.4, 2.5));
  points.push(new THREE.Vector2(0.3, 3.8));
  points.push(new THREE.Vector2(0.7, 4.0));
  points.push(new THREE.Vector2(0.7, 4.2));
  points.push(new THREE.Vector2(0.4, 4.3));
  points.push(new THREE.Vector2(0.8, 4.8));
  points.push(new THREE.Vector2(0.1, 5.2));
  points.push(new THREE.Vector2(0.0, 5.2));
  return new THREE.LatheGeometry(points, 32);
}

function ChessPiece({ geometry, material, position, speed = 1, scale = 1, rotation = [0,0,0] }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale} rotation={rotation as any} geometry={geometry} material={material} castShadow receiveShadow />
    </Float>
  );
}

function RealisticBoard() {
  const boardTexture = useTexture('/chessboard.png');
  
  return (
    <group position={[0, -2, 0]}>
      {/* Wooden/Marble Base */}
      <mesh receiveShadow position={[0, -0.25, 0]}>
        <boxGeometry args={[16, 0.5, 16]} />
        <meshPhysicalMaterial 
          map={boardTexture} 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.2} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
        />
      </mesh>
      
      {/* Remove the old GridHelper since we now have a real texture */}
    </group>
  );
}

export default function ChessScene() {
  const kingGeo = useMemo(() => createKingGeometry(), []);
  const queenGeo = useMemo(() => createQueenGeometry(), []);

  return (
    <>
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 40]} />
      
      {/* High-quality HDR Environment for PBR Reflections */}
      <Environment preset="studio" environmentIntensity={0.5} />

      {/* Cinematic Lighting Setup */}
      <ambientLight intensity={0.5} />
      <SpotLight
        position={[5, 15, 5]}
        angle={0.3}
        penumbra={0.8}
        intensity={150}
        color="#D4AF37"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <SpotLight
        position={[-10, 10, -5]}
        angle={0.5}
        penumbra={0.5}
        intensity={80}
        color="#ffffff"
        castShadow
      />

      {/* Floating Dust / Atmospheric Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(3000).map(() => (Math.random() - 0.5) * 40), 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#D4AF37" transparent opacity={0.4} sizeAttenuation />
      </points>

      <RealisticBoard />

      {/* Floating Pieces */}
      <group position={[2, -2, 0]}>
        {/* Hero King in Warm Gold */}
        <ChessPiece geometry={kingGeo} material={goldMaterial} position={[0, 0, 0]} scale={0.8} speed={0.8} />
        
        {/* Dark Marble Queen slightly behind */}
        <ChessPiece geometry={queenGeo} material={darkMarbleMaterial} position={[-3, 2, -2]} scale={0.7} speed={0.5} rotation={[0.2, 0, -0.2]} />
        
        {/* Glass King floating in foreground */}
        <ChessPiece geometry={kingGeo} material={glassMaterial} position={[4, 1, 3]} scale={0.5} speed={1.2} rotation={[-0.1, 0, 0.3]} />
        
        {/* Additional background pieces for depth */}
        <ChessPiece geometry={queenGeo} material={goldMaterial} position={[-5, 0, 4]} scale={0.4} speed={0.6} />
      </group>

      {/* Realistic Contact Shadows on the Board */}
      <ContactShadows position={[0, -1.99, 0]} opacity={0.8} scale={20} blur={2} far={10} color="#000000" />

      {/* Post Processing for Cinematic Camera Effects */}
      <EffectComposer>
        <DepthOfField focusDistance={0.02} focalLength={0.05} bokehScale={5} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>
    </>
  );
}
