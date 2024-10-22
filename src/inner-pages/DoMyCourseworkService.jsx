import React from 'react';
import Home from '../Home';

const DoMyCourseworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Coursework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyCourseworkService;