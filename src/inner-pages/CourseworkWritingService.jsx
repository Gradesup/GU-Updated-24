import React from 'react';
import Home from '../Home';

const CourseworkWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Coursework Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CourseworkWritingService;