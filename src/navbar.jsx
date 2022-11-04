import styled from "styled-components";
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import React from "react";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 120px;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const Logo = styled.h1`
  font-weight: bold;
  &:hover {
    transform: scale(1.01);
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  padding: 12px;
  // background-color: white;
  &:hover {
    background-color: #395B64;
    transform: scale(1.1);
    border-radius: 5%;
    color: #20beff;
  }
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Left> */}
        {/* <Language>EN</Language> */}
        {/* <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer> */}
        {/* </Left> */}
        {/* <Center>
          <Link to="/react-deploy" style={{ textDecoration: "none", color: "#E7F6F2" }} >
            <Logo>Aakash Chavda</Logo>
          </Link>
        </Center> */}
        {/* <Right> */}
        <Center>
          <Link to="/react-deploy/home" style={{ textDecoration: "none", color: "#E7F6F2" }}>
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/react-deploy/resume" style={{ textDecoration: "none", color: "#E7F6F2" }}>
            <MenuItem>RESUME</MenuItem>
          </Link>
          <Link to="/react-deploy/resume" style={{ textDecoration: "none", color: "#E7F6F2" }}>
            <MenuItem>SKILLS</MenuItem>
          </Link>
          <Link to="/react-deploy/about" style={{ textDecoration: "none", color: "#E7F6F2" }}>
            <MenuItem>ABOUT</MenuItem>
          </Link>
          <Link to="/react-deploy/resume" style={{ textDecoration: "none", color: "#E7F6F2" }}>
            <MenuItem>CONTACT</MenuItem>
          </Link>
        </Center>
        {/* </Right> */}
      </Wrapper>

    </Container>
  );
};

export default Navbar;