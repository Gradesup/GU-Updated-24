import React from 'react';
import Home from '../Home';

const ProfessionalBookWriters = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Professional Book Writers';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ProfessionalBookWriters;