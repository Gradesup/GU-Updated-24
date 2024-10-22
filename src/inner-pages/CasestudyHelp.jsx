import React from 'react';
import Home from '../Home';

const CasestudyHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Casestudy Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CasestudyHelp;