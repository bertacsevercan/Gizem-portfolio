import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaInstagram, FaLevelDownAlt } from "react-icons/fa";
import "./style.css";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contactInfo">
      <h1>
        {t("contact.titles.title1")}
        <FaLevelDownAlt />
      </h1>
      <div className="contactInfo-wrapper">
        <div id="location">
          <p>
            <b>{t("contact.info.heads.head0")}</b>
          </p>
          <p>{t("contact.info.texts.text0")}</p>
        </div>
        <div id="email">
          <p>
            <b>{t("contact.info.heads.head2")}</b>
          </p>
          <p>gizem.erdurak@outlook.com</p>
        </div>
        <div id="socialMedia">
          <p>
            <b>{t("contact.info.heads.head3")}</b>
          </p>
          <a
            id="linkIn"
            target="_blank"
            rel="noreferrer"
            title={t("contact.info.texts.text1")}
            href="http://www.linkedin.com/in/gizemerdurak"
          >
            {" "}
            <FaLinkedinIn className="social-icons" />{" "}
          </a>
          &ensp;
          <a
            id="instagram"
            target="_blank"
            rel="noreferrer"
            title={t("contact.info.texts.text2")}
            href="https://www.instagram.com/ge_architect_engineer"
          >
            {" "}
            <FaInstagram className="social-icons" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
