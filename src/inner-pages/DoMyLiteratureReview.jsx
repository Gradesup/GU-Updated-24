import React from 'react';
import Home from '../Home';

const DoMyLiteratureReview = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Literature Review Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyLiteratureReview;