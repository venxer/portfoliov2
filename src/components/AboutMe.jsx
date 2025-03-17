import React, { useState } from "react";
import TaskBar from "./TaskBar";
import "../styles/aboutMe.css";

const AboutMe = ({ theme }) => {
  const [activeSection, setActiveSection] = useState("bio");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // const content = {
  //   bio: {
  //     text: "Hello! I am a passionate software engineer with 5 years of experience in web development.",
  //     image: "https://via.placeholder.com/300?text=Bio+Image",
  //   },
  //   interests: {
  //     text: "I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers.",
  //     image: "https://via.placeholder.com/300?text=Interests+Image",
  //   },
  //   "high-school": {
  //     text: "I graduated with honors in Computer Science and Mathematics.",
  //     image: "https://via.placeholder.com/300?text=High+School+Image",
  //   },
  //   university: {
  //     text: "I earned a degree in Software Engineering and contributed to multiple academic projects.",
  //     image: "https://via.placeholder.com/300?text=University+Image",
  //   },
  //   email: {
  //     text: "Contact me at user@gmail.com",
  //     image: "https://via.placeholder.com/300?text=Email+Image",
  //   },
  //   phone: {
  //     text: "Reach me at +3598246359",
  //     image: "https://via.placeholder.com/300?text=Phone+Image",
  //   },
  // };

  return (
    <div className={`aboutMeLayout ${theme}`}>
      {/* <TaskBar onSectionClick={handleSectionClick} theme={theme} />
      <div className="infoText">
        <h2>{activeSection.replace("-", " ")}</h2>
        <p>{content[activeSection]?.text}</p>
      </div>
      <div className="imageContent">
        <img
          src={content[activeSection]?.image}
          alt={activeSection}
          className="contentImage"
        />
      </div> */}
    </div>
  );
};

export default AboutMe;
