import React from 'react';
import Home from '../Home';

const AcademicWritingHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Writing Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicWritingHelp;