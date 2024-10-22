import React from 'react';
import Home from '../Home';

const DoMyArticleService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Article Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyArticleService;