import React from 'react';
import Home from '../Home';

const OnlineCoursesHelp = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Online Courses Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default OnlineCoursesHelp;