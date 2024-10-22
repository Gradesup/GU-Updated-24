import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import NavbarBtn from './NavbarBtn';
import chatExpert from '../assets/images/gifs/chatexpert.png';

const PaymentSection = ({whatsappNumber , openTawkToChat , changeText}) => {
  const firstHeadingStyle = {
    fontSize: "26px",
    textAlign: "left",
  };

  const paraStyle = {
    color: '#fff'
  };

const cardImg = "https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/1cb30f5d-c669-4d87-315d-50670470c800/compress";


  return (
    <div className="Payment-Section">
      <Container>
        <Row>
          <Col md={6}>
            <MainHeading text="Our Flexible Payment Methods" style={firstHeadingStyle} />
            <Paragraph
              paragraph={<>Get a personalized price estimate for your task in seconds! No hidden fees here - the Gradesup.org<sup>®</sup> platform fee (11%) is already included, so you only pay according to the time we spend on resolving it. Tell us more about what help you need and let's get started right away!</>}
              style={paraStyle}
            />
            <div className="navbarBtn mt-4">
              <NavbarBtn 
              className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn w-100" btnText="WhatsApp Now" 
              icon="fa fa-whatsapp" 
              btnLink = {`https://wa.me/${whatsappNumber}`}
              />
              <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat}>
                <img loading='lazy' src={chatExpert} alt="" />
                <a>Consult with Expert</a>
              </div>
            </div>
          </Col>
          <Col md={6} className='d-flex align-items-center justify-content-center'>
            <img loading="lazy" src={cardImg} style={{ width: '60%' }} alt={`${changeText}`} className="card-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentSection;