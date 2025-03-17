import React from "react";
import "../styles/intro.css";
import me from "../assets/testing.jpeg";

const Intro = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="homeContainer">
      <div className="leftContainer">
        <div className="introBegin">Hello, I'm</div>
        <div className="introName">Edwin</div>
        <div className="introSubtitle">&gt; A software engineer</div>
        <p className="introDescription">
          THIS IS A WORK IN PROGRESS AS OF {month}/{day}/{year}
        </p>
        <p>
          Header over to <a href="./projects">my projects</a>
        </p>
      </div>
      <div className="rightContainer">
        <img src={"https://example.com/image.jpg"} alt="Example Image Here" />
        {/* <img
          src="https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/464178076_1103799795088323_6344027526282916894_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=103&_nc_ohc=zElDX9BWtZkQ7kNvgHOPgy0&_nc_gid=2f4e55327b254802ad79d328f416a4a4&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ4NTA5NjEwNDMxNTA5ODM0OA%3D%3D.3-ccb7-5&oh=00_AYAlDXB4PFa_7gflkEuuAbtCkppz6SAd-Z7sCxil-YeEIw&oe=673DE68F&_nc_sid=7a9f4b"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Intro;
