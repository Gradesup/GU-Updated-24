import React from 'react';
import Home from '../Home';

const HireaBookWriterNow = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Hire a Book Writer Now';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HireaBookWriterNow;