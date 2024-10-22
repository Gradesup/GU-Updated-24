import React from 'react';
import Home from '../Home';

const TakeMyOnlineCourseService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Online Course Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyOnlineCourseService;