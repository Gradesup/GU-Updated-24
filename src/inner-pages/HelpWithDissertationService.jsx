import React from 'react';
import Home from '../Home';

const HelpWithDissertationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Dissertation Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithDissertationService;