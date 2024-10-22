import React from 'react';
import Home from '../Home';

const PayForCourseworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Coursework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForCourseworkService;