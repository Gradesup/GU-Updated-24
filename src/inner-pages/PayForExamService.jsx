import React from 'react';
import Home from '../Home';

const PayForExamService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Exam Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForExamService;