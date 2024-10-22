import React from 'react';
import Home from '../Home';

const TakeMyExamService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Exam Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyExamService;