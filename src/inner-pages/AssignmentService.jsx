import React from 'react';
import Home from '../Home';

const AssignmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Assignment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AssignmentService;