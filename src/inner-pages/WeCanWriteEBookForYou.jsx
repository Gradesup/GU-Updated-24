import React from 'react';
import Home from '../Home';

const WeCanWriteEBookForYou = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write EBook For You';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WeCanWriteEBookForYou;