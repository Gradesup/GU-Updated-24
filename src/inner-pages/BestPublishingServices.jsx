import React from 'react';
import Home from '../Home';

const BestPublishingServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = ' Publishing Services';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BestPublishingServices;