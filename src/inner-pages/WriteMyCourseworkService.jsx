import React from 'react';
import Home from '../Home';

const WriteMyCourseworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Coursework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyCourseworkService;