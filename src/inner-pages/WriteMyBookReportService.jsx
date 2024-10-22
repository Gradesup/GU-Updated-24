import React from 'react';
import Home from '../Home';

const WriteMyBookReportService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Book Report Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyBookReportService;