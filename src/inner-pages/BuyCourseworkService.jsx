import React from 'react';
import Home from '../Home';

const BuyCourseworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Coursework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyCourseworkService;