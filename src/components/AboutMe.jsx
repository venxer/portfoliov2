import React from "react";
import "../styles/aboutMe.css";

const AboutMe = ({ theme }) => {
  return (
    <div className={`aboutMeLayout ${theme}`}>
      <p>
        Hi! I'm Edwin. I like to build and learn new things! <br /> <br />
        Check out what I've built <a href="/projects">here</a>!
      </p>
    </div>
  );
};

export default AboutMe;
