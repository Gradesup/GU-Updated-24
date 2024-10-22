import React from 'react';
import Home from '../Home';

const ResearchProposalWritingService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Proposal Writing Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchProposalWritingService;