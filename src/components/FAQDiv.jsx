import React, { useState } from "react";
import SecondaryHeading from "./SecondaryHeading";
import Paragraph from "./Paragraph";

const FAQDiv = ({changeText}) => {
  const [activeQuestion, setActiveQuestion] = useState(null); // Track the active (opened) FAQ question

  const faqData = [
    {
      id:1,
      question: 'Who are the Gradesup.org®?',
      answer:
        <>Gradesup.org<sup>®</sup> is a leader in Academic Solutions, providing students at all levels worldwide with the highest-quality support whenever they need it. Our commitment to excellence ensures every student has access to top academic services and resources needed to succeed!</>,
    },
    {
      id:2,
      question: 'How quickly can I get help from Gradesup.org®?',
      answer:
        <>Gradesup.org<sup>®</sup> is here to help with any task you need assistance on! Submit your help requests at least 3 hours prior to the due date for us to properly assign an expert and ensure timely delivery. Rest assured, quality work will be delivered well ahead of schedule!</>,
    },
    {
      id:3,
      question: `Can A Gradesup.org® do my ${changeText} Task?`,
      answer:
        <>Overwhelmed by the daunting task of completing Tutoring? Look no further than Gradesup.org<sup>®</sup>! We offer guidance on any assignment as long as it complies with university and corporate policy standards. Our service provides materials, detailed explanations, and a structured plan to make research easier for students - all within the framework of our Honor Code!</>,
    },
    {
      id:4,
      question: `Get Special Discount for First ${changeText} Order?`,
      answer:
        <>Take advantage of Gradesup.org<sup>®</sup>'s exclusive welcome offer! As a first-time buyer, you may be eligible for an instant discount of up to 15%, Loyalty Program bonuses, and additional services like plagiarism reports or VIP support - all free of charge. Don't miss out on this special opportunity. Discuss with our experts today and learn more about the available offers!</>,
    },
    {
      id:5,
      question: `Do you Guarantee the Grade if you Write my ${changeText}?`,
      answer:
        "While we pride ourselves on providing quality work, novel ideas, and timely delivery, the final grade of any Tutoring Writing is beyond our control. Grading varies based on factors unrelated to an Tutoring itself, which influence its outcome. Therefore, we cannot guarantee the grades awarded by teachers or professors.",
    },
    {
      id:6,
      question:
        'Does Gradesup.org® Provide 24/7 Support for Instant Academic Help?',
      answer:
        <>At Gradesup.org<sup>®</sup>, our passionate team of experts is available around the clock to provide you with instant academic help and solutions whenever needed! Get reliable support anytime, day or night, so you can stay on track in your studies - no matter what challenges you face!</>,
    },
  ];

  const handleToggle = (question) => {
    setActiveQuestion((prevQuestion) =>
      prevQuestion === question ? null : question
    ); // Toggle the active question
  };

  return (
    <>
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className={`faq ${activeQuestion === faq.question ? "active" : ""}`}
        >
          <div className="question" onClick={() => handleToggle(faq.question)}>
            <SecondaryHeading heading={faq.question} />
          </div>
          {activeQuestion === faq.question && (
            <div className="answer">
              <Paragraph paragraph={faq.answer} />
            </div>
          )}
        </div>
      ))}
      <div id="reviews"></div>
    </>
  );
};

export default FAQDiv;
