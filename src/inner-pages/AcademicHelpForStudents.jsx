import React from 'react';
import Home from '../Home';

const AcademicHelpForStudents = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Academic Help For Students';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default AcademicHelpForStudents;