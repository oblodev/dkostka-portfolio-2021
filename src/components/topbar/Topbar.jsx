import React from "react";
import "./topbar.scss";
import { ThemeContext } from "../../context";
import { useContext } from "react";

function Topbar({ menuOpen, setMenuOpen }) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="topbar-left">
          <a href="#intro" className="logo">
            dkostka<span className="dot-color">.</span>
          </a>
          <div className="itemContainer"></div>
        </div>

        <div className="topbar-right">
          <div className="desktop-wrap">
            <ul>
              <li
                style={{
                  color: darkMode ? "#f1f1f1" : "#343a40",
                }}
              >
                <a href="#about" className="sm-back">
                  about
                </a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#contact" className="sm-back">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
