import React from 'react';
import Home from '../Home';

const AcademicWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Writing Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicWritingService;