import React from 'react';
import Home from '../Home';

const CVHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'CV Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CVHelp;