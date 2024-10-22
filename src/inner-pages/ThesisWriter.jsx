import React from 'react';
import Home from '../Home';

const ThesisWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Thesis Writer Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ThesisWriter;