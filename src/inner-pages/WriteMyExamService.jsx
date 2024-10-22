import React from 'react';
import Home from '../Home';

const WriteMyExamService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Exam Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyExamService;