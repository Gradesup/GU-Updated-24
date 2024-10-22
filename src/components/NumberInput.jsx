import React, { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const NumberInput = ({ initialCountry }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;

    // Initialize the International Telephone Input plugin
    intlTelInput(input, {
      initialCountry,
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });
  }, [initialCountry]);

  return (
    <div>
      <input type="tel" ref={inputRef} />
    </div>
  );
};

export default NumberInput;
