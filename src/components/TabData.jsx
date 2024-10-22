import React from "react";
import ServicesTabsBtn from "./ServicesTabsBtn";
import Paragraph from "./Paragraph";
import SecondaryHeading from "./SecondaryHeading";
import tabImg2 from "../assets/images/services-img/dissertation.png";
import tabImg3 from "../assets/images/services-img/coursework.webp";
import tabImg4 from "../assets/images/services-img/proofreading.png";
import tabImg5 from "../assets/images/services-img/resume.webp";
import tabImg6 from "../assets/images/services-img/ebook.png";
import tabImg7 from "../assets/images/services-img/content.webp";
import tabImg8 from "../assets/images/services-img/presentation.webp";
import tabImg9 from "../assets/images/services-img/homework.webp";
import tabImg10 from "../assets/images/services-img/article.png";
import tabImg11 from "../assets/images/services-img/thesis.webp";
import tabImg12 from "../assets/images/services-img/researchpaper.webp";
import tabImg13 from "../assets/images/services-img/exam.webp";
import tabImg14 from "../assets/images/services-img/finalproject.webp";
import tabImg15 from "../assets/images/services-img/quiz.webp";
import tabImg16 from "../assets/images/services-img/bookreport.png";
import tabImg17 from "../assets/images/services-img/bookanalysis.webp";
import tabImg18 from "../assets/images/services-img/onlinecourse.webp";
import tabImg19 from "../assets/images/services-img/onlineclass.png";
import tabImg20 from "../assets/images/services-img/researchproposal.webp";
import tabImg21 from "../assets/images/services-img/researchpublic.webp";
import tabImg22 from "../assets/images/services-img/assessment.png";
import tabImg23 from "../assets/images/services-img/casestudy.webp";
import tabImg24 from "../assets/images/services-img/literature.png";
import tabImg25 from "../assets/images/services-img/essay.webp";

const TabData = () => {

const tabImg1 = "https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/d641d4d2-0b91-4df5-d2d9-0c170c647100/compress";



               return [
  {
   name: <ServicesTabsBtn text={"Assignment"} />,
   link: `/assignment`,
   image: tabImg1,
   heading: <SecondaryHeading heading={"Assignment"} />,
   text: (
    <Paragraph
     paragraph={<>Writing an Assignment can be a difficult feat for many students, who are balancing their academic responsibilities with everyday life. Luckily Gradesup.org<sup>®</sup> is here to help! We're the foremost online Assignment consultancy provider in {localStorage.getItem('city')}; having delivered more than 1 million Assignment. Our team of experts guarantee high-quality work that follow correct formatting & referencing guidelines-- providing reliable service so you don't have to worry about your workload or any academic task.!</>}
    />
   ),
   bulletpoints: [
    "Extensive Research",
    "Correct Format",
    "No Plagiarism",
    "Work With No Error",
    "Timely Delivery",
    "Relevant Content",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Dissertation"} />,
   link : `/dissertation-help`,
   image: tabImg2,
   heading: <SecondaryHeading heading={"Dissertation"} />,
   text: (
    <Paragraph
     paragraph={
      <>Need Help with a Dissertation ? At Gradesup.org<sup>®</sup>, our team of Ph.D- Certified Writers hold expertise in their respective fields and international citation standards, making us the go-to choice for your writing needs! We have successfully completed over 125678+ Dissertation Projects that have helped students achieve excellence - so let us show you what we can do too! Just one click away from top quality Dissertation Services and place an Order Now to Get Started Today.</>
     }
    />
   ),
   bulletpoints: [
    "Proper Structure",
    "On-time Delivery",
    "Correct Referencing",
    "Original Content",
    "Unlimited Revisions",
    "Authentic Sources",
   ],
  },
  {
   name: <ServicesTabsBtn text={"CourseWork"} />,
   link : `/coursework-help`,
   image: tabImg3,
   heading: <SecondaryHeading heading={"CourseWork"} />,
   text: (
    <Paragraph
     paragraph={
      "Struggling to write Coursework? Worry no more! Our lightning-quick online Coursework help team has got you covered with over 341234+ successful projects. From selecting the best possible topics for your paper and ensuring perfect documents, we provide students a one-stop solution to impress their professors. Get ready to experience reliable yet efficient assistance done in just short timeframes!"
     }
    />
   ),
   bulletpoints: [
    "No Grammatical Errors",
    "Correct Formatting",
    "Proper Writing Style",
    "Time-bound Delivery",
    "No Plagiarism",
    "Costless Amendments",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Proofreading"} />,
   link : `/proofreading`,
   image: tabImg4,
   heading: <SecondaryHeading heading={"Proofreading"} />,
   text: (
    <Paragraph
     paragraph={`From thesis papers to essays, submitting an error-free document is the key for a successful score. To make that possible, it's important to avail professional proofreading and editing services from experts in the field. Our online Proofreading help providers are here for you with dedicated teams of 100+ experienced professionals who work hard on making sure your documents gain maximum marks! With our wide range of quality assurance solutions at hand -from research assistance to triple-checks – get ready for no mistakes and only top scores ahead!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Cv & Resume"} />,
   link : `/cv-writing`,
   image: tabImg5,
   heading: <SecondaryHeading heading={"Cv & Resume"} />,
   text: (
    <Paragraph
     paragraph={`Searching for Resume Writing Services to secure your dream job or next executive role? Look no further! The best option is a full-service package that provides custom, personalized resumes crafted from scratch and tailored specifically for you. Don't forget - additional features such as cover letters and optimized LinkedIn profiles are also available at an extra cost. Pursue the career of your dreams today with help from the top professional writers around!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Ebook Help"} />,
   link : `/ebook-help`,
   image: tabImg6,
   heading: <SecondaryHeading heading={"Ebook Help"} />,
   text: (
    <Paragraph
     paragraph={<>For those in need of top-level ebook typing services, look no further than Gradesup.org<sup>®</sup> ! Our expert team provides efficient and reliable work that you can trust - so don't spend time endlessly searching for a service provider when we provide the perfect solution to your needs!</>}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Content Writing"} />,
   link : `/content-help`,
   image: tabImg7,
   heading: <SecondaryHeading heading={"Content Writing"} />,
   text: (
    <Paragraph
     paragraph={`Sick of Searching for a reliable Content Writer? Don't waste your time! We've got the perfect solution: let us take care of it. Just tell us what you need and we'll match you with one (or more!) Professional, unique content writers from our talented workforce. Forget endless haggling - writing success is just around the corner!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Presentation"} />,
   link : `/presentations`,
   image: tabImg8,
   heading: <SecondaryHeading heading={"Presentation"} />,
   text: (
    <Paragraph
     paragraph={`Don't let hard work, effort and time spent to create a presentation go to waste! With every PowerPoint slide being an opportunity to share your idea, we understand how important it is for you as the presenter. Captivate your audience with beautiful design that highlights key concepts – make sure those moments of presenting don’t slip away without making an impact.`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Homework"} />,
   link : `/homework-help`,
   image: tabImg9,
   heading: <SecondaryHeading heading={"Homework"} />,
   text: (
    <Paragraph
     paragraph={`At 24x7 Homework Help, we believe that education should never stop. That's why our Expert Tutors are available around the clock to provide online homework and assignment help whenever you need us - no questions asked! Our global team of subject matter experts come together to ensure learning is happening day and night, so your educational goals can always stay on track with consistent support from knowledgeable professionals.`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Articles"} />,
   link : `/articles`,
   image: tabImg10,
   heading: <SecondaryHeading heading={"Articles"} />,
   text: (
    <Paragraph
     paragraph={`At Article Company, we understand the importance of a flexible content creation process. Our strategic partnerships with SEO and PR companies provide an efficient way to quickly access talented writers at cost-effective rates - eliminating any unnecessary delay on your project! Plus, working with our outsourced solution gives you plenty of flexibility for success. Let us utilize our experienced article writers to execute all academic projects without any difficulty or stress.`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Thesis"} />,
   link : `/thesis`,
   image: tabImg11,
   heading: <SecondaryHeading heading={"Thesis"} />,
   text: (
    <Paragraph
     paragraph={`Academic success can often depend on a well-crafted thesis. Our expert writers have the know-how to create an exemplary piece that will help you achieve your maximum potential for marks and recognition in this challenging field. Rest assured - we are here to provide comprehensive, quality writing services tailored to fit any of your academic needs!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Research Paper Help"} />,
   link : `/research-paper-help`,
   image: tabImg12,
   heading: <SecondaryHeading heading={"Research Paper Help"} />,
   text: (
    <Paragraph
     paragraph={`Need help with your research paper? Look no further! Our team of experts specialize in crafting stellar papers that stand out from the crowd. With 24/7 support, we'll make sure that you gain the maximum amount of marks possible on any assignment - guaranteed! Don't spend time stressing over a research project: our quality work speaks for itself.`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Exam Help"} />,
   link : `/exam`,
   image: tabImg13,
   heading: <SecondaryHeading heading={"Exam Help"} />,
   text: (
    <Paragraph
     paragraph={<>Take your online test-taking performance to the next level! Gradesup.org<sup>®</sup> is here with comprehensive solutions and expert help when you need it most, providing everything from essential tips for acing exams to professional tutorial services that can give you a leg up on all of those challenging questions. Don't wait any longer - chat with one of our experts today and get ready to succeed!</>}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Final Year Project"} />,
   link : `/final-year-project`,
   image: tabImg14,
   heading: <SecondaryHeading heading={"Final Year Project"} />,
   text: (
    <Paragraph
     paragraph={`Final year projects can seem intimidating, but they don't have to be. Now you don't need to worry and put yourself in the state of feeling “not at all motivated” because we are here with our final-year project help services that will ensure ease off your workload and make sure it reaches completion on time! No more confusion or stress as now students can find their answers for any assignment hurdles quickly just by contacting us via WhatsApp or Live Chat Support. So secure those grades without overthinking - reach out now for timely assistance from experienced professionals who understand your worries!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Quizzes Help"} />,
   link : `/quizzes`,
   image: tabImg15,
   heading: <SecondaryHeading heading={"Quizzes Help"} />,
   text: (
    <Paragraph
     paragraph={<>Unlock your true potential and get ready to tackle any quiz with Gradesup.org<sup>®</sup>! Our experts are here to help you succeed - they're experienced in all major subjects, available on WhatsApp and always willing to lend a helping hand. Let our masterminds guide you towards success today!</>}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Book Report Help"} />,
   link : `/book-report`,
   image: tabImg16,
   heading: <SecondaryHeading heading={"Book Report Help"} />,
   text: (
    <Paragraph
     paragraph={<>At Gradesup.org<sup>®</sup>, our top-notch specialists deliver an unparalleled experience for all types of book report writing tasks - no matter the subject! Our experts boast impressive degrees from prestigious universities and will craft you a 100%, plagiarism freereport with any individual instructions taken into account. For further requests or inquiries, simply use our real time online chat feature to get in touch directly!</>}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Book Analysis Help"} />,
   link : `/book-analysis-help`,
   image: tabImg17,
   heading: <SecondaryHeading heading={"Book Analysis Help"} />,
   text: (
    <Paragraph
     paragraph={`Your professor has just assigned you a literary analysis. You have no idea what that is, let alone how to write one. The first thing to understand is that a literary analysis involves literature and the discussion of some aspect of it. For example, if you have been assigned a literary anaysis on Charles Dickens' A Tale of Two Cities, you may want to write it on Sydney Carton's role as a Christ figure in the novel.`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Online Courses Help"} />,
   link : `/online-courses-help`,
   image: tabImg18,
   heading: <SecondaryHeading heading={"Online Courses Help"} />,
   text: (
    <Paragraph
     paragraph={`Are you feeling overwhelmed by your professor's literary analysis assignment? Don't worry, our experts can help! To get started with a successful essay on the subject, it is important to understand what a literary analysis is. A good example of this would be if you decided to write an essay examining Charles Dickens' 'A Tale of Two Cities'. You may choose to discuss Sydney Carton as an allegorical representation or Christ figure in the novel and build from there. Online Course Help has got your back - let us provide professional guidance for achieving success in this task!`}
    />
   ),
   bulletpoints: [
    "100% A+ Grades",
    "No Misconceptions",
    "Best Structuring",
    "Valuable Results",
    "Finest Quality Work",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Online Classes Help"} />,
   link : `/online-classes`,
   image: tabImg19,
   heading: <SecondaryHeading heading={"Online Classes Help"} />,
   text: (
    <Paragraph
     paragraph={<>Take control of your online studies and make sure you get the grades you deserve without spending all day in class! With Gradesup<sup>®</sup> Experts, achieving success is easier than ever. Let our team take over for a guaranteed A or B grade so that busy life schedule can't hold back your academic progress anymore.</>}
    />
   ),
   bulletpoints: [
    "Strict Citation Rules",
    "Highest Quality Of Work Ethic",
    "Your Location Safety",
    "Finest Quality Work",
    "Valuable Results",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Research Proposal Help"} />,
   link : `/research-proposal`,
   image: tabImg20,
   heading: <SecondaryHeading heading={"Research Proposal Help"} />,
   text: (
    <Paragraph
     paragraph={<>Are you struggling to find time for your Research Proposal due to a jam-packed lifestyle? Let Gradesup<sup>®</sup> provide the solution! Our expert team can take care of all aspects involved, from taking the exam and passing with an A or B grade guarantee, right through to completing homework assignments. Dont wait any longer - let us help make sure you succeed academically today!</>}
    />
   ),
   bulletpoints: [
    "Strict Citation Rules",
    "Highest Quality Of Work Ethic",
    "Your Location Safety",
    "Finest Quality Work",
    "Valuable Results",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Research Publication Help"} />,
   link : `/research-publication`,
   image: tabImg21,
   heading: <SecondaryHeading heading={"Research Publication Help"} />,
   text: (
    <Paragraph
     paragraph={<>For Ph.D. students and senior researchers alike, Gradesup<sup>®</sup> is here to make publishing research easier! Our experts are available at every step of the process to ensure a smooth journey towards your goal - plus we have packages that fit any requirement or budget. Your paper will be reviewed by our panelists who provide helpful comments on how you can improve it before submitting it; they'll also help determine which journal’s right for you and even offer post-submission support when needed! Take advantage today of getting professional feedback from real people in an effortless way - with Gradesup<sup>®</sup> there's no need to worry about publication deadlines again.</>}
    />
   ),
   bulletpoints: [
    "Journal Selection",
    "Premium editing",
    "Resubmission Support",
    "Pre-submission Peer Review",
    "Finest Quality Work",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Assessment Help"} />,
   link : `/assessment`,
   image: tabImg22,
   heading: <SecondaryHeading heading={"Assessment Help"} />,
   text: (
    <Paragraph
     paragraph={`Online assessments can be the key to unlocking educational success - but without sufficient time and focus, this door may remain closed. That's why we offer assessment help for those who need it: so you don't miss out on essential grades that could make all the difference in your academic performance. Get expert support today!`}
    />
   ),
   bulletpoints: [
    "Multi essay types flexibility",
    "Adherence to your university guidelines",
    "Familiarity with referencing formats",
    "Credible facts, figures, and examples",
    "Your institution’s marking rubric",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Casestudy Help"} />,
   link : `/casestudy`,
   image: tabImg23,
   heading: <SecondaryHeading heading={"Casestudy Help"} />,
   text: (
    <Paragraph
     paragraph={`The academic struggles of students can be easily overcome by hiring an expert case study help service. We provide one-stop solutions to all your assignment tasks with a 100% satisfaction guarantee! Our team of professional writers specialize in Business Marketing, Finance & Accounting, Business Law, Nursing and Engineering; ensuring the delivery of top quality work every time. Let us take care of the heavy lifting while you focus on achieving success!`}
    />
   ),
   bulletpoints: [
    "Journal Selection",
    "Premium editing",
    "Resubmission Support",
    "Pre-submission Peer Review",
    "Finest Quality Work",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Literature Review Help"} />,
   link : `/literature-review`,
   image: tabImg24,
   heading: <SecondaryHeading heading={"Literature Review Help"} />,
   text: (
    <Paragraph
     paragraph={<>Are you facing difficulty completing your literature review and grades are suffering? Gradesup.org<sup>®</sup> has the solution! Our team of expert writers can assist with crafting a top-notch paper to ensure an outstanding grade. We guarantee that every assignment we complete is tailored to exceed all expectations, while maintaining professional standards at all times - as demonstrated by our satisfied customers in their reviews worldwide! Make your life easier now; take advantage of our reliable services today!</>}
    />
   ),
   bulletpoints: [
    "Journal Selection",
    "Premium editing",
    "Resubmission Support",
    "Pre-submission Peer Review",
    "Finest Quality Work",
    "Quality Work",
   ],
  },
  {
   name: <ServicesTabsBtn text={"Essay Help"} />,
   link : `/essay-help`,
   image: tabImg25,
   heading: <SecondaryHeading heading={"Essay Help"} />,
   text: (
    <Paragraph
     paragraph={`Need help crafting an essay? We've got you covered! Our team of experienced writers is ready to take on your assignment and deliver quality results. Look no further for the perfect solution - get in touch today!`}
    />
   ),
   bulletpoints: [
    "Correct Grammar",
    "No Punctuation Errors",
    "Best Formatting",
    "Excellent Editors",
    "Top-notch Proofreaders",
    "Quality Work",
   ],
  },
 ];
};

export default TabData;