import React from 'react';
import Home from '../Home';

const DoMyCaseStudy = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = 'Do My CaseStudy Help';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default DoMyCaseStudy;