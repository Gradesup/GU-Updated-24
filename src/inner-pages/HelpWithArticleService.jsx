import React from 'react';
import Home from '../Home';

const HelpWithArticleService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Article Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithArticleService;