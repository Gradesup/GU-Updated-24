// AboutSection.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SecondaryHeading from './SecondaryHeading';
import MainHeading from './MainHeading';
import Paragraph from './Paragraph';
import NavbarBtn from './NavbarBtn';
import BulletPoint from './BulletPoint';
import chatExpert from '../assets/images/gifs/chatexpert.png';

const AboutSection = ({ aboutPara, aboutHeading, aboutPara2, openTawkToChat , city , changeText }) => {
  const firstHeadingStyle = {
    color: '#000',
    fontFamily: 'Kanit',
  };

  const secondHeadingStyle = {
    color: '#000',
    fontSize: '24px',
    marginTop: '10px',
  };

  const thirdHeadingStyle = {
    color: '#000',
    fontSize: '20px',
    fontWeight: '500',
    marginTop: '10px',
  };

  const features = React.useMemo(
    () => [
      'Bibliography',
      'Title Page',
      'Outline',
      'Formatting',
      'Plagiarism Report',
      'Limitless Amendments',
    ],
    []
  );

const aboutImgWebp =  'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/2216caff-b0c0-428a-ef5e-28f2f0173200/compress';

  return (
    <>
    <div className="About-Section">
      <Container>
        <Row>
          <Col md={6}>
            <SecondaryHeading heading={<>- WHY Gradesup<sup>®</sup></>} style={firstHeadingStyle} />
            <MainHeading text={aboutHeading} style={secondHeadingStyle} />
            <Paragraph
              paragraph={aboutPara}
            />
            <div className="navbarBtn mt-4">
              <NavbarBtn
                className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn w-100"
                btnText="Get A Quote"
                btnLink={`/order-form`}
                icon="fa fa-shopping-cart"
                style={{ width: '200px', height: '40px' }} // Specify button dimensions
              />
              <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat} >
                <img loading="lazy" src={chatExpert} alt={`${changeText}`} />
                <a>Get Expert Advice</a>
              </div>
            </div>
            <SecondaryHeading heading="Free features Include" style={thirdHeadingStyle} />
            <div className="features mt-3">
              {features.map((item, index) => (
                <MemoizedBulletPoint key={index} bulletpoint={item} />
              ))}
            </div>
            <div className="second-para">
            <Paragraph
              paragraph={aboutPara2} city={city}
            />
              </div>
          </Col>
          <Col md={6}>
            <div className="About-Img text-center mt-5">
        <img src={aboutImgWebp} alt={`${changeText}`}/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

const MemoizedBulletPoint = React.memo(BulletPoint);

export default AboutSection;
