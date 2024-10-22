import React from 'react';
import Home from '../Home';

const DoMyBookReportService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Book Report Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyBookReportService;