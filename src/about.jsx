import styled from "styled-components";
import React from "react";
import Home from "./navbar";
import './about.css';


const Container = styled.div`
  height: 600px;
`;

const About = () => {
  return (
    <div>
      <Home />
      <Container>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;