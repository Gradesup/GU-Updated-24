import React from 'react';
import Home from '../Home';

const HelpWithOnlineClassService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Online Class Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithOnlineClassService;