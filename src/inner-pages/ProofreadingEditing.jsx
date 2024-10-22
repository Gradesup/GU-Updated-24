import React from 'react';
import Home from '../Home';

const ProofreadingEditing = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Proofreading & Editing Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default ProofreadingEditing;