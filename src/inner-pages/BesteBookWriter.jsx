import React from 'react';
import Home from '../Home';

const BesteBookWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'eBook Writer';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BesteBookWriter;