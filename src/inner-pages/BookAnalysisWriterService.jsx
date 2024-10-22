import React from 'react';
import Home from '../Home';

const BookAnalysisWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Analysis Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookAnalysisWriterService;