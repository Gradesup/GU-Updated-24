import React from 'react';
import Home from '../Home';

const DoMyAssessmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Assessment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyAssessmentService;