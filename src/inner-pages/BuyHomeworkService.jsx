import React from 'react';
import Home from '../Home';

const BuyHomeworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Homework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyHomeworkService;