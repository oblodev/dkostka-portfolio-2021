import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;