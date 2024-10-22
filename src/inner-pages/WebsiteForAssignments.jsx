import React from 'react';
import Home from '../Home';

const WebsiteForAssignments = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Website For Assignments';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WebsiteForAssignments;