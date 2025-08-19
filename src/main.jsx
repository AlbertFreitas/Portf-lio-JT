import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.js";
import 'remixicon/fonts/remixicon.css' // Import Remix Icon CSS (Biblioteca de Icones)//
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx"; // Import PreLoader Component (Biblioteca de Animação de Loading// 
import 'animate.css'; // Import Animate.css (Biblioteca de Animação CSS) https://animate-style.translate.goog/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc //
import { ThemeProvider } from './ThemeContext.jsx'; // 1. Importe o provedor

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <PreLoader/>
    <div className="container mx-auto px-4">
      
        <Navbar />
        <App />
        <Footer/>
      
    </div>
  </StrictMode>
);
