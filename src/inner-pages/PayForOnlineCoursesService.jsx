import React from 'react';
import Home from '../Home';

const PayForOnlineCoursesService = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Pay For Online Courses Service Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default PayForOnlineCoursesService;