import React from 'react';
import Home from '../Home';

const PayForThesis = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Thesis Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForThesis;