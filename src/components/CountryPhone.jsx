import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';

const CountryPhone = ({ countryName , children , dynamicCountry  }) => {
    const [country, setCountry] = useState({
        whatsapp_number: "",
        tel_number: "",
    });

    const location = useLocation();

    const fetchCountry = () => {

        const country = countryName;

      
          let countryData;
      
          if (country === 'GB' || country === 'IE' || country === 'EU') {
            countryData = { whatsapp_number: '+447451271188', tel_number: '+447451271188' };
          } else if (country === 'AU' || country === 'NZ') {
            countryData = { whatsapp_number: '+61488896112', tel_number: '+61488896112' };
          } else if (country === 'US' || country === 'CA' || country === 'MX') {
            countryData = { whatsapp_number: '+19179331132', tel_number: '+19179331132' };
          } else {
            countryData = { whatsapp_number: '+447451271188', tel_number: '+447451271188' };
          }          
      
          setCountry(countryData);
      };

    useEffect(() => {
        fetchCountry();
    }, [countryName]);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('whatsappNumber', country.whatsapp_number);
        localStorage.setItem('telNumber', country.tel_number);
    }, [country]);


    function unslugify(slug) {
      // Replace hyphens with spaces
      let unslugged = slug.replace(/-/g, ' ').replace(/\//g, '');
      // Capitalize the first letter of each word
      return unslugged.substring(dynamicCountry ? dynamicCountry.length - 1 : 0).replace(/\b\w/g, (char) => char.toUpperCase());
    }
  
    // Calculate whatsappNumber by calling unslugify
    const whatsappNumber = unslugify(location.pathname);

    return (
<div>
{children({
whatsappNumber: `${country.whatsapp_number}?text=Hi Gradesup, I am looking for ${location.pathname !== `/` && location.pathname !== dynamicCountry && location.pathname !== `${dynamicCountry}/` && !location.pathname.includes('policy') && !location.pathname.includes('policy') && !location.pathname.includes('conditions') && !location.pathname.includes('about') && !location.pathname.includes('contact') && !location.pathname.includes('form') && !location.pathname.includes('offers') && !location.pathname.includes('thankyou')  ? location.pathname.includes('help') ? unslugify(location.pathname) : unslugify(location.pathname) + ' Help' : "Tutoring Help"}.`,
telNumber: country.tel_number,
})}
</div>
    );
};

export default CountryPhone;
