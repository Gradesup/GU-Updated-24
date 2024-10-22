import React from 'react';
import Home from '../Home';

const DoMyHomeworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Homework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyHomeworkService;