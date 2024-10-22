import React from 'react';
import Home from '../Home';

const CourseWorkHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Course Work Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CourseWorkHelp;