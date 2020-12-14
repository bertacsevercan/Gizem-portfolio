import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SideNav = ({ setMainWidth }) => {
  const [navWidth, setNavWidth] = useState("20%");

  const toggleNav = () => {
    if (navWidth === 0) {
      setNavWidth("20%");
      setMainWidth("60%");
    } else {
      setNavWidth(0);
      setMainWidth("80%");
    }
  };

  return (
    <div className="sideNav" style={{ width: navWidth }}>
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
      <button id="navToggler" onClick={toggleNav} />
    </div>
  );
};

export default SideNav;
