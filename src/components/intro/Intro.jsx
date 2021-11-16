import "./intro.scss";

import Dev from "../dev/Dev";
import { KeyboardArrowDown } from "@material-ui/icons";
import { useContext } from "react";
import { ThemeContext } from "../../context.js";

function Intro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro" id="intro">
      <div className="intro-left">
        <div className="imgContainer">
          <div className="imgWrapper">
            <img src="images/dawid.jpg" alt="" className="cover" />
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="wrapper">
          <h2>Hey, I'm Dawid ✌🏼</h2>
          <Dev />
          <h4>
            based in <span className="sm-back">Vienna,</span> Austria
          </h4>
          <div className="btn-wrapper">
            <a
              href="#about"
              style={{
                border: darkMode && "1px solid #fff",
                color: darkMode && "#fff",
              }}
            >
              <span>about</span>
            </a>
            <a
              href="#portfolio"
              style={{
                border: darkMode && "1px solid #fff",
                color: darkMode && "#fff",
              }}
            >
              <span>portfolio</span>
            </a>
          </div>
          <div className="arrow-wrapper">
            <a href="#portfolio">
              <KeyboardArrowDown className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="y-bottom"></div>
    </div>
  );
}

export default Intro;
