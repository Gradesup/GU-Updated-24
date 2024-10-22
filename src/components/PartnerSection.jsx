import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainHeading from "./MainHeading";
import ImageMarquee from "./ImageMarquee";
import partner1 from "../assets/images/slider-images/amazon.png";
import partner2 from "../assets/images/slider-images/chegg.png";
import partner3 from "../assets/images/slider-images/coursera.png";
import partner4 from "../assets/images/slider-images/dmca.jpg";
import partner5 from "../assets/images/slider-images/googlec.png";
import partner6 from "../assets/images/slider-images/grammly.png";
import partner7 from "../assets/images/slider-images/pci-dss.png";
import partner8 from "../assets/images/slider-images/reseller-pilot.png";
import partner9 from "../assets/images/slider-images/sitejabber.png";
import partner10 from "../assets/images/slider-images/trust-pilot.png";
import partner11 from "../assets/images/slider-images/udemy.png";

const PartnerSection = ({changeText}) => {
  const firstHeadingStyle = {
    color: "#000",
    textAlign: "center",
  };

  const slideItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const images = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
  ];

  return (
    <div className="Partner-Section"  >
      <Container>
        <div id='OrderSection'></div>
        <div className="Partner-Slider">
          <Row className="align-items-center">
            <Col md={3}>
              <MainHeading text="Partners" style={firstHeadingStyle} />
            </Col>
            <Col md={9}>
              <ImageMarquee items={slideItems} images={images} changeText={changeText} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PartnerSection;