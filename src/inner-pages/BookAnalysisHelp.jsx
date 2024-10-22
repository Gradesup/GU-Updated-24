import React from 'react';
import Home from '../Home';

const BookAnalysisHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Analysis Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookAnalysisHelp;