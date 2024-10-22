import React from 'react';
import Home from '../Home';

const ResearchPaperWriter = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Paper Writer help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchPaperWriter;