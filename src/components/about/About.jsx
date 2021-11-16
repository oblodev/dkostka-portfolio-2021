import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="wrap">
        <h2>
          <span className="back">about</span>
        </h2>
        <p className="about-msg">If you’re wondering who I am…</p>
        <div className="about-info">
          <div className="about-info-wrapper">
            <div className="about-info-text">
              <h3>
                I'm <span className="border">Dawid Kostka</span>
              </h3>
              <p>
                a self-taught <span className="sm-back">Frontend</span>{" "}
                developer with a passion for{" "}
                <span className="sm-back">web design</span>. I enjoy developing
                simple, clean and slick websites that provide real value to the
                end user. The best way to learn is to practice, I did a bunch of{" "}
                personal projects with the{" "}
                <span className="sm-back">knowledge</span> I gathered from
                courses and books, you can check them on my{" "}
                <span>
                  <a href="#portfolio">portfolio</a>
                </span>
                .
              </p>
              <p>
                I always want to learn more, do more, and be more. I’m also a
                firm believer that we should never settle.
              </p>
            </div>
          </div>
        </div>
        <div className="about-links"></div>
        <h2>
          <span className="back">skills</span>
        </h2>
        <p className="about-msg">My current stack of technologies</p>
        <div className="skills">
          <div className="skills-wrapper">
            <div className="skills-left">
              <div className="skills-border">
                <div className="skills-item">
                  <img src="images/htmll.png" alt="" className="skills-img" />
                  <p>HTML</p>
                </div>
                <div className="skills-item">
                  <img src="images/css.png" alt="" className="skills-img" />
                  <p>CSS</p>
                </div>
                <div className="skills-item">
                  <img
                    src="images/javascriptt.png"
                    alt=""
                    className="skills-img"
                  />
                  <p>JAVASCRIPT</p>
                </div>
                <div className="skills-item">
                  <img src="images/react.png" alt="" className="skills-img" />
                  <p>REACT</p>
                </div>
              </div>
            </div>
            <div className="skills-right">
              <div className="skills-border">
                <div className="skills-item">
                  <img src="images/python.png" alt="" className="skills-img" />
                  <p>PYTHON</p>
                </div>
                <div className="skills-item">
                  <img
                    src="images/django-logo.png"
                    alt=""
                    className="skills-img"
                  />
                  <p>DJANGO</p>
                </div>
                <div className="skills-item">
                  <img src="images/flask.png" alt="" className="skills-img" />
                  <p>FLASK</p>
                </div>
                <div className="skills-item">
                  <img
                    src="images/Wordpress-logo.png"
                    alt=""
                    className="skills-img"
                  />
                  <p>WORDPRESS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="y-bottom"></div>
    </div>
  );
}

export default About;
