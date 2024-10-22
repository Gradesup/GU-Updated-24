import React from 'react';
import Home from '../Home';

const BuyEssayHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Essay Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyEssayHelp;