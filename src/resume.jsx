import styled from "styled-components";
import React from "react";
import Navbar from "./navbar";


const Container = styled.div`
  height: 600px;
`;

const Resume = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <body>
          <iframe src="https://drive.google.com/file/d/1nCwnMIO7HSCech2VYWxxfTp2_qvVVjUT/preview" width="100%" height="1200px" allow="autoplay"></iframe>
        </body>
      </Container>
    </div>
  );
};

export default Resume;