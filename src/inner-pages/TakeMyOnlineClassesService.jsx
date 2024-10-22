import React from 'react';
import Home from '../Home';

const TakeMyOnlineClassesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Online Classes Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyOnlineClassesService;