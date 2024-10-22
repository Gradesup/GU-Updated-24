import React from 'react';
import Home from '../Home';

const PayForHomeworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Homework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForHomeworkService;