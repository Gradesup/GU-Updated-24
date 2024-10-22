import React from 'react';
import Home from '../Home';

const LiteratureReviewHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Literature Review Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default LiteratureReviewHelp;