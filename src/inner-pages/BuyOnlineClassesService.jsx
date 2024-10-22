import React from 'react';
import Home from '../Home';

const BuyOnlineClassesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Online Classes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyOnlineClassesService;