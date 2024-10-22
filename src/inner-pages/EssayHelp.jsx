import React from 'react';
import Home from '../Home';

const EssayHelp = ({whatsappNumber , countryName , dynamicCountry}) => {
  const changeText = 'Essay Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry} />;
};

export default EssayHelp;
