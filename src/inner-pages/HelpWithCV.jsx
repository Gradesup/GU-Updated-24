import React from 'react';
import Home from '../Home';

const HelpWithCV = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With CV';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithCV;