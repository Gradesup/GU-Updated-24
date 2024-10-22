import React from 'react';
import Home from '../Home';

const QuizzesWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Quizzes Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default QuizzesWriterService;