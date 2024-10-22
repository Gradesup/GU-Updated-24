import React from 'react';
import SecondaryHeading from './SecondaryHeading';
import Paragraph from './Paragraph';

const AboutGuranteeBox = ({ city, ...props }) => {
  const gurantees = [
    {
      id: 1,
      name: 'Round The Clock Availability',
      text: `At Assignment Help, we guarantee quality and thorough research for each assignment that comes our way. We have an unbeatable team of Ph.D.-certified experts who can craft documents from scratch to ensure they are entirely unique. To get you the best grades possible, all of these works undergo multiple levels of rigorous proofreading & editing before being submitted in universities so you don't need to worry about a thing! So choose us if you're looking for not just any work but guaranteed top-notch results! ` ,
      icon: 'fa fa-graduation-cap' ,
    },
    {
      id: 2,
      name: 'Lightning Fast Assignment Delivery',
      text: <>At Gradesup.org<sup>®</sup>, we believe in creating a win-win situation for our customers – offering them the professional help they need and charging an affordable price for it. We take pride that college goers trust us to have a healthy business relationship; however if their needs are not met after availing of our services, we refund the order amount without any questions asked! With us around you can be sure your academic requirements will always be taken care of at budget friendly prices with premium quality service. </>,
      icon: `fa fa-money-bill`,
    },
    {
      id: 3,
      name: 'Certified Subject Experts',
      text: `At Assignment Help ${localStorage.getItem('city')}, we are dedicated to delivering exceptional documents that guarantee satisfaction. Our stringent standards ensure your work is of the highest quality and never compromised on. With expertise at our fingertips, you can trust us to provide thorough research resulting in excellent grades for each student who seeks out our help! Additionally, if questions arise along the way feel free to reach out; customer service is central part of what makes us unique from other providers! `,
      icon: 'fa fa-star',
    },
    {
      id: 4,
      name: 'Rated 4.5/5',
      text: `We are proud to have consistently provided our customers with quality solutions and helpful information, as evidenced by their glowing remarks. Our commitment to excellence has made us a leader within the industry. Join us on this ever-evolving journey - experience an outstanding level of customer service today!.`,
      icon: 'fa fa-star',
    },
  ];

  return (
    <div className="Gurantee-Box">
      {gurantees.map((guarantee) => (
        <div className="Gurantee-Div text-center" key={guarantee.id}>
          <i className={guarantee.icon}></i>
          <SecondaryHeading heading={guarantee.name} />
          <Paragraph paragraph={guarantee.text} />
        </div>
      ))}
    </div>
  );
};

export default AboutGuranteeBox;
