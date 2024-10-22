import React from 'react';
import Home from '../Home';

const PayForCV = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For CV Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForCV;