import React from 'react';
import Home from '../Home';

const ArticlePublishingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Article Publishing Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ArticlePublishingService;