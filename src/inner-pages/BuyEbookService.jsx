import React from 'react';
import Home from '../Home';

const BuyEbookService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Ebook Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyEbookService;