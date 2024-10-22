import React from 'react';
import Home from '../Home';

const PayForEbookService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Ebook Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForEbookService;