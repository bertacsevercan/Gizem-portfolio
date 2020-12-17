import React from "react";
import Carousels from "../../Carousels";
import * as assets from "../../assets";
import ProjectInfo from "../../components/ProjectInfo";
import "./style.css";

const SingleProject = (props) => {
  const ID = props.match.params.id;
  return (
    <div
      className="singleProject"
      style={{ backgroundColor: assets.colors[ID] }}
    >
      <div className="carouselWrapper">{Carousels[ID]}</div>
      <ProjectInfo projectId={ID} />
    </div>
  );
};

export default SingleProject;
