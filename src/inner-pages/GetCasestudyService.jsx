import React from 'react';
import Home from '../Home';

const GetCasestudyService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Get Casestudy Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GetCasestudyService;