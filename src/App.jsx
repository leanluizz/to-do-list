//React
import React from "react";
import { useState } from "react";

// Style
import './App.css';
import '../src/styles/animates.css';
import '../src/styles/tags.css';

//PDF JS
import jsPDF from "jspdf";

//Components
import Home from '../src/Home';
import Criar from '../src/components/Principal/criarListas';

//Animate
import 'animate.css';

//UI
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar" element={<Criar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
