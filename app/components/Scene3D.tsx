import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

export default function Scene3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 1, 1]} />
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#9333EA"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
} 