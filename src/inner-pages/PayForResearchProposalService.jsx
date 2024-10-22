import React from 'react';
import Home from '../Home';

const PayForResearchProposalService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Research Proposal Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForResearchProposalService;