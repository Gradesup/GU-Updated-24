import React from 'react';
import Home from '../Home';

const ContentHelpServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Content Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ContentHelpServices;