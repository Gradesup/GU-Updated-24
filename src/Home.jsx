// Home.jsx
import React, { useState, useEffect } from 'react';
import SliderSection from './components/SliderSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SubjectsSection from './components/SubjectsSection';
import PartnerSection from './components/PartnerSection';
import OrderSection from './components/OrderSection';
import PaymentSection from './components/PaymentSection';
import GuranteesSection from './components/GuranteesSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import MainBanner from './components/MainBanner';
import City from './components/City';
import { useNavigate } from "react-router-dom";
import rating from './assets/images/rating.png'
import maleStudent from "./assets/images/male-stud.png";
import femaleStudent from "./assets/images/female-student-grade.png";
import openTawkToChat from './components/openTawkToChat';

const Home = ({ changeText = 'Tutoring Help', whatsappNumber, bannerLoaded, countryName, dynamicCountry }) => {
  const [city, setCity] = useState('');

  const aboutPara = <>Are you seeking a reliable and trusted place for online {changeText} in {localStorage.getItem('city')}? Look no further than Gradesup.org<sup>®</sup>! With 10 years of experience, we have become the go-to source for students who need guidance with their studies - giving them tailored support to succeed.</>;

  const aboutHeading = <>Get Academic Excellence With Gradesup<sup>®</sup></>;

  const formText = `${city} Biggest Discount`;

  useEffect(() => {
    // Retrieve the city from localStorage if available
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setCity(storedCity);
    }
  }, []);



  const navigate = useNavigate(); // Use the useNavigate hook for programmatic navigation

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // If the form submission is successful, redirect to the thank you page
    // Replace "/thankyou" with the route to your thank you page
    navigate(`${dynamicCountry}/thankyou`);
  };

  // User Reviews


  const [areReviewsVisible, setReviewsVisibility] = useState(true);
  const closeReview = () => {
    setReviewsVisibility(false);
  };

  const reviewsData = [
    {
      id: 1,
      name: 'John Doe',
      firstMessage: (
        <>
          Student of King College <br /> London
        </>
      ),
      secondMessage: (
        <>
          Got 90% Marks in Their <br />Last Semester Project
        </>
      ),
      img: femaleStudent,
    },
    {
      id: 2,
      name: 'Jane Smith',
      firstMessage: (
        <>
          Student Of University  <br />of Bolton
        </>
      ),
      secondMessage: (
        <>
          Got 90% Marks in Their <br />Last Semester Project
        </>
      ),
      img: maleStudent,
    },
    // Add more review objects if needed
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const rotateReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(rotateReview, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <City />
      <MainBanner changeText={changeText} bannerLoaded={bannerLoaded} formText={formText} onSubmit={handleFormSubmit} openTawkToChat={openTawkToChat} countryName={countryName} dynamicCountry={dynamicCountry} />
      <SliderSection countryName={countryName} changeText={changeText} openTawkToChat={openTawkToChat} />
      <AboutSection city={city} changeText={changeText} aboutPara={aboutPara} aboutHeading={aboutHeading} openTawkToChat={openTawkToChat} />
      <ServicesSection city={city} whatsappNumber={whatsappNumber} openTawkToChat={openTawkToChat} changeText={changeText} dynamicCountry={dynamicCountry} />
      <SubjectsSection city={city} changeText={changeText} openTawkToChat={openTawkToChat} />
      <PartnerSection city={city} changeText={changeText} />
      <OrderSection city={city} changeText={changeText} openTawkToChat={openTawkToChat} />
      <PaymentSection city={city} whatsappNumber={whatsappNumber} changeText={changeText} openTawkToChat={openTawkToChat} />
      <GuranteesSection city={city} changeText={changeText} openTawkToChat={openTawkToChat} />
      <FAQSection city={city} whatsappNumber={whatsappNumber} changeText={changeText} openTawkToChat={openTawkToChat} />
      <TestimonialsSection changeText={changeText} />
      {/* User Reviews */}
      {areReviewsVisible && (
        <div className="userReviews">
          <div className="reviews">
            <img src={reviewsData[currentReviewIndex].img} width='35px' alt="" />
            <div className="d-flex">
              <i className="fa fa-times-circle text-danger" onClick={closeReview}></i>
              <h5>{reviewsData[currentReviewIndex].name}</h5>
              <p>
                {reviewsData[currentReviewIndex].firstMessage}
              </p>
              <h6>
                {reviewsData[currentReviewIndex].secondMessage}
              </h6>
              <img
                src={rating}
                alt="stars"
                className='star'
                width='80px'
              />
            </div>
          </div>
        </div>
      )}
      {/* User Reviews End */}
    </>
  );
};

export default Home;
