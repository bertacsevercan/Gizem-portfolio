import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <h1>LOGO</h1>
      <h1>TR/EN</h1>
      <h1>{<Link to="/">Home</Link>}</h1>
      <h1>{<Link to="/resume">Resume</Link>}</h1>
      <h1>{<Link to="/projects">Projects</Link>}</h1>
      <h1>{<Link to="/contact">Contact</Link>}</h1>
    </div>
  );
};

export default SideNav;
