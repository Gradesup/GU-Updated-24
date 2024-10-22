import React from 'react';
import Home from '../Home';

const BuyResearchPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Research Paper Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyResearchPaper;