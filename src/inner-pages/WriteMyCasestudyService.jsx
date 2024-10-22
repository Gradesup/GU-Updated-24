import React from 'react';
import Home from '../Home';

const WriteMyCasestudyService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Casestudy Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyCasestudyService;