import React from 'react';
import Home from '../Home';

const WriteMyEbookService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Ebook Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyEbookService;