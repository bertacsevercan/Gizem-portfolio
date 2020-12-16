import React from "react";
import Carousels from "../../Carousels";
import * as assets from "../../assets";
import "./style.css";

const SingleProject = (props) => {
  return (
    <div
      className="singleProject"
      style={{ backgroundColor: assets.colors[props.match.params.id] }}
    >
      <div className="carouselWrapper">{Carousels[props.match.params.id]}</div>
    </div>
  );
};

export default SingleProject;
