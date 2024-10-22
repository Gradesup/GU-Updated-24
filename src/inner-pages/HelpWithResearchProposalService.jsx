import React from 'react';
import Home from '../Home';

const HelpWithResearchProposalService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Research Proposal Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithResearchProposalService;