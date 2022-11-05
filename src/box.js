import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "./map.jpg";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

// export default function Box() {

//     const colorMap = useLoader(TextureLoader, texture);

//     return (
//         <mesh rotation={[90, 0, 20]}>
//             <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
//             <meshStandardMaterial map={colorMap} />
//         </mesh>
//     );
// }

// export default function Model(props) {
//     const { nodes, materials } = useGLTF('/F-16D.gltf')
//     return (
//       <group {...props} dispose={null}>
//         <mesh geometry={nodes.Fuselage.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Canopy.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Tail.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Nose.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FinR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FinL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Pylon1.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Pylon2.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Pylon3.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Tank.geometry} material={materials.Paint} />
//         <mesh geometry={nodes['GBU-16'].geometry} material={materials.Paint} />
//         <mesh geometry={nodes['AIM-120'].geometry} material={materials.Paint} />
//         <mesh geometry={nodes['AIM-9'].geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Cockpit.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.GearBox.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.NoseGearBox.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.WingTip.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.ElevatorL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.ElevatorR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.AirbrakeLB.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.AirbrakeRB.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.AirbrakeLT.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.AirbrakeRT.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Hubs.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.SidePanels.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Seats.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Intake.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Sensor.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Lights.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Nozzles.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Exhaust.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Grill.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.HookBox.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Hook.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.NoseDoors.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.DoorL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.DoorR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.Rudder.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.EleronL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.EleronR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FlapL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FlapR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.SlatL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.SlatR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.RearLandingGearR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.RearLandingGearL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.RearWheelR.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.RearWheelL.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FrontLandingGear.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.FrontWheel.geometry} material={materials.Paint} />
//         <mesh geometry={nodes.CanopyGlass.geometry} material={materials.Glass} />
//         <PerspectiveCamera makeDefault={false} far={1000} near={0.05} fov={40} position={[17.64, 16.86, 6.49]} rotation={[-1.21, 0.77, 1.07]} />
//       </group>
//     )
//   }