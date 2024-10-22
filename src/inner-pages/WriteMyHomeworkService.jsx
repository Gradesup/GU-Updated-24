import React from 'react';
import Home from '../Home';

const WriteMyHomeworkService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Homework Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyHomeworkService;