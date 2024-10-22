import React from 'react';
import Home from '../Home';

const TakeMyBookAnalysisService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Book Analysis Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyBookAnalysisService;