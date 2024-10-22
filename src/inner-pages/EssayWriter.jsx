import React from 'react';
import Home from '../Home';

const EssayWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Essay Writer help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EssayWriter;