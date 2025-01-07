import React from 'react';
import Home from '../Home';

const EbookWritingExpert = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ebook Writing Expert';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EbookWritingExpert;