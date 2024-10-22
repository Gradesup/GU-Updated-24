import React from 'react'
import MainHeading from './MainHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'; 
import TestimonialsSlider from './TestimonialsSlider';
import { Container } from 'react-bootstrap';

const TestimonialsSection = ({ changeText }) => {

                    const firstHeading = {
                                        fontSize: '35px',
                                        fontWeight: '800', 
                                        textAlign:'center',
                                      };

  return (
                    <div className="Testimonials-Section text-white">
                                        <Container>
                                        <MainHeading text={'Our Testmonials'} style={firstHeading}/>
                                        <h3 className="secondaryHeading text-center fw-600 fs-22" style={{fontSize:'28px',fontWeight:'800',}}>See What Our Clients Says   <FontAwesomeIcon icon={faQuoteLeft} /> </h3>
                                        <TestimonialsSlider  changeText={changeText} />
                                        </Container>
                    </div>

  )
}

export default TestimonialsSection