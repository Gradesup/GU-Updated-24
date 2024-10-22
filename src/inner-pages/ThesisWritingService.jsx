import React from 'react';
import Home from '../Home';

const ThesisWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Thesis Writing Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ThesisWritingService;