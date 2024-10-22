import React from 'react';
import Home from '../Home';

const AcademicHelpServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Help Services';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicHelpServices;