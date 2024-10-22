import React from 'react';
import Home from '../Home';

const ExamHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Exam Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ExamHelp;