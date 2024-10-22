import React from 'react';
import Home from '../Home';

const PayForDissertationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Dissertation Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForDissertationService;