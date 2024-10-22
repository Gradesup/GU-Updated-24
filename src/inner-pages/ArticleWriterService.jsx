import React from 'react';
import Home from '../Home';

const ArticleWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Article Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ArticleWriterService;