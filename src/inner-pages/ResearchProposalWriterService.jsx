import React from 'react';
import Home from '../Home';

const ResearchProposalWriterService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Research Proposal Writer Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ResearchProposalWriterService;