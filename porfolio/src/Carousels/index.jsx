import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselPictures from "../CarouselPictures";

const carousels = [
  <Carousel>
    {CarouselPictures.map((carousel) =>
      carousel.map((asset, index) => (
        <Carousel.Item key={index}>{asset}</Carousel.Item>
      ))
    )}
  </Carousel>,
];

export default carousels;
