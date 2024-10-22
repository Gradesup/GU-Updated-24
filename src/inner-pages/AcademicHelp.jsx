import React from 'react';
import Home from '../Home';

const AcademicHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicHelp;