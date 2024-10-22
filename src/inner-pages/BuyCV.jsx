import React from 'react';
import Home from '../Home';

const BuyCV = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy CV Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyCV;