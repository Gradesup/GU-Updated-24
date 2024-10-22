import React from 'react';
import Home from '../Home';

const DoMyAssignmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Assignment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyAssignmentService;