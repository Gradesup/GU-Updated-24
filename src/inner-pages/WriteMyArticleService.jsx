import React from 'react';
import Home from '../Home';

const WriteMyArticleService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Article Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyArticleService;