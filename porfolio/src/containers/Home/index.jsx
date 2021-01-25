import React from "react";
import Image from "react-bootstrap/Image";
import { useTranslation } from "react-i18next";
import "./style.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Image
        width="50%"
        src="https://image.freepik.com/free-vector/architect-concept-illustration_114360-3042.jpg"
        roundedCircle
      />
      <div className="homeText">
        <h1>{t("home.head")}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          quis numquam consequuntur nobis quos fuga eius incidunt adipisci ea,
          vero officiis soluta, similique odio molestiae corporis iusto optio
          cum accusantium?
        </p>
      </div>
    </div>
  );
};

export default Home;
