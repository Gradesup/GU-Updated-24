import React from 'react';
import Home from '../Home';

const WeCanWriteEBookForYou = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'We Can Write eBook For You';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WeCanWriteEBookForYou;