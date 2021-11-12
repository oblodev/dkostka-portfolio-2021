import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

import { KeyboardArrowDown } from "@material-ui/icons";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Self thaugt Developer", "Front End", "Content Creator"],
    });
  }, []);

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
          <h3>
            a <span ref={textRef}></span>
          </h3>
          <h4>based in Vienna, Austria</h4>
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
