import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { MdLanguage } from "react-icons/md";
import logoGe from "../../images/logoGe.png";
import Image from "react-bootstrap/Image";
import "./style.css";

const SideNav = ({ setMainWidth }) => {
  const { t } = useTranslation();
  const [navWidth, setNavWidth] = useState("20%");
  const [language, setLanguage] = useState("");
  // const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    if (navWidth === 0) {
      setNavWidth("20%");
      setMainWidth("60%");
    } else {
      setNavWidth(0);
      setMainWidth("80%");
    }
  };

  const changeLanguage = () => {
    if (i18next.language === "en") {
      i18next.changeLanguage("tr");
      setLanguage("EN");
    } else {
      i18next.changeLanguage("en");
      setLanguage("TR");
    }
  };

  return (
    <div className="sideNav" style={{ width: navWidth }}>
      <div className="buttonLogo">
        <button id="navToggler" onClick={toggleNav}>
          &#9776;
        </button>
        <div id="logo">
          <NavLink exact to="/">
            <Image src={logoGe} height="100px" className="w-15" alt="logo" />
          </NavLink>
        </div>
      </div>
      <div className="navLinks">
        <button title={language} onClick={changeLanguage} id="worldButton">
          <h4>{<MdLanguage />}</h4>
        </button>
        <h4>
          {
            <NavLink activeStyle={{ color: "wheat" }} exact to="/">
              {t("home.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "wheat" }} to="/resume">
              {t("resume.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "wheat" }} to="/projects">
              {t("projects.title")}
            </NavLink>
          }
        </h4>
        <h4>
          {
            <NavLink activeStyle={{ color: "wheat" }} to="/contact">
              {t("contact.title")}
            </NavLink>
          }
        </h4>
      </div>
    </div>
  );
};

export default SideNav;

/*
<NavDropdown
              title={<MdLanguage style={{ transform: "scale(1.5)" }} />}
              drop="left"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                id="tr"
                onClick={() => {
                  i18next.changeLanguage("tr");
                  setExpanded(false);
                }}
                href="#action/3.1"
              >
                {t("navbar.languages.tr")}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                id="en"
                onClick={() => {
                  i18next.changeLanguage("en");
                  setExpanded(false);
                }}
                href="#action/3.2"
              >
                {t("navbar.languages.en")}
              </NavDropdown.Item>
            </NavDropdown>
            */
