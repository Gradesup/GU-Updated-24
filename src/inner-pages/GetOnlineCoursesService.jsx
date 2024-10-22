import React from 'react';
import Home from '../Home';

const GetOnlineCoursesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Get Online Courses Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default GetOnlineCoursesService;