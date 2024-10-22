import React from 'react';
import Home from '../Home';

const GetAssessmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Get Assessment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GetAssessmentService;