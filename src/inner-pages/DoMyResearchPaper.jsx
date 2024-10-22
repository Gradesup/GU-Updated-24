import React from 'react';
import Home from '../Home';

const DoMyResearchPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Research Paper';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyResearchPaper;