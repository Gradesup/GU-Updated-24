import React from 'react';
import Home from '../Home';

const DoMyDissertation = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Dissertation Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyDissertation;