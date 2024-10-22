import React from 'react';
import Home from '../Home';

const WriteMyCV = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My CV Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyCV;