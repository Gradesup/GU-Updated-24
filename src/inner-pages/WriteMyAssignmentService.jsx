import React from 'react';
import Home from '../Home';

const WriteMyAssignmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Assignment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyAssignmentService;