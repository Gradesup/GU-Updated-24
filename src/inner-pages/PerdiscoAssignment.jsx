import React from 'react';
import Home from '../Home';

const PerdiscoAssignment = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Perdisco Assignment Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PerdiscoAssignment;