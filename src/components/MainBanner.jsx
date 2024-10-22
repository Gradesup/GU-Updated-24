import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bannerImg from '../assets/images/first_ban_images/uk_banner.webp';
import turkeyImg from '../assets/images/first_ban_images/turkey_banner.webp';
import polandImg from '../assets/images/first_ban_images/poland_banner.webp';
import italyImg from '../assets/images/first_ban_images/italy_banner.webp';
import finlandImg from '../assets/images/first_ban_images/finland_banner.webp';
import uaeImg from '../assets/images/first_ban_images/uae_banner.webp';
import omanImg from '../assets/images/first_ban_images/oman_banner.webp';
import irelandImg from '../assets/images/first_ban_images/ireland_banner.webp';
import norwayImg from '../assets/images/first_ban_images/norway_banner.webp';
import swedenImg from '../assets/images/first_ban_images/swedan_banner.webp';
import netherlandsImg from '../assets/images/first_ban_images/netherland_banner.webp';
import austriaImg from '../assets/images/first_ban_images/austria_banner.webp';
import icelandImg from '../assets/images/first_ban_images/iceland_banner.webp';
import ukImg from '../assets/images/first_ban_images/uk_banner.webp';
import usaImg from '../assets/images/first_ban_images/us_banner.webp';
import ausImg from '../assets/images/first_ban_images/australia_banner.webp';
import newzelandImg from '../assets/images/first_ban_images/newzealand_banner.webp';
import canadaImg from '../assets/images/first_ban_images/canada_banner.webp';
import mexicanImg from '../assets/images/first_ban_images/mexican_banner.webp';
import pakistanImg from '../assets/images/first_ban_images/pakistan_banner.webp';
import chatExpert from '../assets/images/gifs/chatexpert.png';
import expertImg from '../assets/images/gifs/experts.png';
import ratingImg from '../assets/images/gifs/rating.png';
import reportImg from '../assets/images/gifs/free-report.png';
import sitejabberIcon from '../assets/images/img_1.png';
import resellerratingsIcon from '../assets/images/img_2.png';
import trustpilotIcon from '../assets/images/trust_pi.png';
import PurpleBox from './PurpleBox';
import BannerPoints from './BannerPoints';
import Form from './Form';
import TypingEffect from './TypingEffect';
import PurpleCurveBtn from './PurpleCurveBtn';
import SecondaryHeading from './SecondaryHeading';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

const MainBanner = ({ changeText ,  onSubmit  , openTawkToChat , countryName , dynamicCountry } ) => {
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    // Retrieve the city from localStorage if available
    const storedCity = localStorage.getItem('mainBannerCity');
    if (storedCity) {
      setCity(storedCity);
    }
  }, []);

 

  // Images Comes from CloadFlare

// const austriaImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/40404211-66f6-4643-6d95-12fc39594500/compress';
// const bannerImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/afbce8f3-fa45-4af8-b6b2-ba90fbf84000/compress';
// const turkeyImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/0b49aff7-2eac-434f-c845-2e3312061800/compress';
// const polandImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/2d5bdb09-6ded-4e6d-6b60-716a197c7100/compress';
// const italyImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/0f98b592-cc37-419f-7775-b7af082aa300/compress';
// const finlandImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/346cd109-6f8c-443b-90cb-c28c6424b400/compress';
// const uaeImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/1a7a6306-e1f6-48ce-daf5-8d8cecc6c600/compress';
// const omanImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/9992b3c8-5781-4049-69e4-abc8e62b7f00/compress';
// const irelandImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/f2f49e56-7165-4b67-ca83-20257f2ccd00/compress';
// const norwayImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/48bc18ad-c7a7-4404-dea7-326f11442e00/compress';
// const swedenImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/9ca4c6fb-18ba-49ce-8879-e6b3730e6400/compress';
// const netherlandsImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/098e4d79-ea23-4130-77c3-a0e5f1dd0d00/compress';
// const icelandImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/29e7d84c-0161-4a69-4a51-122b51390200/compress';
// const ukImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/afbce8f3-fa45-4af8-b6b2-ba90fbf84000/compress';
// const usaImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/340376ba-1d8b-4145-4742-82d3dc9fca00/compress';
// const ausImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/45c4b122-1931-4f3b-1001-3b76c4e3ee00/compress';
// const newzelandImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/f20a16b9-6c66-4a95-bf22-9881a5964900/compress';
// const canadaImg = 'https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/f8776baf-e635-4fed-28ee-0a59a4ce6900/compress';


        const country =countryName
        const countryImage =
        country === 'TR'
            ? turkeyImg
            : country === 'PL'
            ? polandImg
            : country === 'IT'
            ? italyImg
            : country === 'FI'
            ? finlandImg
            : country === 'UAE'
            ? uaeImg
            : country === 'OM'
            ? omanImg
            : country === 'IE'
            ? irelandImg
            : country === 'NO'
            ? norwayImg
            : country === 'SE'
            ? swedenImg
            : country === 'NL'
            ? netherlandsImg
            : country === 'AT'
            ? austriaImg
            : country === 'IS'
            ? icelandImg
            : country === 'GB'
            ? ukImg
            : country === 'US'
            ? usaImg
            : country === 'AU'
            ? ausImg
            : country === 'NZ'
            ? newzelandImg
            : country === 'CA'
            ? canadaImg
            : country === 'MX'
            ? mexicanImg
            : country === 'PK'
            ? pakistanImg
            : bannerImg;
            
            localStorage.setItem('bannerImg', countryImage);

  
  useEffect(() => {
    const countryImage = localStorage.getItem('bannerImg') || bannerImg;
    const image = new Image();
    image.src = countryImage;
    image.onload = () => {
      setBannerLoaded(true);
      setTimeout(() => {
        setShowContent(true);
      }, 3000); // Adjust the delay time as needed
    };
    image.onerror = () => {
      console.log('Failed to load the banner image.');
    };
  }, []);

  const firstPurpleBtn = {
    borderRadius: '40px 0px',
    fontFamily: 'Kanit',
    fontSize: '20px',
    height: '40px',
    width: 'fit-content',
    padding: '0px 20px',
  };

  const content = ['Satisfaction is Guaranteed', 'Experienced Experts', 'Time Flexibility'];
  const content2 = ['Very Low Pricing', 'Fastest Turnaround Time', 'Professional Proofreaders'];
  const content3 = ['100% Secure & Trusted', '24/7/365 Chat Support', '100% Guaranteed Results'];
  const content4 = [' 100% Secure, Fast, & Trustworthy Academic Assistance', ' 24/7 Customer Support for Your Academic Needs', 'Expert Guidance for Guaranteed Academic Excellence'];


  return (
<div className={`mainBanner ${bannerLoaded ? 'loaded' : ''}`}>
    <style>
      {`
        .mainBanner {
          background-image: url(${localStorage.getItem('bannerImg')});
        }
      `}
    </style>
      <Container>
        <Row>
          <Col md={6} className='text-center-420'>
            <PurpleCurveBtn btnText={`Professional ${changeText}`} style={firstPurpleBtn} />
            <TypingEffect />
            <h1 className="mainHeading">
              {<>Best <span className='changeText'>{changeText}</span> in {localStorage.getItem('city')}</>}
            </h1>
            <SecondaryHeading heading={' WE ACCEPT ALL TOPICS AND SUBJECTS.'} />
            <div className="d-flex justify-content-between mt-2 flex-wrap-wrap  button-div ">
              <Link to={`/order-form`} className='w-100'>
              <PurpleCurveBtn btnText={'Order Now'} />
              </Link>
              <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat}>
                <img src={chatExpert} alt={`${changeText}`} />
                <a>Consult with Expert</a>
              </div>
            </div>
            <div className="d-flex my-4 points">
              <BannerPoints img={expertImg} para="4500+ Knowledgeable Advisors" />
              <BannerPoints img={ratingImg} para="4.5 out of 5 rating from 5087 reviews." />
              <div className="d-none-767">
              <BannerPoints img={reportImg} para="Turnitin Reports are Generated Quickly" />
              </div>
            </div>
            <div className="d-flex justify-content-between gap-10 flex-wrap-480">
              <PurpleBox>{content}</PurpleBox>
              <PurpleBox>{content2}</PurpleBox>
              <div className="d-none-480">
              <PurpleBox>{content3}</PurpleBox>
              </div>
              <div className="d-none d-block-480 w-100">
              <PurpleBox>{content4}</PurpleBox>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap-wrap gap-10 mt-3 mb-3">
              {[
                { img: sitejabberIcon, name: 'Sitejabber' },
                { img: resellerratingsIcon, name: 'Reseller Ratings' },
                { img: trustpilotIcon, name: 'Trustpilot' },
              ].map((rating, index) => (
                <Ratings key={index} img={rating.img} name={rating.name} />
              ))}
            </div>
          </Col>
          <Col md={6}>
          <Form city={city} onSubmit={onSubmit} countryName={countryName} dynamicCountry={dynamicCountry}/> {/* Pass the city state to the Form component */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBanner;
