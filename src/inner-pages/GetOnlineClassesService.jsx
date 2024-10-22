import React from 'react';
import Home from '../Home';

const GetOnlineClassesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Get Online Classes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GetOnlineClassesService;