import React from 'react';
import Home from '../Home';

const DoMyEbookService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Ebook Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyEbookService;