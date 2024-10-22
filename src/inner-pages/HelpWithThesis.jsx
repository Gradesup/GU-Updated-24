import React from 'react';
import Home from '../Home';

const HelpWithThesis = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Thesis';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithThesis;