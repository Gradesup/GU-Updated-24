import React from 'react';
import Home from '../Home';

const FinalYearProjectWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Final Year Project Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default FinalYearProjectWriterService;