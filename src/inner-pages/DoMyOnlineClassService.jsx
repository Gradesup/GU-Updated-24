import React from 'react';
import Home from '../Home';

const DoMyOnlineClassService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Online Class Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyOnlineClassService;