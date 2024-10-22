import React from 'react';
import Home from '../Home';

const HelpWithHomeworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Homework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithHomeworkService;