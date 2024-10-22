import React from 'react';
import Home from '../Home';

const DoMyFinalYearProjectService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Final Year Project Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyFinalYearProjectService;