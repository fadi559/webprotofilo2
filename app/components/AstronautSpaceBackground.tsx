"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { SpaceTelescope } from './SpaceTelescope';

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

  // Animate drifting movement and limp pose
  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      // Make the astronaut face the camera (z-axis)
      group.current.position.x = Math.sin(t * 0.15) * 2;
      group.current.position.y = Math.cos(t * 0.09) * 1.2 - 1;
      group.current.position.z = Math.sin(t * 0.07) * 0.5;
      group.current.rotation.x = 0;
      group.current.rotation.y = 0;
      group.current.rotation.z = 0;
    }
  });

  useEffect(() => {
    // Only log bones for user inspection, no custom posing
    if (nodes.mesh_0 && nodes.mesh_0.skeleton) {
      console.log('mesh_0 skeleton:', nodes.mesh_0.skeleton);
      console.log('mesh_0 bones:');
      nodes.mesh_0.skeleton.bones.forEach(bone => console.log(bone.name));
    }
    if (nodes.mesh_1 && nodes.mesh_1.skeleton) {
      console.log('mesh_1 skeleton:', nodes.mesh_1.skeleton);
      console.log('mesh_1 bones:');
      nodes.mesh_1.skeleton.bones.forEach(bone => console.log(bone.name));
    }
    if (nodes.mesh_2 && nodes.mesh_2.skeleton) {
      console.log('mesh_2 skeleton:', nodes.mesh_2.skeleton);
      console.log('mesh_2 bones:');
      nodes.mesh_2.skeleton.bones.forEach(bone => console.log(bone.name));
    }
  }, [nodes]);

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
              {/* Make the visor fully black and opaque */}
              <mesh position={[0, 0.13, 0.09]} scale={[0.18, 0.18, 0.18]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#000" transparent={false} opacity={1} />
              </mesh>
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
        camera={{ position: [0, 0, 10], fov: 45 }}
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
          {/* <SpaceManModel scale={0.5} position={[-2, -1, 0]} /> */}
          <SpaceTelescope scale={0.4} position={[2, 0, 0]} />
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