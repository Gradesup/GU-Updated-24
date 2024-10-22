import React from 'react';
import Home from '../Home';

const OnlineAssignment = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Online Assignment';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default OnlineAssignment;