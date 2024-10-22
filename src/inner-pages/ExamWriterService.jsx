import React from 'react';
import Home from '../Home';

const ExamWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Exam Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ExamWriterService;