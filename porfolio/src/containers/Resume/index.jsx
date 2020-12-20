import React from "react";
import Image from "react-bootstrap/Image";
import "./style.css";

const Resume = () => {
  return (
    <div className="resume">
      <div className="timeline-wrapper">
        <div className="employment">
          <p>
            <b>Employment History</b>
          </p>
        </div>
        <div id="lineVert">
          <br />
          <br />
          <p className="milestone" />
          <p className="milestone" />
        </div>
        <div className="education">
          <p>
            <b>Education</b>
          </p>
        </div>
      </div>
      <div className="img-text-wrapper">
        <Image
          id="profilePic"
          width="30%"
          src="https://image.freepik.com/free-vector/architect-concept-illustration_114360-3042.jpg"
          thumbnail
        />
        <p>
          <b>Technical Skills</b>
        </p>
        <p>
          <b>Languages</b>
        </p>
      </div>
    </div>
  );
};

export default Resume;
