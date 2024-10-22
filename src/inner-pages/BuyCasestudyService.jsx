import React from 'react';
import Home from '../Home';

const BuyCasestudyService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Casestudy Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyCasestudyService;