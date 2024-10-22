import React from 'react';
import Home from '../Home';

const WriteMyAssessmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Assessment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyAssessmentService;