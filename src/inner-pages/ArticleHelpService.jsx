import React from 'react';
import Home from '../Home';

const ArticleHelpService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Article Help Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ArticleHelpService;