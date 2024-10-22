import React from 'react';
import Home from '../Home';

const DoMyLiteratureReviewService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Literature Review Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyLiteratureReviewService;