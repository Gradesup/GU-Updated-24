import React from "react";
import NavbarBtn from './NavbarBtn';
import SecondaryHeading from "./SecondaryHeading";
import Paragraph from "./Paragraph";
import rating from '../assets/images/rating.png'


const subjects = [
  {
    title: "Accounting",
    className: "fa fa-book font-font-sze",
    paragraph:
      "Accounting is an essential part of a business and helps to develop successful financial strategies. There are three types of accounting--Managerial, Financial, and Cost Accounting--each providing important insights into the fiscal well-being of any organization. With careful consideration these can help you form reliable forecasts for your business advancement!",
  },
  {
    title: "Business",
    className: "fa fa-briefcase font-font-sze",
    paragraph:
      "Establishing a business is the first step to creating an enterprise. It involves taking on professional activities whether they’re commercial or industrial, with either for-profit or non-profit goals in mind. The former looks towards earning monetary gains while the latter searches for ways to further philanthropic objectives.",
  },
  {
    title: "Nursing",
    className: "fa fa-user-md font-font-sze",
    paragraph:
      "Nursing professionals work diligently to provide holistic care for those in need, from individuals facing injury or illness to entire communities any their well-being. Their tireless efforts ensure that everyone can benefit from an attentive and compassionate level of service.",
  },
  {
    title: "HRM",
    className: "fa fa-building font-font-sze",
    paragraph:
      "Human resource management (HRM) is an essential part of running a successful organization. Over the last two decades, the HR field has seen substantial changes which have placed even greater importance on this discipline within companies today. Professionals in HR are tasked with managing employees; training them to reach their potential and create beneficial policies while also strategizing ways to increase employee retention and satisfaction.",
  },
  {
    title: "Medical",
    className: "fa fa-medkit font-font-sze",
    paragraph:
      "Pursuing medical courses can open up a world of possibilities in the healthcare field. From specializations such as biomedical and paramedical sciences to pharmacy, nursing, allied health and beyond - students are able to explore an array of career paths that will help make positive impacts on their community. To get the most out if this educational journey however , it is important for candidates to dedicate themselves fully with sincere efforts – all so they may one day serve those who need them most!",
  },
  {
    title: "ANTHROPOLOGY",
    className: "fa fa-users font-font-sze",
    paragraph: `Anthropology delves into the depths of humanity, exploring our individual and collective experiences to understand what makes us so unique. By taking a holistic approach, anthropologists can gain insights into how we interact with one another while developing an appreciation for each person's contribution to society as a whole.`,
  },
  {
    title: "BIOLOGY",
    className: "fa fa-stethoscope font-font-sze",
    paragraph: `Biology is an intriguing field of study, providing exploration into all aspects of the living world. From exploring how species evolve and interact to understanding cellular mechanisms; biologists delve deep in discovering our ever-changing planet's secrets! With specialties ranging from botany and conservation ecology to genetics, medicine, zoology - it’s no wonder biology fascinates us so incredibly much.`,
  },
  {
    title: "CHEMISTRY",
    className: "fa fa-flask font-font-sze",
    paragraph:
      <>Chemistry is a branch of science that deals with the form and properties of matter and substances or the interaction between individuals. A Gradesup.org<sup>®</sup> of chemistry is the study of protons and neutrons. A Gradesup.org<sup>®</sup> of chemistry is the feeling of affection and attraction between a couple.</>,
  },
  {
    title: "FINANCE",
    className: "fa fa-dollar font-font-sze",
    paragraph:
      "Financing is the vital key to unlocking economic opportunities. It enables businesses, organizations and individuals to leverage funds in order to realize their goals or bring ideas into reality. Without it, growth may be stunted or ambitions left unrealized - making financing an essential component of a successful economy!",
  },
  {
    title: "HISTORY",
    className: "fa fa-history font-font-sze",
    paragraph:
      "History is the fascinating study of humanity’s evolution over time. From politics and social movements, to economics and science & technology advancement; from culture & religion through to medicine - history paints a vivid picture of how far we have come as a species.",
  },
  {
    title: "LAW",
    className: "fa fa-gavel font-font-sze",
    paragraph: <>Laws are an integral part of any functioning society, as they're designed to keep its people safe and protected. At Gradesup.org<sup>®</sup> we take our responsibility seriously; that's why there is a clear no-stealing policy in most places - so everyone can enjoy the peace of mind knowing their property remains secure!</>,
  },
  {
    title: "OTHERS",
    className: "fa fa-list font-font-sze",
    paragraph:
      "Our team of professionals offer a wide array of services to meet your specific needs. From various subjects in academics, personal growth and development, we have you covered. Discover what our experts can do for you today!",
  },
];
const subjects2 = [
  {
    title: "APPLICATION LETTERS",
    className: "fa fa-pencil",
    paragraph: `A letter of application is an excellent way to showcase your skills and qualifications while expressing yourself in a unique manner. This one-page document provides you with the opportunity to highlight what makes you special, creating lasting impact that can help set your resume apart from job contenders. By crafting a well-structured cover letter, it's possible for employers to gain meaningful insight into who may be best suited for the position being offered - so make sure yours packs a punch!`,
  },
  {
    title: "ART & ARCHITECTURE",
    className: "fa fa-bar-chart font-font-sze",
    paragraph: `Architecture and art have intertwined since history began; together, they've formed a captivating collaboration of human expression. Many believe that architecture is born from the creative genius of technology and building coming together to form something unique & remarkable.`,
  },
  {
    title: "FAMILY AND CONSUMER SCIENCE",
    className: "fa fa-handshake-o font-font-sze",
    paragraph:
      "Family and Consumer Sciences investigate the connections between humans, their surroundings and how these interrelations impact habits and growth. Our department specializes in investigating diverse streams such as biologicals , physical, social & monetary factors to fathom human behaviour.",
  },
  {
    title: "FILM & THEATER STUDIES",
    className: "fa fa-camera-retro",
    paragraph:
      "Explore the captivating world of theatre and film studies through a unique liberal arts program that bridges critical analysis with hands-on learning. Delve into performance across multiple media, cultures, and time periods to uncover unexpected findings!",
  },
];

const SubjectBoxItem = React.memo(
  ({ title, paragraph, className }) => {
    const secondHeadingStyle = {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "400",
      textTransform: "uppercase",
    };

    return (
        <div className="service-box text-white">
          <div className="service-icon yellow">
            <div className="front-content">
              <i className={className}></i>
              <SecondaryHeading heading={title} style={secondHeadingStyle} />
              <div className="mt-1 mt-0-480">
              <img
                src={rating}
                alt="stars"
                className="star"
              />
              </div>
            </div>
          </div>
          <div className="service-content">
            <h4>{title}</h4>
            <Paragraph paragraph={paragraph} />
          </div>
        </div>
    );
  },
  (prevProps, nextProps) => {
    // Compare props here and return true if they are equal, false otherwise
    // Provide custom comparison logic based on your requirements
    return (
      prevProps.title === nextProps.title &&
      prevProps.paragraph === nextProps.paragraph &&
      prevProps.className === nextProps.className
    );
  }
);

const SubjectsBox = () => {
  return (
    <>
    <div className="Subjects-Box">
        {subjects.map((subject, index) => (
          <SubjectBoxItem
            key={index}
            title={subject.title}
            paragraph={subject.paragraph}
            className={subject.className}
          />
        ))}
    </div>
    <div className="Subjects-Box-2">
        {subjects2.map((subject, index) => (
          <SubjectBoxItem
            key={index}
            title={subject.title}
            paragraph={subject.paragraph}
            className={subject.className}
          />
        ))}
    </div>
    <div className="navbarBtn mt-4 justify-content-center">
              <NavbarBtn
                className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                btnText="Get Started Now"
                btnLink={`/order-form`}
                icon="fa fa-shopping-cart"
              />
            </div>
    </>
  );
};

export default SubjectsBox;