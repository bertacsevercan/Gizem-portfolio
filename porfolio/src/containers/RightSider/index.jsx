import React from "react";
import ProjectButton from "../../components/ProjectButton";
import "./style.css";

const colors = [];
for (let i = 0; i < 10; i++) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = "#" + randomColor;
  colors.push(color);
}

const RightSider = () => {
  return (
    <div className="rightSider">
      {colors.map((color) => (
        <ProjectButton color={color} />
      ))}
    </div>
  );
};

export default RightSider;
