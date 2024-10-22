import React from 'react';
import Home from '../Home';

const EbookHelpService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Ebook Help Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default EbookHelpService;