import React from 'react';
import Home from '../Home';

const ResearchPaperHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Paper Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchPaperHelp;