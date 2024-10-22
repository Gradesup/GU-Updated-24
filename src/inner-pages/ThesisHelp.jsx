import React from 'react';
import Home from '../Home';

const ThesisHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Thesis Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ThesisHelp;