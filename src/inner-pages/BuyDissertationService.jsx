import React from 'react';
import Home from '../Home';

const BuyDissertationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Dissertation Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyDissertationService;