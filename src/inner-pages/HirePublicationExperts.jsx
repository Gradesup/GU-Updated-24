import React from 'react';
import Home from '../Home';

const HirePublicationExperts = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Hire Publication Experts';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HirePublicationExperts;