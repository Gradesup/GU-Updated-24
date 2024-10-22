import React from 'react';
import Home from '../Home';

const BuyExamService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Exam Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyExamService;