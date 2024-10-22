import React from 'react';
import Home from '../Home';

const WriteMyResearchPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Research Paper Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyResearchPaper;