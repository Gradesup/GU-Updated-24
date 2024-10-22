import React from 'react';
import Home from '../Home';

const AssignmentWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Assignment Writer Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AssignmentWriter;