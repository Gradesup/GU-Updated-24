import React from 'react';
import Home from '../Home';

const BuyArticleService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Article Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyArticleService;