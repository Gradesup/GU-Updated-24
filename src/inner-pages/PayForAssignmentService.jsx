import React from 'react';
import Home from '../Home';

const PayForAssignmentService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Assignment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForAssignmentService;