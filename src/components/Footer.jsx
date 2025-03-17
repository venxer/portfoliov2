import React from "react";
import "../styles/footer.css";

import linkedLogo from "../assets/linkedInLogo.svg";
import gitHubLogo from "../assets/githubLogo.svg";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <div className={`footerWrapper preventSelection ${theme}`}>
      <div className="footerTitle">
        <span>find me on:</span>
      </div>
      <div
        className="footerLinkIn cursor"
        onClick={() =>
          (window.location.href = "https://www.linkedin.com/in/zhaoedwin/")
        }
      >
        <img className="footerLogo" src={linkedLogo} alt="linkedIn_Logo" />
      </div>
      <div
        className="gitHubTitle"
        onClick={() => (window.location.href = "https://github.com/venxer")}
      >
        @venxer{" "}
        <img className="footerLogo cursor" src={gitHubLogo} alt="github_Logo" />
      </div>
      <div className="themeToggle cursor" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </div>
    </div>
  );
};

export default Footer;
