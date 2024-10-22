import React from 'react';
import Home from '../Home';

const HelpWithCourseworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Coursework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithCourseworkService;