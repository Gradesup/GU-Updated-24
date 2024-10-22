import React from 'react';
import Home from '../Home';

const EbookWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ebook Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EbookWriterService;