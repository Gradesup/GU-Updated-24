import React from 'react';
import Home from '../Home';

const WriteMyLiteratureReviewService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Literature Review Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyLiteratureReviewService;