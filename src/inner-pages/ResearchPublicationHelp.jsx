import React from 'react';
import Home from '../Home';

const ResearchPublicationHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Publication Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchPublicationHelp;