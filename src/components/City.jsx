import React, { useEffect, useState  } from 'react';

const City = () => {
  const [city, setCity] = useState('London');
  const [country, setCountry] = useState('GB');

  const value = 'Wasiq' ;



  return (
    <>
    <div className='City-Section'>
      <div id="city">{city}</div>
      <div id="country">{country}</div>
    </div>
    </>
  );  
};

export default City;
