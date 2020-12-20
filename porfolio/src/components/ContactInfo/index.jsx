import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="contactInfo">
      <div id="location">
        <p>
          <b>{t("contact.info.heads.head0")}</b>
        </p>
        <p>{t("contact.info.text")}</p>
      </div>
      <div id="phone">
        <p>
          <b>{t("contact.info.heads.head1")}</b>
        </p>
        <p>+555-444-333</p>
      </div>
      <div id="email">
        <p>
          <b>{t("contact.info.heads.head2")}</b>
        </p>
        <p>gizem.erdurak@gmail.com</p>
      </div>
      <div id="socialMedia">
        <p>
          <b>{t("contact.info.heads.head3")}</b>
        </p>
        <p>
          <a
            id="linkIn"
            target="_blank"
            rel="noreferrer"
            title={t("contact.texts.text2")}
            href="#"
          >
            {" "}
            <FaLinkedinIn className="social-icons" />{" "}
          </a>
        </p>
        <a
          id="instagram"
          target="_blank"
          rel="noreferrer"
          title={t("contact.texts.text2")}
          href="#"
        >
          {" "}
          <FaInstagram className="social-icons" />{" "}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
