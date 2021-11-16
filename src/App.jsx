import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import "./app.scss";
import { useState, useContext } from "react";
import Menu from "./components/menu/Menu";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="app"
      style={{
        background: darkMode ? "#222" : "#fff",
        color: darkMode ? "#f1f1f1" : "#343a40",
      }}
    >
      <Toggle />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
