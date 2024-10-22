import React from 'react';
import Home from '../Home';

const BuyBookAnalysisService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Book Analysis Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyBookAnalysisService;