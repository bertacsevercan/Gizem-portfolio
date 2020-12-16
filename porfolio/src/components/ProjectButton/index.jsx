import React, { useState } from "react";
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
      onMouseEnter={showElements}
      className="projectButton"
      style={{ backgroundColor: color }}
    >
      <button id="button">
        <p style={{ display: nameVisible }} id="projectName">
          Project Name
        </p>
        <h1 style={{ display: arrowVisible }} id="arrow">
          &#10095;
        </h1>
      </button>
    </div>
  );
};

export default ProjectButton;
