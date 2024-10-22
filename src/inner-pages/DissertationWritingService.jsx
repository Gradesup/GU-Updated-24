import React from 'react';
import Home from '../Home';

const DissertationWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Dissertation Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DissertationWritingService;