import React from 'react';
import Home from '../Home';

const DoMyResearchProposalService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My Research Proposal Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyResearchProposalService;