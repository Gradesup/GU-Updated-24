import React from 'react';
import Home from '../Home';

const PayForQuizzesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Quizzes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForQuizzesService;