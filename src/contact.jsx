import styled from "styled-components";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { skillsSection } from "./porfolio"


const Container = styled.div`
  height: 120px;
  
`;


const Contact = () => {
  return (
    <div>
      <Navbar />
      <h2 className="header">Email - aakash.cvd@gmail.com</h2>
    </div >
  );
};

export default Contact; 