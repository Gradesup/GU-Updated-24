import React from 'react';
import Home from '../Home';

const BuyThesis = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Thesis Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyThesis;