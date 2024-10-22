import React from 'react';
import Home from '../Home';

const BookReportWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Report Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookReportWriterService;