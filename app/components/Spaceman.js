import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function spaceman(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/Astronaut.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!nodes.mesh_0?.skeleton) return;

    const skeleton = nodes.mesh_0.skeleton;

    // HEAD
    const head = skeleton.bones.find(b => b.name.includes('head'));
    if (head) head.rotation.x = Math.PI / 6;  // head tilts forward

    // LEFT ARM
    const leftArm = skeleton.bones.find(b => b.name.includes('L_Arm'));
    if (leftArm) leftArm.rotation.z = -Math.PI / 4;  // arm droops down

    const leftElbow = skeleton.bones.find(b => b.name.includes('L_Elbow'));
    if (leftElbow) leftElbow.rotation.z = Math.PI / 6;  // elbow bends

    // RIGHT ARM
    const rightArm = skeleton.bones.find(b => b.name.includes('R_Arm'));
    if (rightArm) rightArm.rotation.z = Math.PI / 4;

    const rightElbow = skeleton.bones.find(b => b.name.includes('R_Elbow'));
    if (rightElbow) rightElbow.rotation.z = -Math.PI / 6;

    // LEGS
    const leftThigh = skeleton.bones.find(b => b.name.includes('L_Thigh'));
    const rightThigh = skeleton.bones.find(b => b.name.includes('R_Thigh'));
    if (leftThigh) leftThigh.rotation.x = -Math.PI / 8;  // left leg forward
    if (rightThigh) rightThigh.rotation.x = Math.PI / 8;  // right leg back

    const leftKnee = skeleton.bones.find(b => b.name.includes('L_Knee'));
    const rightKnee = skeleton.bones.find(b => b.name.includes('R_Knee'));
    if (leftKnee) leftKnee.rotation.x = Math.PI / 12;  // slight bend
    if (rightKnee) rightKnee.rotation.x = Math.PI / 12;

    // Add SkeletonHelper to visualize bones
    const helper = new THREE.SkeletonHelper(group.current);
    group.current.add(helper);
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

useGLTF.preload('/Astronaut.glb');
