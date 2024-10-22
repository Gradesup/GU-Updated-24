import React from 'react';
import Home from '../Home';

const Presentations = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Presentations Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default Presentations;