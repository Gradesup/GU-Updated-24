import React from 'react';
import Home from '../Home';

const ArticleWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Article Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ArticleWritingService;