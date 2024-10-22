import React from 'react';
import Home from '../Home';

const WriteMyResearchProposalService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Research Proposal Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyResearchProposalService;