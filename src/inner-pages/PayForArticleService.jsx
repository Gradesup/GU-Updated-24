import React from 'react';
import Home from '../Home';

const PayForArticleService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Article Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForArticleService;