import React from 'react';
import Home from '../Home';

const WriteMyBookAnalysisService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Book Analysis Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyBookAnalysisService;