import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselPictures from "../CarouselPictures";

const carousels = [
  <Carousel>
    {CarouselPictures.project0.map((asset, index) => (
      <Carousel.Item key={index}>{asset}</Carousel.Item>
    ))}
  </Carousel>,
  <Carousel>
    {CarouselPictures.project1.map((asset, index) => (
      <Carousel.Item key={index}>{asset}</Carousel.Item>
    ))}
  </Carousel>,
];

export default carousels;
