import React from 'react';
import Home from '../Home';

const BuyLiteratureReviewService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Literature Review Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyLiteratureReviewService;