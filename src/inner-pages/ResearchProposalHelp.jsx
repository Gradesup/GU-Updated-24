import React from 'react';
import Home from '../Home';

const ResearchProposalHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Proposal Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchProposalHelp;