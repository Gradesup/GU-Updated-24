import React from 'react';
import Home from '../Home';

const BuyAssessmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Assessment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyAssessmentService;