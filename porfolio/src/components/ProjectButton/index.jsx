import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import "./style.css";

const ProjectButton = ({ routeId, color }) => {
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
      onMouseLeave={() => setTimeout(hideElements, 250)}
      onMouseEnter={() => setTimeout(showElements, 250)}
      className="projectButton"
      style={{ backgroundColor: color }}
    >
      <button id="button">
        <a
          href={"/project/" + routeId}
          style={{ display: nameVisible }}
          id="projectName"
        >
          <b>Project Name</b>
        </a>
        <h1 style={{ display: arrowVisible }} id="arrow">
          &#10095;
        </h1>
      </button>
    </div>
  );
};

export default ProjectButton;
