import React from 'react';
import Home from '../Home';

const TakeMyFinalYearProjectService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Final Year Project Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyFinalYearProjectService;