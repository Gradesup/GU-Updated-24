import React from 'react';
import Home from '../Home';

const PayForFinalYearProjectService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Final Year Project Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForFinalYearProjectService;