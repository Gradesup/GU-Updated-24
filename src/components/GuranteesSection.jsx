// GuranteesSection.js
import React from 'react';
import MainHeading from './MainHeading';
import { Container } from 'react-bootstrap';
import SecondaryHeading from './SecondaryHeading';
import Paragraph from './Paragraph';
import GuranteesBox from './GuranteesBox';
import NavbarBtn from './NavbarBtn';

const GuranteesSection = ({ city , openTawkToChat , changeText }) => {
  const firstHeading = {
    fontSize: '35px',
    fontWeight: '800',
    textAlign: 'center',
  };

  const secondHeading = {
    fontSize: '26px',
    fontWeight: '600',
    textAlign: 'center',
  };

  return (
    <div className="Gurantees-Section text-white" onClick={openTawkToChat}>
      <Container>
        <MainHeading text={'Our Gurantees'} style={firstHeading} />
        <SecondaryHeading heading={<>Unlock More Free Time And Better Grades With Gradesup<sup>®</sup></>} style={secondHeading} />
        <Paragraph paragraph={<>Trustworthy and reliable – that’s what Gradesup.org<sup>®</sup> stands for! We pride ourselves on providing top-notch work coupled with maximum customer satisfaction, so there's no need to look further - you're at the right place!</>} />
        <GuranteesBox city={city} changeText={changeText}  />
        <div className="navbarBtn mt-4 justify-content-center">
              <NavbarBtn
                className="whatsappBtn cresdo-animation fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                btnText="Submit Your Requirements"
                btnLink={`/order-form`}
                icon="fa fa-shopping-cart"
              />
            </div>
      </Container>
    </div>
  );
};

export default GuranteesSection;
