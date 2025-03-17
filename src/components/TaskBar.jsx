import React from "react";
import "../styles/taskBar.css";

const TaskBar = ({ onSectionClick, theme, activeSection }) => {
  return (
    <div className={`taskBar ${theme}`}>
      <div className="taskBarSection">
        <div className="taskBarHeader">What I've Made</div>
        <ul className="taskBarList">
          <li
            className={activeSection === "Goat Bot" ? "active" : ""}
            onClick={() => onSectionClick("Goat Bot")}
          >
            Goat Bot
          </li>
          <li
            className={activeSection === "Price Watcher" ? "active" : ""}
            onClick={() => onSectionClick("Price Watcher")}
          >
            Price Watcher
          </li>
          <li
            className={activeSection === "ReCaptcha Solver" ? "active" : ""}
            onClick={() => onSectionClick("ReCaptcha Solver")}
          >
            ReCaptcha Solver
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskBar;
