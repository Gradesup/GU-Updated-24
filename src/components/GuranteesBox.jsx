import React from 'react';
import SecondaryHeading from './SecondaryHeading';
import Paragraph from './Paragraph';

const GuranteesBox = ({ city, changeText }) => {
  const gurantees = [
    {
      id: 1,
      name: '100% Plagiarism FREE',
      text: `Get ready to be pleasantly surprised with the unbeatable standard of ${changeText} delivered by us! Our team is dedicated in providing you excellent quality ${changeText} that are crafted from scratch, extensively researched and carefully proofread & edited. Plus our panel of Ph.D.-certified experts makes sure each work meets stringent academic guidelines maximizing your chance for top grades!. Trust us when we say- originality guaranteed ! ` ,
      icon: 'fa fa-graduation-cap' ,
    },
    {
      id: 2,
      name: 'Money Back Guarantee',
      text: <>At Gradesup.org<sup>®</sup>, we understand that trust is paramount for any successful business relationship and strive to provide the best services at fair prices so our customers can always benefit from a win-win situation. We don't just promise great results in all orders; if there are ever any complaints or issues with an order, we'll refund it fully - no questions asked! College students have taken notice of this commitment to fairness and reliability, proudly proclaiming "Gradesup.org<sup>®</sup> is fair and affordable." </>,
      icon: `fa fa-money-bill`,
    },
    {
      id: 3,
      name: '100% Satisfaction',
      text: `we are dedicated to providing you with the best and highest quality documents. To ensure this goal is achieved, our strict guidelines guarantee that your papers will never be compromised in terms of quality. Our experts work hard to deliver well-researched documentations that can secure top grades for students seeking assistance from us. And should there ever arise any issues or queries during your experience with us – do not hesitate! Reach out to one of our friendly customer service representatives who'll quickly address all concerns raised by you! `,
      icon: 'fa fa-star',
    },
    {
      id: 4,
      name: 'Unlimited Revisions',
      text: <>Our {changeText} {localStorage.getItem('city')} provides comprehensive tasks that assist scholars to excel at their studies. If any doubts arise, we are proud offer unlimited revisions for free - giving students the peace of mind knowing Gradesup.org<sup>®</sup> is always on hand with an incomparable level of service and support, even after delivery! We also ensure our assignments reach you ahead-of-time so there's plenty of time to go through it carefully too.</>,
      icon: 'fa fa-history',
    },
    {
      id: 5,
      name: 'Lowest Price',
      text: <>Are you looking for an Online {changeText} service that won't break your budget? At Gradesup.org<sup>®</sup> , we prioritize transparency and affordability. We offer regular discounts so every student can access the help they need at a price that fits their pocket. With us, no one has to worry about feeling cheated or burdened by prices! </>,
      icon: 'fa fa-credit-card-alt',
    },
    {
      id: 6,
      name: '24 / 7 Support',
      text: `Our dedicated global team is at your service 24/7, including weekends, to tackle academic crises and emergencies with utmost urgency. When we say, "We've got your back," it's a resolute commitment, assuring you of unwavering support whenever you require it.`,
      icon: 'fa fa-clock-o',
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

export default GuranteesBox;
