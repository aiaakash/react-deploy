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
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;



const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language> */}
                    {/* <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer> */}
                </Left>
                <Center>
                    <Logo>Aakash Chavda</Logo>
                </Center>
                <Right>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <MenuItem>HOME</MenuItem>
                    </Link>
                    <Link to="/resume" style={{ textDecoration: "none" }}>
                        <MenuItem>RESUME</MenuItem>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <MenuItem>ABOUT</MenuItem>
                    </Link>
                    <MenuItem>
                        {/* <Badge badgeContent={4} color="primary">
                            <LocalGroceryStoreIcon />
                        </Badge> */}
                    </MenuItem>
                </Right>
            </Wrapper>

        </Container>
    );
};

export default Home;