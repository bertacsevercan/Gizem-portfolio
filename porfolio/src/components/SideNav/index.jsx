import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideNav = () => {
  // const [xPosition, setX] = useState(-)

  /*   useEffect(()=> {
    setX(0);
  }, []); */

  return (
    <div className="sideNav">
      <div id="logo">
        <h1>LOGO</h1>
      </div>
      <div className="navLinks">
        <h1>TR/EN</h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} exact to="/">
              Home
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/resume">
              Resume
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/projects">
              Projects
            </NavLink>
          }
        </h1>
        <h1>
          {
            <NavLink activeStyle={{ color: "grey" }} to="/contact">
              Contact
            </NavLink>
          }
        </h1>
      </div>
    </div>
  );
};

export default SideNav;
