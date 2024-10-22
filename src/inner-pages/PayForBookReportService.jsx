import React from 'react';
import Home from '../Home';

const PayForBookReportService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Book Report Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForBookReportService;