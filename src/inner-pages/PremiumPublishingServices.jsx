import React from 'react';
import Home from '../Home';

const PremiumPublishingServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Premium Publishing Services';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PremiumPublishingServices;