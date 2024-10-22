import React from 'react';
import Home from '../Home';

const GetLiteratureReviewService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Get Literature Review Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GetLiteratureReviewService;