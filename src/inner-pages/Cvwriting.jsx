import React from 'react';
import Home from '../Home';

const Cvwriting = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Cv & Resume Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default Cvwriting;