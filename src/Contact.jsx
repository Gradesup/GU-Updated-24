import React , {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Paragraph from './components/Paragraph';
import Form from './components/Form';
import useWeatherData from './components/useWeatherData';
// import { useNavigate } from "react-router-dom";

const Contact = ({countryName ,dynamicCountry}) => {
  const { weather, loading } = useWeatherData();

  const formText = `Don't Hesitate, Feel Free Contact Us`;
  
  const [city, setCity] = useState('');

  useEffect(() => {
    // Retrieve the city from localStorage if available
    const storedCity = localStorage.getItem('mainBannerCity');
    if (storedCity) {
      setCity(storedCity);
    }
  }, []);

  return (
    <div className="ContactSection">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
              <h3 className="secondHeading blinker-animation">24/7 SUPPORT FOR ACADEMIC HELP</h3>
              <h2 className="mainHeading">Contact Us Today For A Free Consultation.</h2>
              <div className="mt-10">
                <Paragraph paragraph={`Look No Further For Help With Your Studies! Our Professionals Are On-Hand 24/7 To Provide You Instant Support And Assistance. If You Need Instant Support And Any Type Of Academic Help In Your Assignments, Quizzes And Many More, Dont Worry We Are Always Available For Student Academics Help, Please Use Live Chat Option To Reach Us Quickly, Our Experts Will Reply You Soon`} />
              </div>
              </Col>
          <Col md={6}>
            <Form btnText={formText} city={weather ? weather.city : ''} countryName={countryName} dynamicCountry={dynamicCountry}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
