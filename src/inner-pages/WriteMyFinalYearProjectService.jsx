import React from 'react';
import Home from '../Home';

const WriteMyFinalYearProjectService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Final Year Project Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyFinalYearProjectService;