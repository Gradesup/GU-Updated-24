import React from 'react';
import Home from '../Home';

const PDFEbookWriting = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ebook Writing';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PDFEbookWriting;