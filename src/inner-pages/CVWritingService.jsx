import React from 'react';
import Home from '../Home';

const CVWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'CV Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CVWritingService;