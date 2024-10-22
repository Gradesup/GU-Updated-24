import React from 'react';
import Home from '../Home';

const DoMyOnlineCourseService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Online Course Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyOnlineCourseService;