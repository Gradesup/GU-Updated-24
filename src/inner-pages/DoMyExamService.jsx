import React from 'react';
import Home from '../Home';

const DoMyExamService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Exam Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyExamService;