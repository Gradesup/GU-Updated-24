import React, { useState, useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import SecondaryHeading from './SecondaryHeading';
import BulletPoint from './BulletPoint';
import NavbarBtn from './NavbarBtn';
import chatExpert from '../assets/images/gifs/chatexpert.png';
import TabData from './TabData';
import { HashLink as Link } from 'react-router-hash-link';

const ServicesTabs = ({city , openTawkToChat , whatsappNumber , changeText , dynamicCountry}) => {
  const [activeTab, setActiveTab] = useState(0)
  if(!localStorage.getItem('btn')){
  localStorage.setItem('btn' , 0);
  }
  
  const handleTabChange = (index , tab ) => {
    localStorage.setItem('btn',index);
    document.querySelector(`#p${index}`).click()  
  };

  let newActiveTab = parseInt(localStorage.getItem('btn')) ;

  const tabs = useMemo(() => {
    return [
      ...TabData({ city }) // Invoke the TabData function to get the array of tabs
    ];
  } );

  const renderedBulletPoints = useMemo(() => {
    if (tabs[newActiveTab] && tabs[newActiveTab].bulletpoints) {
      return (
        <ul className="services-grid">
          {tabs[newActiveTab].bulletpoints.map((item, index) => (
            <li key={index} className="service-points">
              <BulletPoint bulletpoint={item} />
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }, [tabs, newActiveTab]);

  return (
    <div className="Tabs">
      <Row>
        <Col md={8}>
          {/* Tabs */}
          <div className="tabs-container">
          {/* ${dynamicCountry} */}
            {tabs.map((tab, index) => (
              <Link id={'p'+ index} to={`${dynamicCountry}${tab.link}`}>
              <div
                key={index}
                className={`tab ${index == localStorage.getItem('btn') ? 'active' : ''}`}
                onClick={() => handleTabChange(index , tab)}
              >
                {tab.name}
              </div>
              </Link>
            ))}
          </div>
          {/* Text Content */}
          <div className="text-content mt-4">
          <div>{tabs[newActiveTab].heading}</div>
            <div>{tabs[newActiveTab].text}</div>
            <div className="mt-2">
            <SecondaryHeading heading={'Free Feature'} />
            </div>
            {renderedBulletPoints}
            <div className="navbarBtn mt-4">
              <NavbarBtn
                className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                btnText="Chat With Us on WhatsApp"
                icon="fa fa-whatsapp"
                btnLink = {`https://wa.me/${whatsappNumber}`}
              />
              <div className="expertBtn d-flex align-items-center" onClick={openTawkToChat}>
                <img loading="lazy" src={chatExpert} alt="" />
                <a>Connect with our Specialist</a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          {/* Image Content */}
          <div className="image-content">
            <img
              src={tabs[newActiveTab] && tabs[newActiveTab].image}
              alt={`${changeText}`}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesTabs;
