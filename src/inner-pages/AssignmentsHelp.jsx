import React from 'react';
import Home from '../Home';

const AssignmentsHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Assignments Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AssignmentsHelp;