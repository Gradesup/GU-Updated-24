import React from 'react';
import Home from '../Home';

const BuyResearchProposalService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Research Proposal Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyResearchProposalService;