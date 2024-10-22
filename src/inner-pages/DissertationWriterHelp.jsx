import React from 'react';
import Home from '../Home';

const DissertationWriterHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Dissertation Writer Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DissertationWriterHelp;