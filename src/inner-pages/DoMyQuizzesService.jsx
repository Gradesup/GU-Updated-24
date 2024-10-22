import React from 'react';
import Home from '../Home';

const DoMyQuizzesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Quizzes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyQuizzesService;