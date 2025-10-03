import React from "react";
import "./Hero.css";
import profileImg from "../../assets/mohan_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profileImg} alt="profile image" />
      <h1>
        <span>I'm Manimohan Mistry,</span> Software Engineer
      </h1>
      <p>
        I am a passionate Full Stack Developer (Fresher) skilled in React,
        Node.js, Express, and MongoDB, Backend API's ... etc.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a className="hero-resume-acher" href="https://www.dropbox.com/preview/My%20Resume.pdf?context=content_suggestions&role=personal">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
