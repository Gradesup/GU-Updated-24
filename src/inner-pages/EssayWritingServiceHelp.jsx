import React from 'react';
import Home from '../Home';

const EssayWritingServiceHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Essay Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EssayWritingServiceHelp;