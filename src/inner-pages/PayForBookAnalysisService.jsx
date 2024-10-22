import React from 'react';
import Home from '../Home';

const PayForBookAnalysisService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Book Analysis Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForBookAnalysisService;