import React from 'react';
import Home from '../Home';

const GhostwritingServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ghostwriting Services';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GhostwritingServices;