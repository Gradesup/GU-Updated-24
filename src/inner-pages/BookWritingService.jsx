import React from 'react';
import Home from '../Home';

const BookWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Writing Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookWritingService;