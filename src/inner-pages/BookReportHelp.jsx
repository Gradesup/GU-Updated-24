import React from 'react';
import Home from '../Home';

const BookReportHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Report Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookReportHelp;