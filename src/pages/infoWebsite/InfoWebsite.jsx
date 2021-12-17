import "./infowebsite.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function InfoWebsite({
  image,
  link,
  bigImage,
  information,
  background,
  stack,
}) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="infowebsite">
      <div className="container">
        <div className="info-img">
          <img src={image} alt="website" />
        </div>
        <div className="info">
          <div className="info-text">
            <h2>Project Background</h2>
            <p>{background}</p>
          </div>
          <div className="info-link">
            <h3>Technology stack used</h3>
            <p>{information}</p>
            <p>Front End Development</p>
            <p className="info-stack">{stack}</p>

            <a
              className="btn-info"
              href={link}
              style={{
                background: darkMode ? "#fff" : "#fff",
                color: darkMode ? "#000" : "#343a40",
              }}
            >
              Visit Website
            </a>
          </div>
        </div>
        <div className="website-image">
          <h3>Preview</h3>
          <img src={bigImage} alt="" />
        </div>
        <div className="info-contact">
          <div className="info-contact-text">
            <h2>Interested in doing a project together?</h2>
          </div>
          <div className="info-contact-btn">
            <a
              className="btn-info"
              href="/#contact"
              style={{
                background: darkMode ? "#fff" : "#fff",
                color: darkMode ? "#000" : "#343a40",
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="footer">
          <p>Created by dkostka.dev © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default InfoWebsite;
