import React from 'react';
import Home from '../Home';

const DoMyThesis = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Thesis Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyThesis;