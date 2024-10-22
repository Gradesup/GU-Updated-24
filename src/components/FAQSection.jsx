import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeading from "./MainHeading";
import FAQDiv from "./FAQDiv";
import NavbarBtn from "./NavbarBtn";
import chatExpert from '../assets/images/gifs/chatexpert.png';

const FAQSection = ({whatsappNumber , openTawkToChat , changeText}) => {
  const firstHeadingStyle = {
    color: "#000",
    textAlign: "center",
    fontWeight: "800",
  };

const faqImgWebp = "https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/b9def988-18f6-486a-bd78-364c98b96500/compress";

  return (

    <div className="FAQ-Section">
      <div>
      </div>

      <Container>
        <MainHeading text="Students FAQ" style={firstHeadingStyle} />
        <Row className="align-items-center">
          <Col md={6}>
            <div className="About-Img text-center mt-5">
        <img src={faqImgWebp} alt={`${changeText}`} width="70%" />
            </div>
            <div className="navbarBtn mt-4 flex-wrap-991">
              <NavbarBtn 
              className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn w-100" btnText="WhatsApp Now" 
              icon="fa fa-whatsapp" 
              btnLink = {`https://wa.me/${whatsappNumber}`}
              />
              <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat}>
                <img loading='lazy' src={chatExpert} alt="" />
                <a>Chat With Expert</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="mt-30-767">
            <FAQDiv changeText={changeText} />
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default FAQSection;