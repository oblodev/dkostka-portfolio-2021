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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DtDental from "./pages/DtDental";
import Asanoha from "./pages/Asanoha";
import CryptoConv from "./pages/CryptoConv";
import CryptoPrice from "./pages/CryptoPrice";
import Cbdelo from "./pages/Cbdelo";
import OldPortfolio from "./pages/OldPortfolio";
import KryptoKurs from "./pages/KryptoKurs";
import Sucursus from "./pages/Sucursus";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Router>
      <div
        className="app"
        style={{
          background: darkMode ? "#222831" : "#fff",
          color: darkMode ? "#f1f1f1" : "#343a40",
        }}
      >
        <Toggle />
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Intro />
                  <About />
                  <Portfolio />
                  <Contact />
                </>
              }
            />

            <Route path="/dt-dental" element={<DtDental />} />
            <Route path="/asanoha" element={<Asanoha />} />
            <Route path="/cryconcal" element={<CryptoConv />} />
            <Route path="/kryptokurs" element={<KryptoKurs />} />
            <Route path="/cryptoprice" element={<CryptoPrice />} />
            <Route path="/cbdelo" element={<Cbdelo />} />
            <Route path="/oldportfolio" element={<OldPortfolio />} />
            <Route path="/sucursus" element={<Sucursus />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
