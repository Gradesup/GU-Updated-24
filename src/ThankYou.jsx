import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Paragraph from './components/Paragraph';
import NavbarBtn from './components/NavbarBtn';
import chatExpert from './assets/images/gifs/chatexpert.png';
import thankyouImg from './assets/images/thankyou_student-img.png';
import { Helmet } from 'react-helmet';

const ThankYou = ({whatsappNumber , openTawkToChat}) => {
  return (
    <div className="ThankYou">
      <Helmet>
       {/* Event snippet for GradesUp DLF conversion page  */}
<script>
  {`gtag('event', 'conversion', {'send_to': 'AW-10784786291/plwACJ-7s-EYEPOOy5Yo'});`}
</script>
      </Helmet>
<div className="mainAboutSection">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h3 className="secondHeading blinker-animation">Gradesup.org<sup>®</sup> OFFICIAL</h3>
                <h2 className="mainHeading mt-20">  Thank You For Reaching Out To Us ❤</h2>
                <Paragraph paragraph={<>
                    <br />
                    We Appreciate Your Interest In Our Services. Our Team Of Experts Is Dedicated To Providing The Best Possible Experience To Our Valued Students.
                    <br /><br />

We Believe That Our Success Is Directly Tied To The Success Of Students. That's Why We Go Above And Beyond To Ensure That Every Task We Undertake Is Completed On Time, Within Transparent Budget, And To The Highest Possible Standard.
                </>} />
                <div className="navbarBtn mt-4">
                  <NavbarBtn
                    className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn w-100"
                    btnText="Chat on WhatsApp"
                    icon="fa fa-whatsapp"
                    btnLink={`https://wa.me/${whatsappNumber}`}
                    style={{ width: '200px', height: '40px' }}
                  />
                <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat}>
                  <img loading="lazy" src={chatExpert} alt="" />
                  <a>Consult with Expert</a>
                </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="About-Img text-center mt-5">
                  <img src={thankyouImg} width="90%" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default ThankYou