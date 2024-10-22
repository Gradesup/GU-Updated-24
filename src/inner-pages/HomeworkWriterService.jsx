import React from 'react';
import Home from '../Home';

const HomeworkWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Homework Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HomeworkWriterService;