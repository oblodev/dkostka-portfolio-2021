import "./intro.scss";

import Dev from "../dev/Dev";
import { KeyboardArrowDown } from "@material-ui/icons";

function Intro() {
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
            <a href="#about">
              <span>about</span>
            </a>
            <a href="#portfolio">
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
    </div>
  );
}

export default Intro;
