import './App.css';
import Navbar from "./navbar";
import Resume from "./resume";
// import { Document, Page, Text, Image, StyleSheet, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from "react";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './about';
import Home from "./home";
import Contact from './contact';


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
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/react-deploy/">
            <Route index element={<Navbar />} />
            <Route exact path="resume" element={<Resume />} />
            <Route path="about" element={<About />} /> */}
          <Route exact path="/react-deploy/" element={<Home />} />
          <Route exact path="/react-deploy/home" element={<Home />} />
          {/* <Route exact path="/react-deploy" element={<Navbar />} /> */}
          <Route exact path="/react-deploy/resume" element={<Resume />} />
          <Route exact path="/react-deploy/about" element={<About />} />
          <Route exact path="/react-deploy/contact" element={<Contact />} />

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
