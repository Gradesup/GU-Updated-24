import React from 'react';
import Home from '../Home';

const BuyOnlineCoursesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Buy Online Courses Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default BuyOnlineCoursesService;