import React from 'react';
import Home from '../Home';

const Articles = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Articles Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default Articles;