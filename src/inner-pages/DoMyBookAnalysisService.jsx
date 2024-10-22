import React from 'react';
import Home from '../Home';

const DoMyBookAnalysisService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Book Analysis Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyBookAnalysisService;