import React from 'react';
import Home from '../Home';

const AcademicWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Writer';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicWriter;