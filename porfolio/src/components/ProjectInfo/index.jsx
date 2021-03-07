import React from "react";
import { useTranslation } from "react-i18next";

const ProjectInfo = ({ projectId }) => {
  const {t} = useTranslation();

  return (
    <div className="projectInfo">
      <h4>{t(`projects.heads.${projectId}`)}</h4>
      <p>{t(`projects.texts.${projectId}`)}</p>
      <b></b>
    </div>
  );
};

export default ProjectInfo;
