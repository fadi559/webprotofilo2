"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

interface SpaceManModelProps {
  scale?: number;
  position?: [number, number, number];
}

interface GLTFNodes {
  mesh_0: THREE.SkinnedMesh;
  mesh_1: THREE.SkinnedMesh;
  mesh_2: THREE.SkinnedMesh;
  Root4: THREE.Bone | THREE.Object3D;
}

function SpaceManModel(props: SpaceManModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, animations } = useGLTF('/models/Astronaut.glb') as unknown as { nodes: GLTFNodes; animations: THREE.AnimationClip[] };
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play all animations
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play();
      }
    });
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="RootNode0" scale={0.01}>
          <group name="geo1">
            <group name="astronaut2">
              <skinnedMesh
                name="mesh_0"
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                skeleton={nodes.mesh_0.skeleton}
              />
              <skinnedMesh
                name="mesh_1"
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                skeleton={nodes.mesh_1.skeleton}
              />
              <skinnedMesh
                name="mesh_2"
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                skeleton={nodes.mesh_2.skeleton}
              />
            </group>
          </group>
          <group name="skeletal3">
            <primitive object={nodes.Root4} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/Astronaut.glb');

export default function AstronautSpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 20]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        
        <Suspense fallback={null}>
          <SpaceManModel scale={0.5} position={[0, -1, 0]} />
          <Environment preset="studio" />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 