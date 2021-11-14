import "./written.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Dev from "../dev/Dev";
import { KeyboardArrowDown } from "@material-ui/icons";

function Written() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Frontend Developer",
        "Self Taught Developer",
        "Passionate Developer",
      ],
    });
  }, []);

  return (
    <div className="written-wrapper">
      <h3>
        a <span ref={textRef} className="span-text"></span>
      </h3>
    </div>
  );
}

export default Written;
