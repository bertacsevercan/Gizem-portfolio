import React from "react";
import Image from "react-bootstrap/Image";
import { useTranslation } from "react-i18next";
import "./style.css";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume">
      <div className="timeline-wrapper">
        <div className="employment">
          <p>
            <b>{t("resume.heads.head0")}</b>
          </p>
        </div>
        <div id="lineVert">
          <br />
          <br />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
          <p className="milestone" />
        </div>
        <div className="education">
          <p>
            <b>{t("resume.heads.head1")}</b>
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
          <b>{t("resume.heads.head2")}</b>
        </p>
        <p>
          <b>{t("resume.heads.head3")}</b>
        </p>
      </div>
    </div>
  );
};

export default Resume;
