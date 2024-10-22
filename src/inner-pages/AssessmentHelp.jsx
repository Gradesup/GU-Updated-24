import React from 'react';
import Home from '../Home';

const AssessmentHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Assessment Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AssessmentHelp;