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
          <a href="/" className="logo">
            dkostka<span className="dot-color">.</span>
          </a>
          <div className="itemContainer"></div>
        </div>

        <div className="topbar-right">
          <div className="desktop-wrap">
            <ul>
              <li>
                <a href="https://dkostka.dev/#about" className="line">
                  about
                </a>
              </li>
              <li>
                <a href="https://dkostka.dev/#portfolio" className="line">
                  portfolio
                </a>
              </li>
              <li>
                <a href="https://dkostka.dev/#contact" className="line">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span
              className="line1"
              style={{
                backgroundColor: darkMode && "#fff",
              }}
            ></span>
            <span
              className="line2"
              style={{
                backgroundColor: darkMode && "#fff",
              }}
            ></span>
            <span
              className="line3"
              style={{
                backgroundColor: darkMode && "#fff",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
