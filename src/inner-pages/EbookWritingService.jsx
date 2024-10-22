import React from 'react';
import Home from '../Home';

const EbookWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ebook Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EbookWritingService;