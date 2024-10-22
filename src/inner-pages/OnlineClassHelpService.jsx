import React from 'react';
import Home from '../Home';

const OnlineClassHelpService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Online Class Help Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default OnlineClassHelpService;