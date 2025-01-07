import React from 'react';
import Home from '../Home';

const BestThesisPublicationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Best Thesis Publication Service ';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BestThesisPublicationService;