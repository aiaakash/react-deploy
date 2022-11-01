import './App.css';
import Home from "./home"
// import { Document, Page, Text, Image, StyleSheet, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from "react";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



function App() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="App">
      <Home />
      <body>
        {/* <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600" pageNumber={pageNumber} />
      </Document> */}
        <object width="100%" height="1200px" data="https://drive.google.com/file/d/1nCwnMIO7HSCech2VYWxxfTp2_qvVVjUT/preview" type="application/pdf">
        </object>
        {/* <iframe src="./resume.pdf" height="800" width="70%">
      </iframe> */}
        {/* <embed src="resume.pdf" type="https://drive.google.com/file/d/1nCwnMIO7HSCech2VYWxxfTp2_qvVVjUT/view?usp=sharing" width="800px" height="2100px" /> */}
        {/* <iframe src="https://drive.google.com/file/d/1nCwnMIO7HSCech2VYWxxfTp2_qvVVjUT/preview" width="640" height="480" allow="autoplay"></iframe> */}
      </body>
    </div >
  );
}


export default App;
