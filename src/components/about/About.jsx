import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import about_profile from "../../assets/about_myprofile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern image" />
      </div>
      <div className="about-sections">
        <div className="about-left-img">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate Full Stack Developer skilled in React, Node.js,
              Express, and MongoDB, with expertise in building scalable,
              efficient, and user-centric web applications.
            </p>
            <p>
              I create responsive interfaces and robust server-side solutions,
              delivering clean, efficient code with a focus on seamless user
              experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "63%" }} />
            </div>

            <div className="about-skill">
              <p>Reactjs</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Express & Nod</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>Git & Github</p>
              <hr style={{ width: "65%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "55%" }} />
            </div>

            <div className="about-skill">
              <p>Deployment</p>
              <hr style={{ width: "68%" }} />
            </div>

            <div className="about-skill">
              <p>DSA in Java</p>
              <hr style={{ width: "72%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="achivements">
        <div className="about-achivement">
          <h1>Experience</h1>
          <p>Begineer</p>
        </div>
        <hr />

        <div className="about-achivement">
          <h1>5+</h1>
          <p>Full Stack Projects Completed</p>
        </div>
        <hr />

        <div className="about-achivement">
          <h1>50+</h1>
          <p>Overall Projects Done</p>
        </div>
      </div>
    </div>
  );
};

export default About;
