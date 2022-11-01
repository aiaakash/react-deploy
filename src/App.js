import './App.css';
import Home from "./home";
import Resume from "./resume";
// import { Document, Page, Text, Image, StyleSheet, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from "react";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './about';



function App() {

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        <Routes>
          {/* <Route path="/react-deploy/">
            <Route index element={<Home />} />
            <Route exact path="resume" element={<Resume />} />
            <Route path="about" element={<About />} /> */}

          <Route exact path="/react-deploy" element={<Home />} />
          <Route exact path="/react-deploy/resume" element={<Resume />} />
          <Route exact path="/react-deploy/about" element={<About />} />

          {/* <body>
            <iframe src="https://drive.google.com/file/d/1nCwnMIO7HSCech2VYWxxfTp2_qvVVjUT/preview" width="100%" height="1200px" allow="autoplay"></iframe>
          </body> */}
          {/* </Route> */}
        </Routes>
      </div >
    </Router >
  );
}


export default App;
