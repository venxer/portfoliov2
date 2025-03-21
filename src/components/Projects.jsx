import React, { useState } from "react";
import TaskBar from "./TaskBar";
import "../styles/projects.css";

import hydrant1Gif from "../assets/reCAPSOLVER/hydrant1.gif";
import hydrant2Gif from "../assets/reCAPSOLVER/hydrant2.gif";
import bikeGif from "../assets/reCAPSOLVER/bike.gif";
import crossGif from "../assets/reCAPSOLVER/cross.gif";

import goatBotSuccess from "../assets/goatBot/goatbotSuccess.png";

import stockx1 from "../assets/priceWatcher/stockx1.png";
import stockx2 from "../assets/priceWatcher/stockx2.png";
import goat1 from "../assets/priceWatcher/goat1.png";
import logs from "../assets/priceWatcher/logs.png";

const Projects = ({ theme }) => {
  const [activeSection, setActiveSection] = useState("Goat Bot");
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isWideImage, setIsWideImage] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleImageClick = (imgSrc) => {
    // Create a new image object to check dimensions
    const img = new Image();
    img.onload = () => {
      // Check if image width is greater than 1500px
      setIsWideImage(img.width > 1300);
      setEnlargedImage(imgSrc);
    };
    img.src = imgSrc;
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
    setIsWideImage(false);
  };

  const content = {
    "Goat Bot": {
      text: "I reverse-engineered GOAT's IOS app to automate purchases, outperforming about 1+ million participants and securing $20K+ in limited-edition items. Features of the bot include a scalable system with multi-account session management, real-time product monitoring, and automated captcha solving, ensuring smooth and reliable operation.",
      images: [goatBotSuccess],
    },
    "Price Watcher": {
      text: "A Discord bot that fetches market data from StockX and Alias. Data includes the lowest ask, highest bid, last sale, number of asks and bids, and last 72-hour sales. It delivers accurate statistics, handles thousands of queries seamlessly, and provides an interactive experience for 50+ active users.",
      images: [stockx1, stockx2, goat1, logs],
    },
    "ReCaptcha Solver": {
      text: "A Python script that detects and solves reCAPTCHA V2 challenges using machine learning. I trained a custom YOLOv11 model to detect and classify Google reCAPTCHA objects, boosting accuracy from 51% to 76% across different CAPTCHA types. \n\n(example shown in 2.5x speed)",
      images: [hydrant1Gif, hydrant2Gif, bikeGif, crossGif],
    },
  };

  // Determine whether to show a grid or single image
  const hasMultipleImages = content[activeSection]?.images?.length > 2;

  return (
    <div className={`projectLayout ${theme}`}>
      <TaskBar
        onSectionClick={handleSectionClick}
        theme={theme}
        activeSection={activeSection}
      />
      <div className="infoText">
        <h2>{activeSection}</h2>
        <p>{content[activeSection]?.text}</p>
      </div>
      <div className={`imageContent ${hasMultipleImages ? "gridLayout" : ""}`}>
        {content[activeSection]?.images &&
        content[activeSection].images.length > 0 ? (
          hasMultipleImages ? (
            // Grid layout for multiple images
            content[activeSection].images.map((img, index) => (
              <div className="gridItem" key={index}>
                <div className="gridItemTitle">Ex. {index + 1}</div>
                <img
                  src={img}
                  alt={`${activeSection} image ${index + 1}`}
                  className="contentImage"
                  onClick={() => handleImageClick(img)}
                />
              </div>
            ))
          ) : (
            // Single image
            <img
              src={content[activeSection].images[0]}
              alt={activeSection}
              className="contentImage"
              onClick={() => handleImageClick(content[activeSection].images[0])}
            />
          )
        ) : null}
      </div>

      {/* Image Modal */}
      {enlargedImage && (
        <div className="imageModal" onClick={handleCloseModal}>
          <div className="modalContent">
            <img
              onClick={(e) => e.stopPropagation()}
              src={enlargedImage}
              alt="Enlarged view"
              className={isWideImage ? "wideImage" : "normalImage"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
