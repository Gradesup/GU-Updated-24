import React from 'react';
import Home from '../Home';

const DoMyCV = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My CV Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyCV;