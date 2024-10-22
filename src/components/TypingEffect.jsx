import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const textArray = ["Affordable Services.", "Fastest Services.", "Secure Services."];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  useEffect(() => {
    let timer;

    const type = (currentIndex, currentText, currentIndexInText) => {
      if (currentIndexInText < currentText.length) {
        setText((prevText) => prevText + currentText[currentIndexInText]);
        timer = setTimeout(() => {
          type(currentIndex, currentText, currentIndexInText + 1);
        }, typingDelay);
      } else {
        timer = setTimeout(() => {
          erase(currentIndex, currentText);
        }, newTextDelay);
      }
    };

    const erase = (currentIndex, currentText) => {
      if (currentText.length === 0) {
        setText('');
        const nextIndex = (currentIndex + 1) % textArray.length;
        timer = setTimeout(() => {
          type(nextIndex, textArray[nextIndex], 0);
        }, typingDelay);
      } else {
        setText((prevText) => prevText.slice(0, -1));
        timer = setTimeout(() => {
          erase(currentIndex, currentText.slice(0, -1));
        }, erasingDelay);
      }
    };

    type(0, textArray[0], 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
      <h3 className='secondHeading'>WE PROVIDE {text}</h3>
  );
};

export default TypingEffect;
