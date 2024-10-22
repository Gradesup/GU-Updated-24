import React from 'react';
import Home from '../Home';

const PayForLiteratureReviewService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Literature Review Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForLiteratureReviewService;