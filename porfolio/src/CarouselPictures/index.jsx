import React from "react";
import test from "../images/test.png";
import test2 from "../images/test2.jpeg";
import {
  p1_1,
  p1_2,
  p1_3,
  p1_4,
  p1_5,
  p1_6,
  p1_7,
  p1_8,
  p1_9,
  p1_10,
} from "../images/W_M1";

const imageLinks = [
  [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8, p1_9, p1_10],
  [test, test2, test],
  [test, test2, test],
];
const images = [
  [
    <img
      height="550px"
      className="d-block w-100"
      src={test}
      alt="First slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src={test2}
      alt="Second slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="Third slide"
    />,
  ],
  [
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="First slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="Second slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="Third slide"
    />,
  ],
  [
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="First slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="Second slide"
    />,
    <img
      height="550px"
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/flat-design-house-collection_23-2148683215.jpg"
      alt="Third slide"
    />,
  ],
];

export { imageLinks, images };
