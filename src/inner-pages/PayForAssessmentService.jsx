import React from 'react';
import Home from '../Home';

const PayForAssessmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Assessment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForAssessmentService;