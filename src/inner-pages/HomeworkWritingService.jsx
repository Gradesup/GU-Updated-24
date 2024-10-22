import React from 'react';
import Home from '../Home';

const HomeworkWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Homework Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HomeworkWritingService;