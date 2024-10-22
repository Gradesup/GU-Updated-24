import React, { useEffect } from 'react';
import "../App.css";

const CookieConsentComponent = () => {
  useEffect(() => {
    // Load the Cookie Consent JavaScript asynchronously
    const script = document.createElement('script');
    script.src = 'https://cookieconsent.popupsmart.com/src/js/popper.js';
    document.head.appendChild(script);

    // Initialize Cookie Consent
    script.onload = () => {
      window.start.init({
        Palette: "palette8",
        Mode: "floating left",
        Theme: "wire",
        Message: "Gradesup.org Uses Cookies to Ensure You Get the Best User Experience. Our Privacy Policy",
        LinkText: "Our Privacy Policy",
        ButtonText: "Accept",
        Location: "https://gradesup.org/privacy-policy",
        Time: "5",
      });
    };
  }, []);

  return <></>; // This component doesn't render anything
};

export default CookieConsentComponent;