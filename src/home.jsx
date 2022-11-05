import styled from "styled-components";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import React from "react";
import { Suspense } from "react";

import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { skillsSection } from "./porfolio"
import "./SoftwareSkill.scss";
import { github } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Canvas } from "@react-three/fiber";
import Box from "./box";
// import Model from "./box";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, PerspectiveCamera } from '@react-three/drei'



const Container = styled.div`
  // height: 120px;
  canvas{
    height: 500px;
  }
`;


function Model() {
  const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
  return (
    <group>
      <primitive object={gltf.scene} />
      <PerspectiveCamera makeDefault={true} zoom={1.2} far={1000} near={5} fov={15} position={[7.64, 10, 16.49]} rotation={[-1.21, 0.77, 1.07]} />
    </group>
  )
}



// function Model(props) {
//   const { nodes, materials } = useGLTF('./F-16D.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Fuselage.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Canopy.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Tail.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Nose.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FinR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FinL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Pylon1.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Pylon2.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Pylon3.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Tank.geometry} material={materials.Paint} />
//       <mesh geometry={nodes['GBU-16'].geometry} material={materials.Paint} />
//       <mesh geometry={nodes['AIM-120'].geometry} material={materials.Paint} />
//       <mesh geometry={nodes['AIM-9'].geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Cockpit.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.GearBox.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.NoseGearBox.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.WingTip.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.ElevatorL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.ElevatorR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.AirbrakeLB.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.AirbrakeRB.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.AirbrakeLT.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.AirbrakeRT.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Hubs.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.SidePanels.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Seats.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Intake.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Sensor.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Lights.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Nozzles.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Exhaust.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Grill.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.HookBox.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Hook.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.NoseDoors.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.DoorL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.DoorR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.Rudder.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.EleronL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.EleronR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FlapL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FlapR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.SlatL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.SlatR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.RearLandingGearR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.RearLandingGearL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.RearWheelR.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.RearWheelL.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FrontLandingGear.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.FrontWheel.geometry} material={materials.Paint} />
//       <mesh geometry={nodes.CanopyGlass.geometry} material={materials.Glass} />
//       <PerspectiveCamera makeDefault={false} far={1000} near={0.05} fov={40} position={[17.64, 16.86, 6.49]} rotation={[-1.21, 0.77, 1.07]} />
//     </group>
//   )
// };



const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={2} />
          <Suspense fallback={null}>
            {/* <Box /> */}
            <Model />
          </Suspense>
        </Canvas>

        <h2 className="header">WEB DEVELOPMENT</h2>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {skillsSection.softwareSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i>
                    <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                  </i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="header">ML & DATA SCIENCE</h2>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {skillsSection.softwareSkillsml.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i>
                    <FontAwesomeIcon icon={skills.fontAwesomeClassname} />
                  </i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div >
  );
};

export default Home; 