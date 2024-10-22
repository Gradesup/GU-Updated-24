import React from 'react';
import Home from '../Home';

const PayForCasestudyService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Casestudy Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForCasestudyService;