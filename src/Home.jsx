//React
import React from "react";
import { useState } from "react";

// Style
import './App.css';
import '../src/styles/animates.css';
import '../src/styles/tags.css';

//PDF JS
import PDF from "jspdf";
import jsPDF from "jspdf";

//Components
import Header from "./components/Header/header";
import Main from "./components/Main/main";

//Animate
import 'animate.css';

//UI
import 'bootstrap/dist/css/bootstrap.min.css';


// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Footer
import Footer from './components/Footer/footer';

function App (){


return(
<>
<Header />
<Main />
<Footer/>
</>
)
}
export default App;
