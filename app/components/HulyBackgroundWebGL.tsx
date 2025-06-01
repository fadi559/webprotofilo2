"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";

const HulyShader = () => {
  const mesh = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
    }),
    []
  );

  // Vertex shader: morph the bottom of the plane for a "liquid" effect
  const vertexShader = `
    uniform float u_time;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      // Only morph the bottom part (vUv.y close to 0)
      float morph = smoothstep(0.0, 0.3, 1.0 - vUv.y);
      float wave = sin(u_time * 0.7 + pos.x * 2.5) * 0.08 * morph;
      wave += sin(u_time * 1.2 + pos.x * 5.0) * 0.04 * morph;
      pos.y += wave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  // Fragment shader: vertical beam, blue glow, and subtle grid
  const fragmentShader = `
    uniform float u_time;
    varying vec2 vUv;
    
    void main() {
      // Base: dark blue/black
      vec3 color = mix(vec3(0.07, 0.09, 0.13), vec3(0.13, 0.18, 0.27), vUv.y);
      
      // Vertical beam
      float beam = exp(-pow((vUv.x - 0.5) * 7.0, 2.0));
      float beamGlow = exp(-pow((vUv.x - 0.5) * 7.0, 2.0)) * 0.7;
      float beamAnim = 0.7 + 0.3 * sin(u_time * 1.2);
      color += vec3(0.7, 0.8, 1.0) * beam * beamAnim;
      color += vec3(0.3, 0.5, 1.0) * beamGlow * 0.5;
      
      // Bottom "liquid" glow
      float glow = exp(-pow((vUv.y - 0.98) * 12.0, 2.0)) * exp(-pow((vUv.x - 0.5) * 2.5, 2.0));
      float glowAnim = 0.7 + 0.3 * sin(u_time * 0.8 + vUv.x * 4.0);
      color += vec3(0.4, 0.6, 1.0) * glow * glowAnim;
      color += vec3(0.8, 0.9, 1.0) * glow * 0.2 * glowAnim;
      
      // Subtle grid/dots
      float grid = (sin(vUv.x * 60.0) * sin(vUv.y * 60.0)) * 0.03;
      color += vec3(grid);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state) => {
    uniforms.u_time.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry args={[4, 3, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const HulyBackgroundWebGL = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="fixed inset-0 -z-10 bg-black"
  >
    <Canvas camera={{ position: [0, 0, 2] }}>
      <HulyShader />
    </Canvas>
  </motion.div>
);

export default HulyBackgroundWebGL; 