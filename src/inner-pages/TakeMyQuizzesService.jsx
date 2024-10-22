import React from 'react';
import Home from '../Home';

const TakeMyQuizzesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Quizzes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyQuizzesService;