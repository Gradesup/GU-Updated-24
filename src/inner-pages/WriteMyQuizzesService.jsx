import React from 'react';
import Home from '../Home';

const WriteMyQuizzesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Quizzes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyQuizzesService;