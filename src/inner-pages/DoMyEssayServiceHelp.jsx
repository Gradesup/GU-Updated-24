import React from 'react';
import Home from '../Home';

const DoMyEssayServiceHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Essay Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyEssayServiceHelp;