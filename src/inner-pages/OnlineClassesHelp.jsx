import React from 'react';
import Home from '../Home';

const OnlineClassesHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Online Classes Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default OnlineClassesHelp;