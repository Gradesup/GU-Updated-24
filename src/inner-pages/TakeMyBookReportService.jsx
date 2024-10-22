import React from 'react';
import Home from '../Home';

const TakeMyBookReportService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Book Report Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyBookReportService;