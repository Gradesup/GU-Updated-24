import React from 'react';
import Home from '../Home';

const BuyBookReportService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Book Report Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyBookReportService;