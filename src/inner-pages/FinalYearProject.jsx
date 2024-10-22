import React from 'react';
import Home from '../Home';

const FinalYearProject = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Final Year Project Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default FinalYearProject;