import React from 'react';
import Home from '../Home';

const DissertationHelp = ({whatsappNumber , countryName , dynamicCountry }) => {
  const changeText = 'Dissertation Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}   />;
};

export default DissertationHelp;