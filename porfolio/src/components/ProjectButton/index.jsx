import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProjectButton = ({ color }) => {
  const [nameVisible, setNameVisible] = useState("none");
  const [arrowVisible, setArrowVisible] = useState("block");

  const showElements = () => {
    setNameVisible("block");
    setArrowVisible("none");
  };

  const hideElements = () => {
    setNameVisible("none");
    setArrowVisible("block");
  };

  

  return (
    <div
      onMouseLeave={hideElements}
      onMouseEnter={() => setTimeout(showElements, 250)}
      className="projectButton"
      style={{ backgroundColor: color }}
    >
      <button id="button">
        <Link to="/project" style={{ display: nameVisible }} id="projectName">
          <b>Project Name</b>
        </Link>
        <h1 style={{ display: arrowVisible }} id="arrow">
          &#10095;
        </h1>
      </button>
    </div>
  );
};

export default ProjectButton;
