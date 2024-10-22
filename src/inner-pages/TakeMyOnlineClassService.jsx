import React from 'react';
import Home from '../Home';

const TakeMyOnlineClassService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Take My Online Class Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default TakeMyOnlineClassService;