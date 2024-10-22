import React from 'react';
import Home from '../Home';

const HelpWithOnlineCoursesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Help With Online Courses Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default HelpWithOnlineCoursesService;