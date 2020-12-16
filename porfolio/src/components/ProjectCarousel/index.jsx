import React from "react";
import Carousel from "react-bootstrap/Carousel";
import images from "./assets";
import "./style.css";

const ProjectCarousel = () => {
  //map this!
  const assetObjList = [];
  for (let i = 0; i < images.project0.length; i++) {
    assetObjList.push({
      img: images.project0[i],
    });
  }

  return (
    <div className="projectCarousel">
      <Carousel>
        {images.project0.map((asset, index) => (
          <Carousel.Item key={index}>{asset}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
