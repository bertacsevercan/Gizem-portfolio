import React from "react";
import * as assets from "../../assets";
import ProjectInfo from "../../components/ProjectInfo";
import ProjectCarousel from "../../components/ProjectCarousel";
import "./style.css";

const SingleProject = (props) => {
  const ID = props.match.params.id;
  return (
    <div
      className="singleProject"
      style={{ backgroundColor: assets.colors[ID] }}
    >
      <ProjectCarousel projectId={ID} />
      <ProjectInfo projectId={ID} />
    </div>
  );
};

export default SingleProject;
