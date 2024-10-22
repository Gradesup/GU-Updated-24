import React from 'react';
import Home from '../Home';

const HelpWithEbookService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Ebook Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithEbookService;