import React from 'react';
import Home from '../Home';

const HelpWithResearchPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Research Paper';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithResearchPaper;