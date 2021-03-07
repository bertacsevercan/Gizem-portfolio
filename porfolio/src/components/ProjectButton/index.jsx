import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

const ProjectButton = ({ routeId, color }) => {
  const { t } = useTranslation();
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
      onMouseLeave={() => setTimeout(hideElements, 300)}
      onMouseEnter={() => setTimeout(showElements, 300)}
      className="projectButton"
      style={{ backgroundColor: color }}
    >
      <button id="button">
        <a
          href={"/project/" + routeId}
          style={{ display: nameVisible }}
          id="projectName"
        >
          <b>{routeId < 14 ? t(`projects.heads.${routeId}`) : null}</b>
        </a>
        <h3 style={{ display: arrowVisible }} id="arrow">
          &#10095;
        </h3>
      </button>
    </div>
  );
};

export default ProjectButton;
