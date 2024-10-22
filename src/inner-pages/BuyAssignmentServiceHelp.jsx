import React from 'react';
import Home from '../Home';

const BuyAssignmentServiceHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Assignment Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyAssignmentServiceHelp;