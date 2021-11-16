import { ThemeContext } from "../../context";
import { useContext } from "react";
import "./toggle.scss";

function Toggle() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src="images/sun.png" alt="" className="t-icon" />
      <img src="images/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
