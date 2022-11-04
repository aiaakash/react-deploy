import styled from "styled-components";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { skillsSection } from "./porfolio"
import "./SoftwareSkill.scss";
import { github } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  height: 120px;
  
`;


const Home = () => {
  return (
    <div>
      <Navbar />
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
    </div >
  );
};

export default Home; 