import React from 'react';
import Home from '../Home';

const PayForOnlineClassesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Online Classes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForOnlineClassesService;