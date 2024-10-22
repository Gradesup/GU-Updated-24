import React from 'react';
import Home from '../Home';

const WriteMyDissertationService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Dissertation Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyDissertationService;