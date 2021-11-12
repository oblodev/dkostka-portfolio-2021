import React from "react";
import "./topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
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
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a href="#contact">dm</a>
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
