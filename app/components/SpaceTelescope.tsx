import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function SpaceTelescope(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('/space_telescope.glb');
  useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="RootNode0_0" scale={0.01}>
                  <group name="skeletal83_83">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.material_0} skeleton={nodes.Object_48.skeleton} />
                      <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.material_1} skeleton={nodes.Object_51.skeleton} />
                      <skinnedMesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.material_2} skeleton={nodes.Object_54.skeleton} />
                      <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.material_3} skeleton={nodes.Object_57.skeleton} />
                      <skinnedMesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.material_4} skeleton={nodes.Object_60.skeleton} />
                      <skinnedMesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.material_5} skeleton={nodes.Object_63.skeleton} />
                      <skinnedMesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.material_6} skeleton={nodes.Object_66.skeleton} />
                      <skinnedMesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.material_7} skeleton={nodes.Object_69.skeleton} />
                      <skinnedMesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.material_8} skeleton={nodes.Object_72.skeleton} />
                      <skinnedMesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials.material_9} skeleton={nodes.Object_75.skeleton} />
                      <skinnedMesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.material_10} skeleton={nodes.Object_78.skeleton} />
                      <skinnedMesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials.material_11} skeleton={nodes.Object_81.skeleton} />
                      <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.material_12} skeleton={nodes.Object_84.skeleton} />
                      <skinnedMesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.material_13} skeleton={nodes.Object_87.skeleton} />
                      <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.material_14} skeleton={nodes.Object_90.skeleton} />
                      <skinnedMesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials.material_15} skeleton={nodes.Object_93.skeleton} />
                      <skinnedMesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.material_16} skeleton={nodes.Object_96.skeleton} />
                      <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.material_17} skeleton={nodes.Object_99.skeleton} />
                      <skinnedMesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.material_18} skeleton={nodes.Object_102.skeleton} />
                      <skinnedMesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.material_19} skeleton={nodes.Object_105.skeleton} />
                      <skinnedMesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.material_20} skeleton={nodes.Object_108.skeleton} />
                      <skinnedMesh name="Object_111" geometry={nodes.Object_111.geometry} material={materials.material_21} skeleton={nodes.Object_111.skeleton} />
                      <skinnedMesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.material_22} skeleton={nodes.Object_114.skeleton} />
                      <skinnedMesh name="Object_117" geometry={nodes.Object_117.geometry} material={materials.material_23} skeleton={nodes.Object_117.skeleton} />
                      <skinnedMesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.material_24} skeleton={nodes.Object_120.skeleton} />
                      <skinnedMesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.material_25} skeleton={nodes.Object_123.skeleton} />
                      <skinnedMesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.material_26} skeleton={nodes.Object_126.skeleton} />
                      <skinnedMesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.material_27} skeleton={nodes.Object_129.skeleton} />
                      <skinnedMesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.material_28} skeleton={nodes.Object_132.skeleton} />
                      <skinnedMesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.material_29} skeleton={nodes.Object_135.skeleton} />
                      <skinnedMesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.material_30} skeleton={nodes.Object_138.skeleton} />
                      <skinnedMesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.material_31} skeleton={nodes.Object_141.skeleton} />
                      <skinnedMesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials.material_32} skeleton={nodes.Object_144.skeleton} />
                      <skinnedMesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials.material_33} skeleton={nodes.Object_147.skeleton} />
                      <skinnedMesh name="Object_150" geometry={nodes.Object_150.geometry} material={materials.material_34} skeleton={nodes.Object_150.skeleton} />
                      <skinnedMesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.material_35} skeleton={nodes.Object_153.skeleton} />
                      <skinnedMesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.material_36} skeleton={nodes.Object_156.skeleton} />
                      <skinnedMesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.material_37} skeleton={nodes.Object_159.skeleton} />
                      <skinnedMesh name="Object_162" geometry={nodes.Object_162.geometry} material={materials.material_38} skeleton={nodes.Object_162.skeleton} />
                      <skinnedMesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.material_39} skeleton={nodes.Object_165.skeleton} />
                      <skinnedMesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.material_40} skeleton={nodes.Object_168.skeleton} />
                      <skinnedMesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.material_41} skeleton={nodes.Object_171.skeleton} />
                      <skinnedMesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.material_42} skeleton={nodes.Object_174.skeleton} />
                      <skinnedMesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.material_43} skeleton={nodes.Object_177.skeleton} />
                      <skinnedMesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.material_44} skeleton={nodes.Object_180.skeleton} />
                      <skinnedMesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.material_45} skeleton={nodes.Object_183.skeleton} />
                      <skinnedMesh name="Object_186" geometry={nodes.Object_186.geometry} material={materials.material_46} skeleton={nodes.Object_186.skeleton} />
                      <skinnedMesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.material_47} skeleton={nodes.Object_189.skeleton} />
                      <skinnedMesh name="Object_192" geometry={nodes.Object_192.geometry} material={materials.material_48} skeleton={nodes.Object_192.skeleton} />
                      <skinnedMesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.material_49} skeleton={nodes.Object_195.skeleton} />
                      <skinnedMesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.material_50} skeleton={nodes.Object_198.skeleton} />
                      <skinnedMesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.material_51} skeleton={nodes.Object_201.skeleton} />
                      <skinnedMesh name="Object_204" geometry={nodes.Object_204.geometry} material={materials.material_52} skeleton={nodes.Object_204.skeleton} />
                      <skinnedMesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.material_53} skeleton={nodes.Object_207.skeleton} />
                      <skinnedMesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials.material_54} skeleton={nodes.Object_210.skeleton} />
                      <skinnedMesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials.material_55} skeleton={nodes.Object_213.skeleton} />
                      <skinnedMesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials.material_56} skeleton={nodes.Object_216.skeleton} />
                      <skinnedMesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials.material_57} skeleton={nodes.Object_219.skeleton} />
                      <skinnedMesh name="Object_222" geometry={nodes.Object_222.geometry} material={materials.material_58} skeleton={nodes.Object_222.skeleton} />
                      <skinnedMesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials.material_59} skeleton={nodes.Object_225.skeleton} />
                      <skinnedMesh name="Object_228" geometry={nodes.Object_228.geometry} material={materials.material_60} skeleton={nodes.Object_228.skeleton} />
                      <skinnedMesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials.material_61} skeleton={nodes.Object_231.skeleton} />
                      <skinnedMesh name="Object_234" geometry={nodes.Object_234.geometry} material={materials.material_62} skeleton={nodes.Object_234.skeleton} />
                      <skinnedMesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.material_63} skeleton={nodes.Object_237.skeleton} />
                      <skinnedMesh name="Object_240" geometry={nodes.Object_240.geometry} material={materials.material_64} skeleton={nodes.Object_240.skeleton} />
                      <skinnedMesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.material_65} skeleton={nodes.Object_243.skeleton} />
                      <group name="Frame3_3_correction">
                        <group name="Frame3_3" />
                      </group>
                      <group name="FineGuidanceSensors5_5_correction">
                        <group name="FineGuidanceSensors5_5" />
                      </group>
                      <group name="Wide_Field_Camera7_7_correction">
                        <group name="Wide_Field_Camera7_7" />
                      </group>
                      <group name="Axial_Instrument019_9_correction">
                        <group name="Axial_Instrument019_9" />
                      </group>
                      <group name="Axial_Instrument0210_10_correction">
                        <group name="Axial_Instrument0210_10" />
                      </group>
                      <group name="Axial_Instrument0311_11_correction">
                        <group name="Axial_Instrument0311_11" />
                      </group>
                      <group name="Axial_Instrument0412_12_correction">
                        <group name="Axial_Instrument0412_12" />
                      </group>
                      <group name="Eleven_Bottom_Antenna_Pole14_14_correction">
                        <group name="Eleven_Bottom_Antenna_Pole14_14" />
                      </group>
                      <group name="Eleven_Bottom_Antenna_Attachment15_15_correction">
                        <group name="Eleven_Bottom_Antenna_Attachment15_15" />
                      </group>
                      <group name="Elevent_Bottom_Antena_Dish16_16_correction">
                        <group name="Elevent_Bottom_Antena_Dish16_16" />
                      </group>
                      <group name="Ten_Top_Antenna_Dish18_18_correction">
                        <group name="Ten_Top_Antenna_Dish18_18" />
                      </group>
                      <group name="Ten_Top_Antenna_Pole19_19_correction">
                        <group name="Ten_Top_Antenna_Pole19_19" />
                      </group>
                      <group name="Ten_Top_Antenna_Attachment20_20_correction">
                        <group name="Ten_Top_Antenna_Attachment20_20" />
                      </group>
                      <group name="solar_2_right22_22_correction">
                        <group name="solar_2_right22_22" />
                      </group>
                      <group name="stend_right23_23_correction">
                        <group name="stend_right23_23" />
                      </group>
                      <group name="solar_1_right24_24_correction">
                        <group name="solar_1_right24_24" />
                      </group>
                      <group name="solar_1_left26_26_correction">
                        <group name="solar_1_left26_26" />
                      </group>
                      <group name="solar_2_left27_27_correction">
                        <group name="solar_2_left27_27" />
                      </group>
                      <group name="stend_left28_28_correction">
                        <group name="stend_left28_28" />
                      </group>
                      <group name="inner30_30_correction">
                        <group name="inner30_30" />
                      </group>
                      <group name="outer31_31_correction">
                        <group name="outer31_31" />
                      </group>
                      <group name="secondary_frame32_32_correction">
                        <group name="secondary_frame32_32" />
                      </group>
                      <group name="inner_frame_134_34_correction">
                        <group name="inner_frame_134_34" />
                      </group>
                      <group name="inner_frame_235_35_correction">
                        <group name="inner_frame_235_35" />
                      </group>
                      <group name="Baffle36_36_correction">
                        <group name="Baffle36_36" />
                      </group>
                      <group name="lock38_38_correction">
                        <group name="lock38_38" />
                      </group>
                      <group name="huk39_39_correction">
                        <group name="huk39_39" />
                      </group>
                      <group name="door40_40_correction">
                        <group name="door40_40" />
                      </group>
                      <group name="huk_241_41_correction">
                        <group name="huk_241_41" />
                      </group>
                      <group name="wire843_43_correction">
                        <group name="wire843_43" />
                      </group>
                      <group name="wire944_44_correction">
                        <group name="wire944_44" />
                      </group>
                      <group name="lower_outer_shell45_45_correction">
                        <group name="lower_outer_shell45_45" />
                      </group>
                      <group name="outer_shell_246_46_correction">
                        <group name="outer_shell_246_46" />
                      </group>
                      <group name="outer_shell_347_47_correction">
                        <group name="outer_shell_347_47" />
                      </group>
                      <group name="extra_parts48_48_correction">
                        <group name="extra_parts48_48" />
                      </group>
                      <group name="plats_149_49_correction">
                        <group name="plats_149_49" />
                      </group>
                      <group name="plats_250_50_correction">
                        <group name="plats_250_50" />
                      </group>
                      <group name="Upper_outer_shell_152_52_correction">
                        <group name="Upper_outer_shell_152_52" />
                      </group>
                      <group name="Upper_outer_shell_253_53_correction">
                        <group name="Upper_outer_shell_253_53" />
                      </group>
                      <group name="upper_exter_parts_154_54_correction">
                        <group name="upper_exter_parts_154_54" />
                      </group>
                      <group name="upper_exter_parts_255_55_correction">
                        <group name="upper_exter_parts_255_55" />
                      </group>
                      <group name="upper_exter_parts_356_56_correction">
                        <group name="upper_exter_parts_356_56" />
                      </group>
                      <group name="upper_exter_parts_457_57_correction">
                        <group name="upper_exter_parts_457_57" />
                      </group>
                      <group name="upper_plats58_58_correction">
                        <group name="upper_plats58_58" />
                      </group>
                      <group name="Lower_exter_parts_160_60_correction">
                        <group name="Lower_exter_parts_160_60" />
                      </group>
                      <group name="Lower_exter_parts_261_61_correction">
                        <group name="Lower_exter_parts_261_61" />
                      </group>
                      <group name="Lower_exter_parts_362_62_correction">
                        <group name="Lower_exter_parts_362_62" />
                      </group>
                      <group name="Lower_exter_parts_463_63_correction">
                        <group name="Lower_exter_parts_463_63" />
                      </group>
                      <group name="Lower_exter_parts_564_64_correction">
                        <group name="Lower_exter_parts_564_64" />
                      </group>
                      <group name="Lower_exter_parts_665_65_correction">
                        <group name="Lower_exter_parts_665_65" />
                      </group>
                      <group name="InsulationOuterShell66_66_correction">
                        <group name="InsulationOuterShell66_66" />
                      </group>
                      <group name="InteriorAndExteriorShell67_67_correction">
                        <group name="InteriorAndExteriorShell67_67" />
                      </group>
                      <group name="locker_169_69_correction">
                        <group name="locker_169_69" />
                      </group>
                      <group name="locker_270_70_correction">
                        <group name="locker_270_70" />
                      </group>
                      <group name="wire471_71_correction">
                        <group name="wire471_71" />
                      </group>
                      <group name="wire572_72_correction">
                        <group name="wire572_72" />
                      </group>
                      <group name="wire1973_73_correction">
                        <group name="wire1973_73" />
                      </group>
                      <group name="wire2074_74_correction">
                        <group name="wire2074_74" />
                      </group>
                      <group name="exter_parts_175_75_correction">
                        <group name="exter_parts_175_75" />
                      </group>
                      <group name="exter_parts_276_76_correction">
                        <group name="exter_parts_276_76" />
                      </group>
                      <group name="exter_parts_377_77_correction">
                        <group name="exter_parts_377_77" />
                      </group>
                      <group name="exter_parts_478_78_correction">
                        <group name="exter_parts_478_78" />
                      </group>
                      <group name="upperInteriorAndExteriorShell_279_79_correction">
                        <group name="upperInteriorAndExteriorShell_279_79" />
                      </group>
                      <group name="upperInteriorAndExteriorShell_180_80_correction">
                        <group name="upperInteriorAndExteriorShell_180_80" />
                      </group>
                      <group name="wire_box_181_81_correction">
                        <group name="wire_box_181_81" />
                      </group>
                      <group name="wire_box_282_82_correction">
                        <group name="wire_box_282_82" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/space_telescope.glb'); 