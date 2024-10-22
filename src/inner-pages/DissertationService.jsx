import React from 'react';
import Home from '../Home';

const DissertationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Dissertation Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DissertationService;