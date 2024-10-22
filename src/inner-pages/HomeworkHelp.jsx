import React from 'react';
import Home from '../Home';

const HomeworkHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Homework Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HomeworkHelp;