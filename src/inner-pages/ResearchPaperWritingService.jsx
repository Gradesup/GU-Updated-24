import React from 'react';
import Home from '../Home';

const ResearchPaperWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Paper Writing Service';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchPaperWritingService;