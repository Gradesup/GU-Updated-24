import React from 'react';
import Home from '../Home';

const WriteMyEssayServiceHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Write My Essay Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WriteMyEssayServiceHelp;