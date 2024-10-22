import React from 'react';
import Home from '../Home';

const PayForResearchPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Research Paper';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForResearchPaper;