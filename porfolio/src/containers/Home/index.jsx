import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useTranslation } from "react-i18next";
import city from "../../images/city_outline.png";
import "./style.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <Image /* id="city" */ src={city} width="100%" height="100%" />
          </Col>
        </Row>
        <Row /*  id="home-con" */>
          <Col>
            <div className="homeText">
              <h1>{t("home.head")}</h1>
              <p>{t("home.p1")}</p>
              <p>{t("home.p2")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
