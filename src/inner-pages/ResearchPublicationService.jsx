import React from 'react';
import Home from '../Home';

const ResearchPublicationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Publication Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchPublicationService;