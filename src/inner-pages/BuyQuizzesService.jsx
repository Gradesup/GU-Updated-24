import React from 'react';
import Home from '../Home';

const BuyQuizzesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Quizzes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyQuizzesService;