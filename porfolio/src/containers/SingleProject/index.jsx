import React from "react";
import Carousels from "../../Carousels";

const SingleProject = (props) => {
  return (
    <div className="singleProject">{Carousels[props.match.params.id]}</div>
  );
};

export default SingleProject;
