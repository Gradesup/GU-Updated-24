import React from 'react';
import Home from '../Home';

const QuizzesHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Quizzes Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default QuizzesHelp;