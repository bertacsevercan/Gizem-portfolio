import React from "react";
import ProjectButton from "../../components/ProjectButton";
import * as assets from "../../assets";
import "./style.css";

const RightSider = () => {
  return (
    <div className="rightSider">
      {assets.colors.map((color, index) => (
        <ProjectButton key={index} routeId={index} color={color} />
      ))}
    </div>
  );
};

export default RightSider;
