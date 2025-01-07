import React from 'react';
import Home from '../Home';

const BookWritingServices = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Book Writing Services';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BookWritingServices;