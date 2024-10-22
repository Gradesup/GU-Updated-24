import React from 'react';
import Home from '../Home';

const BuyFinalYearProjectService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Final Year Project Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyFinalYearProjectService;