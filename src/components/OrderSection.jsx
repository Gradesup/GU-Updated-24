import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SecondaryHeading from './SecondaryHeading';
import Paragraph from './Paragraph';
import MobileAnimation from './MobileAnimation';
import ProgressBar from './ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const OrderSection = (props) => {

  return (
    <div className="Order-Section" onClick={props.openTawkToChat}>
      <Container>
        <h3 className="mainHeading">
          How To Place Order <FontAwesomeIcon className="fa-spin" icon={faGear} />
        </h3>
        <SecondaryHeading heading={`Get the ${props.changeText} you Need Quickly and Easily with three Simple Steps!`} />
        <Paragraph paragraph={`Need to get an ${props.changeText} done? Skip the hassle with our 3-step solution! Place your order today and rest assured of quality results. Let us take care of it for you.`} />
        <Row className="align-items-center">
          <Col md={6}>
            <div className="mobileDiv text-white">
              <MobileAnimation />
            </div>
          </Col>
          <Col md={6} className="p-20-767">
            <ProgressBar />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default OrderSection;