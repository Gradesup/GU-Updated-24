import React from 'react';
import Home from '../Home';

const CVWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'CV Writer Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default CVWriter;