import React from 'react';
import Home from '../Home';

const DoMyCasestudyService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Casestudy Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyCasestudyService;