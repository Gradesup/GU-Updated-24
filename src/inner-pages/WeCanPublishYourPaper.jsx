import React from 'react';
import Home from '../Home';

const WeCanPublishYourPaper = ({whatsappNumber , countryName ,  dynamicCountry}) => {
  const changeText = ' We can Publish your Paper ';

  return <Home changeText={changeText} whatsappNumber={whatsappNumber} countryName={countryName} dynamicCountry={dynamicCountry}  />;
};

export default WeCanPublishYourPaper;