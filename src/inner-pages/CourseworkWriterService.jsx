import React from 'react';
import Home from '../Home';

const CourseworkWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Coursework Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CourseworkWriterService;