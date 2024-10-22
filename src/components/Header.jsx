import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import NavbarBtn from './NavbarBtn';
import useWeatherData from './useWeatherData';
import menuIcon from '../assets/images/site-logo/icons8-hamburger-64.png';
import { HashLink as Link } from 'react-router-hash-link';
// import PageTitles from "../inner-pages/PageTitle";
import {Helmet} from "react-helmet";


const Header = ({whatsappNumber , openTawkToChat,dynamicCountry }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navbarSticky , setNavbarSticky] = useState(false);
  const location = useLocation();
  
  const logoImg = 'https://gradesup.org/new-images/logo.png';

  const defaultPageData = {
    title: 'Best Tutoring Help | Gradesup®.Org',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  };
  
  const domain = 'https://gradesup.org';
  
  const clearTags = (tagName, attributeName, attributeValue) => {
    const elements = document.getElementsByTagName(tagName);
    Array.from(elements).forEach((element) => {
      if (element.getAttribute(attributeName) === attributeValue) {
        element.remove();
      }
    });
  };


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////                                                              PAGE TITLE DATA

const PageTitles = [  
  {
    path: `${dynamicCountry}/`,
    title: 'Best Tutoring Help | Gradesup.Org®',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  },
  {
    path: `${dynamicCountry}/about`,
    title: 'About Us | Gradesup.Org®',
    description: 'Experience exceptional academic help with our trusted service. Get expert assistance, timely delivery, and top-notch quality for all your assignments. Achieve academic success with us.',
  },
  {
    path: `${dynamicCountry}/contact`,
    title: 'Contact Us | Gradesup.Org®',
    description: ` Have questions or need assistance? Contact our reliable academic help service team. We're here to provide prompt support, answer your queries, and ensure a smooth experience. Reach out to us today! `,
  },
  {
    path: `${dynamicCountry}/thankyou`,
    title: 'Thankyou | Gradesup.Org® ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!  `,
  },
  {
    path: `${dynamicCountry}/refund-policy`,
    title: 'Refund Policy | Gradesup.Org® ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/cancellation-policy`,
    title: 'Cancellation Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/services-policy`,
    title: 'Services Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/privacy-policy`,
    title: 'Privacy Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/terms-conditions`,
    title: 'Terms & Conditions Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/fair-usage-policy`,
    title: 'Fair Usage Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/gdrp_policy`,
    title: 'GDRP Data Protection Policy | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/order-form`,
    title: 'Order Form | Gradesup.Org®  ',
    description: ` Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/dissertation-help`,
    title: 'Best Dissertation Consultancy Services | Gradesup.Org® ',
    description: 'Need professional assistance with your dissertation? Contact us for top-notch dissertation help tailored to your specific needs. Achieve academic excellence with our expert guidance and support.',
  },
  {
    path: `${dynamicCountry}/pdf-ebook`,
    title: 'Best Ebook Consultancy Service | Gradesup.Org®  ',
    description: `Unlock the potential of your ebook with our professional assistance. From writing and editing to design and publishing, we offer comprehensive ebook help to make your vision a reality. Stand out in the digital world and maximize your ebook's success with our expert guidance.`,
  },
  {
    path: `${dynamicCountry}/articles`,
    title: 'Best Articles Consultancy Service | Gradesup.Org®   ',
    description: `Elevate your content game with our expert articles writing help. From engaging introductions to captivating conclusions, we craft compelling articles that drive traffic and engage readers. Boost your online presence and establish authority with our professional assistance. `,
  },
  {
    path: `${dynamicCountry}/content-help`,
    title: 'Best Content Consultancy Service | Gradesup.Org®    ',
    description: `Unlock the power of captivating content with our professional content help services. Boost engagement, drive traffic, and elevate your brand with our expert assistance. `,
  },
  {
    path: `${dynamicCountry}/exam`,
    title: 'Best Exam Help Service | Gradesup.Org®   ',
    description: `Ace your exams with our expert exam help services. Prepare effectively, gain confidence, and achieve outstanding results. Get the support you need to excel and conquer your exams with ease. `,
  },
  {
    path: `${dynamicCountry}/quizzes`,
    title: 'Best Quizzes Help | Gradesup.Org®   ',
    description: `Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today! `,
  },
  {
    path: `${dynamicCountry}/book-report`,
    title: 'Best Book Report Help | Gradesup.Org®  ',
    description: `Elevate your content game with our expert articles writing help. From engaging introductions to captivating conclusions, we craft compelling articles that drive traffic and engage readers. Boost your online presence and establish authority with our professional assistance.  `,
  },
  {
    path: `${dynamicCountry}/assessment`,
    title: 'Best Assignment Writing Service | Gradesup.Org® ',
    description: `Excel in assessments with our expert help. Our dedicated team provides comprehensive support, insightful analysis, and top-notch guidance to ensure your success. Boost your grades and unleash your full potential with our professional assessment assistance. `,
  },
  {
    path: `${dynamicCountry}/book-analysis-help`,
    title: 'Best Book Analysis Help | Gradesup.Org®  ',
    description: `Deepen your understanding with our expert book analysis help. Our skilled analysts provide insightful interpretations, critical evaluations, and comprehensive breakdowns to enhance your literary exploration. Unlock the layers of meaning and excel in your academic pursuits with our professional assistance.  `,
  },
  {
    path: `${dynamicCountry}/online-classes`,
    title: 'Best Online Classes Help | Gradesup.Org®   ',
    description: `Elevate your learning with convenient online classes. Gain knowledge, enhance skills, and achieve success from the comfort of your own home. Enroll now for a transformative educational experience. `,
  },
  {
    path: `${dynamicCountry}/research-proposal`,
    title: 'Best Research Proposal Help Service | Gradesup.Org® ',
    description: `Get the best research proposal help from experienced professionals. We offer tailored assistance to ensure your research proposal stands out and gets approved. Boost your chances of success today! `,
  },
  {
    path: `${dynamicCountry}/casestudy`,
    title: 'Best Casestudy Help Service | Gradesup.Org®  ',
    description: `Unlock the secrets of compelling case studies with our professional help. Gain valuable insights, expert analysis, and impeccable formatting to create impactful case studies that impress. Achieve excellence in your academic or business endeavors with our trusted assistance.  `,
  },
  {
    path: `${dynamicCountry}/literature-review`,
    title: 'Best Literature Review Help Service | Gradesup.Org®  ',
    description: `Uncover the key insights and critical analysis in your literature review with our expert assistance. Our experienced writers provide comprehensive and well-structured reviews to enhance your research. Excel in your academic pursuits with our professional guidance. `,
  },
  {
    path: `${dynamicCountry}/final-year-project`,
    title: 'Best Final Year Project Help | Gradesup.Org®   ',
    description: `Embark on a successful academic journey with our final year project assistance. Our expert guidance and support ensure a stellar project outcome. Achieve excellence and stand out with our professional services.`,
  },
  {
    path: `${dynamicCountry}/proof-reading`,
    title: 'Best Proofreading & Editing Consultancy Service | Gradesup.Org®   ',
    description: `Ensure flawless written work with our professional proofreading help. Our meticulous editors polish your documents, eliminating errors and enhancing clarity. Enhance the impact of your writing and make a lasting impression with our expert assistance. `,
  },
  {
    path: `${dynamicCountry}/presentations`,
    title: 'Best Presentation Consultancy Service | Gradesup.Org®  ',
    description: 'Deliver impactful presentations that captivate your audience with our professional presentation help. Stand out, boost confidence, and leave a lasting impression. Elevate your presentation skills and succeed with our expert assistance.',
  },
  {
    path: `${dynamicCountry}/write-my-assignment`,
    title: 'Best Assignment Writers | Gradesup.Org®',
    description: 'Need assistance with your assignments? Our expert team is here to help! Get high-quality, custom-written assignments delivered on time. Contact us now!',
  },
  {
    path: `${dynamicCountry}/assignment-writer`,
    title: 'Best Assignment Writers Service | Gradesup.Org®',
    description: 'Hire a skilled and experienced assignment writer for top-notch academic assistance. Get personalized and well-researched assignments to excel in your studies. Contact us today!',
  },
  {
    path: `${dynamicCountry}/do-my-assignment`,
    title: 'Best Do My Assignment Service | Gradesup.Org®',
    description: 'Hire a skilled and experienced assignment writer for top-notch academic assistance. Get personalized and well-researched assignments to excel in your studies. Contact us today!',
  },
  {
    path: `${dynamicCountry}/pay-for-assignment`,
    title: 'Best Assignment Writers | Gradesup.Org®',
    description: 'Struggling with assignments? Pay for assignment help and relieve your academic stress. Our expert writers deliver quality work on time. Contact us now!',
  },
  {
    path: `${dynamicCountry}/buy-assignment`,
    title: 'Best Buy Assignment Service | Gradesup.Org®',
    description: 'Looking to buy assignments online? Get professionally written, custom assignments that guarantee academic success. Order now and elevate your grades!',
  },
  {
    path: `${dynamicCountry}/perdisco-assignment`,
    title: 'Best Perdisco Assignment Service | Gradesup.Org®',
    description: 'Struggling with Perdisco assignments? Get expert help for your Perdisco assignments and ace your exams. Boost your grades with our professional assistance!',
  },
  {
    path: `${dynamicCountry}/assignment-service`,
    title: 'Best Assignment Service | Gradesup.Org®',
    description: 'Need reliable assignment service? Our expert team provides top-quality solutions for all your academic needs. Get exceptional results with our trusted assistance!',
  },
  {
    path: `${dynamicCountry}/assignment`,
    title: 'Best Assignment Service | Gradesup.Org®',
    description: 'Struggling with assignments? Get professional assignment help from experts in your field. Achieve academic success with our reliable and efficient assistance.',
  },
  {
    path: `${dynamicCountry}/help-with-dissertation`,
    title: 'Best Help with Dissertation Service | Gradesup.Org®',
    description: 'Need help with your dissertation? Our experienced team provides comprehensive assistance for a successful thesis. Get expert help to excel in your research!',
  },
  {
    path: `${dynamicCountry}/write-my-dissertation`,
    title: 'Best Help with Dissertation Service | Gradesup.Org®',
    description: 'Struggling with your dissertation? Entrust your academic success to our expert writers. Get top-quality, custom-written dissertations tailored to your needs. Contact us today!',
  },
  {
    path: `${dynamicCountry}/dissertation-writer`,
    title: 'Best Help with Dissertation Writer | Gradesup.Org®',
    description: 'Hire a skilled dissertation writer for exceptional academic support. Our experts deliver customized, high-quality dissertations to ensure your success. Contact us now!',
  },
  {
    path: `${dynamicCountry}/do-my-dissertation`,
    title: 'Best Do My Dissertation Service | Gradesup.Org®',
    description: 'Do my dissertation with confidence! Our professional writers are ready to handle your academic burden. Get top-notch results with our expert assistance today!',
  },
  {
    path: `${dynamicCountry}/pay-for-dissertation`,
    title: 'Best Pay for Dissertation Service | Gradesup.Org®',
    description: 'Looking for quality dissertation help? Pay for dissertation services and secure your academic success. Expert writers, timely delivery, and top-notch results guaranteed!',
  },
  {
    path: `${dynamicCountry}/buy-dissertation`,
    title: 'Best Buy Dissertation Service | Gradesup.Org®',
    description: 'Buy dissertation online from trusted experts. Take a step towards academic excellence with our custom-written, high-quality dissertations. Order yours today!',
  },
  {
    path: `${dynamicCountry}/dissertation-writing-service`,
    title: 'Best Dissertation Writing Service | Gradesup.Org®',
    description: 'Get professional dissertation writing service for top-notch academic results. Our expert writers deliver custom, high-quality dissertations. Elevate your research now!',
  },
  {
    path: `${dynamicCountry}/dissertation-service`,
    title: 'Best Dissertation Consultancy Service | Gradesup.Org®',
    description: 'Experience exceptional dissertation service for your academic needs. Our expert team delivers high-quality, customized dissertations to ensure your success. Contact us today!',
  },
  {
    path: `${dynamicCountry}/help-with-essay`,
    title: 'Best Help With Essays | Gradesup.Org®',
    description: 'Struggling with your essay? Get expert help with essay writing and excel in your academics. Our professional writers provide reliable and top-notch assistance',
  },
  {
    path: `${dynamicCountry}/write-my-essay`,
    title: 'Best Write My Essay Service | Gradesup.Org®',
    description: 'Need someone to write your essay? Get professional help from our expert writers. Achieve top grades and save time with our reliable essay writing service.',
  },
  {
    path: `${dynamicCountry}/essay-writer`,
    title: 'Best Essay Writer Service | Gradesup.Org®',
    description: 'Hire a skilled essay writer for top-quality academic assistance. Get personalized, well-researched essays delivered on time. Boost your grades with our expert help.',
  },
  {
    path: `${dynamicCountry}/do-my-essay`,
    title: 'Best Do My Essay Service | Gradesup.Org®',
    description: 'Feeling overwhelmed with essay deadlines? Our experts are here to help! Get high-quality, custom-written essays delivered on time. Let us handle it for you!',
  },
  {
    path: `${dynamicCountry}/pay-for-essay`,
    title: 'Best Pay For Essay Service | Gradesup.Org®',
    description: 'Get top-notch quality essays by paying for our professional essay writing service. Our experienced writers deliver custom-written, plagiarism-free essays to meet your academic needs. Achieve academic excellence with our reliable and convenient essay writing solutions.',
  },
  {
    path: `${dynamicCountry}/buy-essay`,
    title: 'Best Pay For Essay Service | Gradesup.Org®',
    description: 'Buy high-quality essays from our trusted service. Our expert writers deliver custom-written, original content tailored to your requirements. Take the stress out of academic writing and achieve success with our reliable essay-buying solution.',
  },
  {
    path: `${dynamicCountry}/essay-writing-service`,
    title: 'Best Essay Writing Service | Gradesup.Org®',
    description: 'Experience top-notch essay writing service for all your academic needs. Our expert writers deliver custom-written, high-quality essays on time. Excel in your studies with our reliable and professional assistance.',
  },
  {
    path: `${dynamicCountry}/essay-help`,
    title: 'Best Essay Help Service | Gradesup.Org®',
    description: 'Get expert essay help for stellar academic success. Our experienced writers deliver high-quality, custom essays tailored to your needs. Ace your assignments today!',
  },
  {
    path: `${dynamicCountry}/help-with-homework`,
    title: 'Best Help With Homework Service | Gradesup.Org®',
    description: 'Get reliable help with homework to achieve academic success. Our expert tutors provide personalized assistance, ensuring timely completion and top-quality work. Excel in your studies with our professional homework help services.',
  },
  {
    path: `${dynamicCountry}/write-my-homework`,
    title: 'Best Write My Homework Service | Gradesup.Org®',
    description: 'Delegate your homework worries to us. Our expert team will write your homework with precision and deliver it on time. Experience stress-free academic success with our reliable "write my homework" service.',
  },
  {
    path: `${dynamicCountry}/homework-writer`,
    title: 'Best Homework Writer Service | Gradesup.Org®',
    description: 'Need a skilled homework writer? Look no further. Our professional writers are ready to tackle your assignments with expertise and precision. Get high-quality homework written just for you.',
  },
  {
    path: `${dynamicCountry}/do-my-homework`,
    title: 'Best Do My Homework Service | Gradesup.Org®',
    description: 'Struggling with homework? Let our experts handle it for you. Say goodbye to stress and get your homework done efficiently. Experience academic success with our reliable "do my homework" service.',
  },
  {
    path: `${dynamicCountry}/pay-for-homework`,
    title: 'Best Pay For Homework Service | Gradesup.Org®',
    description: 'Pay for homework and unlock your academic potential. Our experts deliver high-quality, custom-written assignments on time. Experience convenience and excellence with our reliable homework payment service.',
  },
  {
    path: `${dynamicCountry}/buy-homework`,
    title: 'Best Buy Homework Service | Gradesup.Org®',
    description: 'Buy homework solutions tailored to your academic needs. Our experts provide custom-written assignments that guarantee top grades. Experience convenience and success with our reliable buy homework service.',
  },
  {
    path: `${dynamicCountry}/homework-writing-service`,
    title: 'Best Homework Writing Service | Gradesup.Org®',
    description: 'Experience excellence with our professional homework writing service. Our expert writers deliver high-quality, custom-written assignments tailored to your academic requirements. Achieve success with our reliable and efficient homework writing solutions.',
  },
  {
    path: `${dynamicCountry}/homework-help`,
    title: 'Best Homework Help Service | Gradesup.Org®',
    description: "Don't let homework stress you out. Get reliable homework help from experts and ensure top grades. Say goodbye to late nights and hello to academic success with our trusted assistance.",
  },
  {
    path: `${dynamicCountry}/help-with-coursework`,
    title: 'Best Help With Coursework Service | Gradesup.Org®',
    description: 'Get expert help with coursework to excel in your studies. Our dedicated team provides personalized assistance, valuable resources, and timely support. Boost your grades and achieve academic success with our reliable "help with coursework" services.',
  },
  {
    path: `${dynamicCountry}/write-my-coursework`,
    title: 'Best Write My Coursework Service | Gradesup.Org®',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  },
  {
    path: `${dynamicCountry}/coursework-writer`,
    title: 'Best Coursework Writer Service | Gradesup.Org®',
    description: 'Looking for a skilled coursework writer? Our experienced team delivers high-quality, custom-written coursework tailored to your academic needs. Excel in your studies with the help of our professional and reliable coursework writing services.',
  },
  {
    path: `${dynamicCountry}/do-my-coursework`,
    title: 'Best Do My Coursework Service | Gradesup.Org®',
    description: 'Struggling with coursework? Let our experts handle it for you. Say goodbye to stress and get your coursework done efficiently. Experience academic success with our reliable "do my coursework" service.',
  },
  {
    path: `${dynamicCountry}/pay-for-coursework`,
    title: 'Best Pay For Coursework Service | Gradesup.Org®',
    description: 'Pay for coursework and unlock your academic potential. Our experts deliver high-quality, custom-written assignments on time. Experience convenience and excellence with our reliable coursework payment service.',
  },
  {
    path: `${dynamicCountry}/buy-coursework`,
    title: 'Best Buy Coursework Service | Gradesup.Org®',
    description: 'Achieve academic success with our high-quality coursework solutions. Buy custom-written assignments tailored to your needs and secure top grades. Experience convenience and excellence with our reliable coursework service.',
  },
  {
    path: `${dynamicCountry}/coursework-writing-service`,
    title: 'Best Coursework Writing Service | Gradesup.Org®',
    description: 'Experience excellence with our professional coursework writing service. Our expert writers deliver high-quality, custom-written assignments tailored to your academic requirements. Achieve success with our reliable and efficient coursework writing solutions.',
  },
  {
    path: `${dynamicCountry}/coursework-help`,
    title: 'Best Coursework Help Service | Gradesup.Org®',
    description: 'Struggling with coursework? Get professional coursework help and elevate your academic performance. Our experienced team ensures top-quality work and timely delivery. Excel in your studies with our expert assistance.',
  },
  {
    path: `${dynamicCountry}/help-with-ebook`,
    title: 'Best Help With Ebook Service | Gradesup.Org®',
    description: 'Get expert help with your ebook creation. Our experienced team provides valuable assistance and guidance throughout the process. Elevate your ebook to the next level with our reliable "help with ebook" services.',
  },
  {
    path: `${dynamicCountry}/write-my-ebook`,
    title: 'Best Write My Ebook Service | Gradesup.Org®',
    description: 'Need an engaging and professionally written ebook? Our skilled team is here to help. Get your ideas transformed into a captivating masterpiece with our reliable "write-my-ebook" service. Experience the power of compelling storytelling today.',
  },
  {
    path: `${dynamicCountry}/ebook-writer`,
    title: 'Best Ebook Writer Service | Gradesup.Org®',
    description: 'Looking for an experienced ebook writer? Our skilled team delivers captivating and well-crafted ebooks tailored to your needs. Unlock the potential of your story with our professional "ebook writer" service and engage your readers from start to finish.',
  },
  {
    path: `${dynamicCountry}/do-my-ebook`,
    title: 'Best Do My Ebook Service | Gradesup.Org®',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  },
  {
    path: `${dynamicCountry}/pay-for-ebook`,
    title: 'Best Pay For Ebook Service | Gradesup.Org®',
    description: 'Unlock the power of your story with our professional ebook services. Pay for an expertly crafted ebook that captivates readers and leaves a lasting impact. Experience convenience and quality with our reliable "pay for ebook" service.',
  },
  {
    path: `${dynamicCountry}/buy-ebook`,
    title: 'Best Buy Ebook Service | Gradesup.Org®',
    description: 'Discover a world of knowledge and entertainment with our vast collection of ebooks. Buy ebooks from our extensive catalog and immerse yourself in captivating stories and valuable insights. Expand your digital library today with our reliable "buy ebook" service.',
  },
  {
    path: `${dynamicCountry}/ebook-writing-service`,
    title: 'Best Ebook Writing Service  | Gradesup.Org®',
    description: 'Unlock the potential of your ideas with our professional ebook writing service. Our expert writers will create engaging and high-quality ebooks that captivate readers. Experience exceptional storytelling and elevate your brand with our reliable "ebook writing service."',
  },
  {
    path: `${dynamicCountry}/ebook-help`,
    title: 'Best Ebook Help Service | Gradesup.Org®',
    description: 'Get expert ebook help for your writing project. Our skilled team offers professional assistance, editing, and formatting services. Boost your ebook\'s success with our reliable and affordable "ebook help"  solutions. Unlock your writing potential today!',
  },
  {
    path: `${dynamicCountry}/help-with-article`,
    title: 'Best Help With Article Service | Gradesup.Org®',
    description: 'Boost your article\'s impact with professional help. Get expert assistance for writing, editing, and optimizing your content. Enhance your online presence and engage readers with our "help with article" services. Don\'t settle for average - let us help you create compelling and influential articles.',
  },
  {
    path: `${dynamicCountry}/write-my-article`,
    title: 'Best Write My Article Service | Gradesup.Org®',
    description: 'Get high-quality articles tailored to your needs. Our experienced writers will craft engaging and well-researched content that captivates readers. Boost your online presence and authority with our "write my article" service. Leave the writing to us and focus on what you do best. Elevate your brand with compelling articles that drive traffic and conversions.',
  },
  {
    path: `${dynamicCountry}/article-writer`,
    title: 'Best Article Writer Service | Gradesup.Org®',
    description: 'Looking for a skilled article writer? Our expert team delivers captivating and well-researched content that engages readers. Boost your online presence with our top-notch "article writer" service. Enhance your brand\'s authority and drive traffic with compelling articles written by professionals. Take your content marketing to the next level.',
  },
  {
    path: `${dynamicCountry}/do-my-article`,
    title: 'Best Do My Article Service | Gradesup.Org®',
    description: 'Looking for someone to "do my article"? Look no further! Our expert writers are ready to create compelling and high-quality articles that meet your requirements. Boost your online presence and attract more readers with our professional article writing service. Get started today and let us take care of your article writing needs.',
  },
  {
    path: `${dynamicCountry}/pay-for-article`,
    title: 'Best Pay For Article Service | Gradesup.Org®',
    description: 'Unlock the power of quality content with our "pay for article" service. Get expertly crafted articles tailored to your needs. Increase your online presence, drive traffic, and engage readers with captivating content. Invest in your success and let us deliver impactful articles that captivate your audience. Take your content strategy to new heights with our professional writing service.',
  },
  {
    path: `${dynamicCountry}/buy-article`,
    title: 'Best Buy Article Service | Gradesup.Org®',
    description: 'Looking to buy articles? Discover our premium article writing service and buy high-quality, engaging content that drives traffic and boosts your online presence. Our skilled writers deliver custom articles tailored to your needs. Enhance your brand\'s visibility and attract readers with compelling content. Buy articles now and elevate your content marketing strategy to new heights.',
  },
  {
    path: `${dynamicCountry}/article-writing-service`,
    title: 'Best Article Writing Service | Gradesup.Org®',
    description: 'Looking for a reliable article writing service? Our professional writers create captivating and well-researched articles tailored to your needs. Boost your online presence and engage your audience with high-quality content. Get expertly crafted articles that drive traffic and enhance your brand\'s visibility. Choose our article writing service and take your content marketing to the next level.',
  },
  {
    path: `${dynamicCountry}/article-help`,
    title: 'Best Article Help Service | Gradesup.Org®',
    description: 'Get high-quality article help from experienced writers. Our professional team provides tailored assistance to improve your writing skills and deliver engaging content. Boost your credibility and reach a wider audience with our expert guidance. Increase your article\'s impact and visibility with our comprehensive editing and proofreading services. Enhance your writing journey with our reliable and affordable article help.',
  },
  {
    path: `${dynamicCountry}/help-with-thesis`,
    title: 'Best Help With Thesis Service | Gradesup.Org®',
    description: 'Seeking assistance with your thesis? Get expert help from experienced professionals. Our team of skilled writers offers comprehensive support to ensure your thesis is well-researched, well-written, and meets all academic requirements. Receive personalized guidance throughout the process and achieve academic success. Don\'t let the complexity of your thesis overwhelm you - let us help you excel and make your thesis a remarkable piece of scholarly work.',
  },
  {
    path: `${dynamicCountry}/write-my-thesis`,
    title: 'Best Write My Thesis Service | Gradesup.Org®',
    description: 'Looking for a reliable write my thesis service? Our experienced writers are here to craft a top-notch thesis for you. Save time and stress with our professional assistance. Get a well-researched, well-structured, and impressive thesis that meets all your requirements. Unlock your academic success with our expert guidance and support. Don\'t wait, hire us today and take a step towards achieving your academic goals.',
  },
  {
    path: `${dynamicCountry}/thesis-writer`,
    title: 'Best Thesis Writer Service | Gradesup.Org®',
    description: 'Looking for a skilled thesis writer? Our team of experts is ready to deliver a high-quality thesis that exceeds your expectations. Hire a professional thesis writer for impeccable research, writing, and formatting. Get the academic edge you need with our reliable and affordable services. Boost your chances of success with a well-crafted thesis by an experienced writer. Don\'t settle for anything less, choose our thesis writing service today.',
  },
  {
    path: `${dynamicCountry}/do-my-thesis`,
    title: 'Best Do My Thesis Service | Gradesup.Org®',
    description: 'Looking for someone to "do my thesis"? Our expert writers are here to help! Get top-notch assistance with your thesis project and achieve academic success. Save time and stress by entrusting your thesis to our professional team. Affordable rates and timely delivery guaranteed. Don\'t let your thesis be a burden, let us handle it for you. Contact us today and get the quality thesis you deserve.',
  },
  {
    path: `${dynamicCountry}/pay-for-thesis`,
    title: 'Best Pay For Thesis Service | Gradesup.Org®',
    description: 'Pay for thesis and secure your academic success! Our experienced writers offer high-quality and customized thesis writing services. Save time and get a well-researched, original thesis delivered to you. Affordable prices, confidential and secure payment options. Don\'t compromise on your thesis - invest in professional help today. Boost your grades and impress your professors. Contact us now and let us handle your thesis with expertise and precision.',
  },
  {
    path: `${dynamicCountry}/buy-thesis`,
    title: 'Best Buy Thesis | Gradesup.Org®',
    description: 'Buy thesis online from top-notch writers. Get a custom-written thesis that meets all your requirements. Guaranteed quality and on-time delivery. Boost your academic performance with our professional thesis writing services. Secure your future success. Place your order now and take a step towards your degree. Affordable prices and 24/7 customer support. Don\'t miss out on this opportunity to excel in your academic journey. Buy your thesis today and experience academic excellence.',
  },
  {
    path: `${dynamicCountry}/thesis-writing-service`,
    title: 'Best Thesis Writing Service | Gradesup.Org®',
    description: 'Get noticed by employers with our professional CV writing service. Our expert writers will craft a standout CV that highlights your skills and experience. Boost your chances of landing your dream job and stand out from the competition. Invest in your future success with our tailored CV writing service. Unlock new career opportunities and make a lasting impression with a professionally written CV. Don\'t settle for less, choose the best CV writing service.',
  },
  {
    path: `${dynamicCountry}/thesis-help`,
    title: 'Best Thesis Help Service | Gradesup.Org®',
    description: 'Need thesis help? Our experienced writers provide expert assistance in writing and editing your thesis. Get top-notch quality and timely delivery. Contact us now for reliable thesis help that guarantees academic success. Affordable rates and 100% satisfaction. Don\'t struggle alone, let us support you in your thesis journey.',
  },
  {
    path: `${dynamicCountry}/thesis`,
    title: 'Best Thesis Consultancy Service | Gradesup.Org®',
    description: 'Achieve your academic goals with our reliable thesis help. Our expert team offers comprehensive assistance, from topic selection to final editing, ensuring a well-crafted and impactful thesis. Take a step towards success and submit a winning thesis with our professional guidance.',
  },
  {
    path: `${dynamicCountry}/help-with-cv`,
    title: 'Best Help With Cv Service | Gradesup.Org®',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  },
  {
    path: `${dynamicCountry}/write-my-cv`,
    title: 'Best Write My Cv Service | Gradesup.Org®',
    description: 'Looking for professional CV writing services? Get your CV expertly crafted by experienced writers. Stand out from the competition and land your dream job. Contact us for high-quality, personalized CV writing. Boost your career prospects with a compelling CV that grabs attention. Don\'t miss out on opportunities - invest in a top-notch CV today.',
  },
  {
    path: `${dynamicCountry}/cv-writer`,
    title: 'Best Cv Writer Service | Gradesup.Org®',
    description: 'Need a CV writer to create a standout resume? Our professional CV writers will craft a compelling and tailored CV that highlights your skills and experience. Get noticed by employers and land your dream job with a professionally written CV. Boost your career prospects with our expert CV writing services. Contact us today for a winning CV!',
  },
  {
    path: `${dynamicCountry}/do-my-cv`,
    title: 'Best Do My Cv Service | Gradesup.Org®',
    description: 'Struggling with your CV? Let our experts do your CV and help you stand out. Our professional writers will create a compelling CV tailored to your skills and experience. Get noticed by employers and secure your dream job with our top-notch CV writing service. Don\'t let your CV hold you back—trust us to deliver a winning CV. Contact us now!',
  },
  {
    path: `${dynamicCountry}/pay-for-cv`,
    title: 'Best Pay For Cv Service | Gradesup.Org®',
    description: 'Looking to make a strong impression? Pay for a professionally crafted CV that showcases your skills and experience. Stand out from the competition and secure your dream job with our top-notch CV writing service. Invest in your career success and unlock new opportunities. Don\'t settle for an average CV—let our experts create a winning one for you. Contact us today!',
  },
  {
    path: `${dynamicCountry}/buy-cv`,
    title: 'Best Buy Cv Service | Gradesup.Org®',
    description: 'Stand out in the job market with a professionally designed CV. Buy a customized CV tailored to your strengths and achievements. Boost your chances of landing your dream job and make a lasting impression. Our expert CV writers will showcase your skills and experience in a compelling way. Take the next step in your career and invest in a high-quality CV. Purchase your CV today and unlock new opportunities.',
  },
  {
    path: `${dynamicCountry}/cv-writing-service`,
    title: 'Best Cv Writing Service | Gradesup.Org®',
    description: 'Get noticed by employers with our professional CV writing service. Our expert writers will craft a standout CV that highlights your skills and experience. Boost your chances of landing your dream job and stand out from the competition. Invest in your future success with our tailored CV writing service. Unlock new career opportunities and make a lasting impression with a professionally written CV. Don\'t settle for less, choose the best CV writing service.',
  },
  {
    path: `${dynamicCountry}/cv-help`,
    title: 'Best Cv Help Service | Gradesup.Org®',
    description: 'Need help with your CV? Our professional CV experts are here to assist you. Get personalized guidance and expert tips to create a winning CV that stands out. Boost your chances of landing your dream job with our CV help service. Let us showcase your skills and experience in the best light. Take your career to new heights with our professional CV assistance. Don\'t miss out on job opportunities, get the CV help you need today.',
  },
  {
    path: `${dynamicCountry}/cv-writing`,
    title: 'Best CV / Resume Consultancy Service | Gradesup.Org®',
    description: 'Craft a winning CV that stands out from the competition with our professional CV writing service. Our expert writers create tailored resumes, highlighting your skills, experience, and achievements. Maximize your chances of landing your dream job with our attention-grabbing CVs.',
  },
  {
    path: `${dynamicCountry}/help-with-research-paper`,
    title: 'Best Help With Research Paper Service | Gradesup.Org®',
    description: 'Struggling with your research paper? Get expert help and guidance to ace your project. Our team of skilled researchers will provide you with the support you need to craft a high-quality research paper. Increase your chances of success with our professional assistance. Don\'t let the complexity of your paper hold you back, get the help you deserve. Take the stress out of writing and ensure a top-notch research paper with our specialized service. Let us help you achieve academic excellence.',
  },
  {
    path: `${dynamicCountry}/write-my-research-paper`,
    title: 'Best Write My Research Paper Service | Gradesup.Org®',
    description: 'Need someone to write your research paper? Our expert writers are here to help! Get a professionally written and well-researched paper delivered on time. Say goodbye to stress and let us handle your academic workload. Boost your grades with our top-notch research paper writing service. Don\'t wait, get the assistance you need today and enjoy peace of mind. Trust our experienced writers to deliver a high-quality paper that meets your requirements. Get started now and excel in your academic journey!',
  },
  {
    path: `${dynamicCountry}/research-paper-writer`,
    title: 'Best Research Paper Writer Service | Gradesup.Org®',
    description: 'Hire a skilled research paper writer to handle your academic needs. Our expert writers deliver high-quality and well-researched papers on any topic. Boost your grades with our professional writing service. Get started today and receive a top-notch research paper that meets all your requirements. Don\'t let the stress of writing overwhelm you – let our experienced writers take care of it for you. Trust us to deliver exceptional results and excel in your academic journey. Contact us now and experience the difference of working with a reliable research paper writer.',
  },
  {
    path: `${dynamicCountry}/do-my-research-paper`,
    title: 'Best Do My Research Paper Service | Gradesup.Org®',
    description: 'Need help with your research paper? Our expert writers are ready to assist you. Get high-quality, custom-written papers that meet your requirements. Don\'t stress over deadlines or complex topics – let our professionals handle it for you. Boost your academic performance and save time. Trust our reliable service to deliver outstanding results. Contact us now and say goodbye to research paper worries.',
  },
  {
    path: `${dynamicCountry}/pay-for-research-paper`,
    title: 'Best Pay For Research Paper Service | Gradesup.Org®',
    description: 'Looking to pay for a research paper? Get top-notch quality and timely delivery with our professional writing service. Save time and stress by entrusting your paper to our experts. We offer custom-written papers tailored to your specific requirements. Achieve academic success and secure your grades. Don\'t wait, place your order today and experience the benefits of our reliable and confidential service.',
  },
  {
    path: `${dynamicCountry}/buy-research-paper`,
    title: 'Best Buy Research Paper Service | Gradesup.Org®',
    description: 'Looking for a reliable research paper writing service? Our experts deliver high-quality, original papers tailored to your needs. Get top-notch assistance and save time. Order now!',
  },
  {
    path: `${dynamicCountry}/research-paper-writing-service`,
    title: 'Best Research Paper Writing Service | Gradesup.Org®',
    description: 'Unlock Your Potential with the Best Tutoring Help. Personalized guidance and expert support for academic success. Boost your grades and confidence. Get started today!',
  },
  {
    path: `${dynamicCountry}/research-paper-help`,
    title: 'Best Research Paper Help Service | Gradesup.Org®',
    description: 'Struggling with your research paper? Get top-notch research paper help from experts to achieve academic excellence. Don\'t let stress hold you back, seek professional assistance now!',
  },
  {
    path: `${dynamicCountry}/pay-for-exam`,
    title: 'Best Pay For Exam Service | Gradesup.Org®',
    description: 'Want to ace your exams? Pay for exam services and get expert help to improve your grades. Don\'t stress about studying alone, hire professionals to ensure your success.',
  },
  {
    path: `${dynamicCountry}/take-my-exam`,
    title: 'Best Take My Exam Service | Gradesup.Org®',
    description: 'Ace your exams with confidence! Take the stress out of your hands and let our experts handle your exams. Get exceptional results with our reliable \'take my exam\' service.',
  },
  {
    path: `${dynamicCountry}/write-my-exam`,
    title: 'Best Write My Exam Service | Gradesup.Org®',
    description: 'Ensure success in your exams with ease! Our professional team is here to help you excel. Get top-notch results with our reliable \'write my exam\' service. Trust the experts for a stress-free experience.',
  },
  {
    path: `${dynamicCountry}/exam-writer`,
    title: 'Best Exam Writer Service | Gradesup.Org®',
    description: 'Ace your exams with the help of our skilled and experienced exam writer. Get personalized assistance and secure high scores. Trust our experts to deliver outstanding results. Experience success like never before with our professional \'exam writer\' service.',
  },
  {
    path: `${dynamicCountry}/do-my-exam`,
    title: 'Best Do My Exam Service | Gradesup.Org®',
    description: 'Get top grades in your exams without stress. Our expert team is ready to handle your exams. Trust us to deliver exceptional results. \'Do my exam\' with confidence and achieve academic success effortlessly.',
  },
  {
    path: `${dynamicCountry}/buy-exam`,
    title: 'Best Buy Exam Service | Gradesup.Org®',
    description: 'Unlock your academic potential and secure success by buying exams. Our reliable service ensures hassle-free exams and excellent results. Say goodbye to exam anxiety and take control of your academic journey with confidence. Buy exams today for a brighter future.',
  },
  {
    path: `${dynamicCountry}/pay-for-final-year-project`,
    title: 'Best Pay For Final Year Project Service | Gradesup.Org®',
    description: 'Accelerate your path to success by paying for your final year project. Our professional team delivers top-quality projects on time, ensuring your academic excellence. Invest in your future and secure outstanding grades with our reliable and efficient service. Pay for your final year project today and reap the rewards of your hard work.',
  },
  {
    path: `${dynamicCountry}/take-my-final-year-project`,
    title: 'Best Take My Final Year Project Service | Gradesup.Org®',
    description: 'Let experts take the wheel and ensure success for your final year project. Trust our experienced professionals to deliver outstanding results while you focus on other priorities. Take control of your academic journey and excel with our reliable and efficient service. Allow us to take your final year project to new heights.',
  },
  {
    path: `${dynamicCountry}/write-my-final-year-project`,
    title: 'Best Write My Final Year Project Service | Gradesup.Org®',
    description: 'Unlock your academic success with our expert writers who will deliver a stellar final year project. Say goodbye to stress and let us handle the hard work for you. Get top-notch quality, timely delivery, and guaranteed satisfaction. Supercharge your academic journey today and trust us to write your final year project with excellence.',
  },
  {
    path: `${dynamicCountry}/final-year-project-writer`,
    title: 'Best Final Year Project Writer Service | Gradesup.Org®',
    description: 'Hire a professional final year project writer to elevate your academic success. Our experts will deliver a top-quality project tailored to your requirements. Get exceptional results and impress your professors. Trust our experienced writers for a flawless final year project that guarantees excellence.',
  },
  {
    path: `${dynamicCountry}/do-my-final-year-project`,
    title: 'Best Do My Final Year Project Service | Gradesup.Org®',
    description: 'Don\'t stress over your final year project. Let our experts handle it for you. Get high-quality and customized solutions for your final year project. Save time and secure excellent grades. Trust our professional writers for an exceptional final year project.',
  },
  {
    path: `${dynamicCountry}/buy-final-year-project`,
    title: 'Best Buy Final Year Project Service | Gradesup.Org®',
    description: 'Achieve academic success with ease! Buy your final year project from our reliable and experienced team. Get a well-researched, original, and top-notch project that impresses your professors. Don\'t miss out on this opportunity to excel in your studies. Order now and take a step towards your bright future.',
  },
  {
    path: `${dynamicCountry}/pay-for-quizzes`,
    title: 'Best Pay For Quizzes Service | Gradesup.Org®',
    description: 'Conquer your quizzes effortlessly! Pay for quizzes and boost your grades with our reliable and convenient service. Our expert tutors ensure accurate and timely completion of your quizzes, saving you time and stress. Don\'t let quizzes hinder your academic success. Take control and excel in your studies. Place your order today!',
  },
  {
    path: `${dynamicCountry}/take-my-quizzes`,
    title: 'Best Take My Quizzes Service | Gradesup.Org®',
    description: 'Ace your quizzes without lifting a finger! Take my quizzes and guarantee top scores with our professional assistance. Our experts are ready to handle any subject and deliver accurate results. Don\'t let quizzes stress you out - delegate them to our trusted team and focus on what matters most. Boost your academic performance today!',
  },
  {
    path: `${dynamicCountry}/write-my-quizzes`,
    title: 'Best Write My Quizzes Service | Gradesup.Org®',
    description: 'Get top-notch quizzes written by experts! Delegate the task and say goodbye to quiz-related stress. Our skilled writers will create customized quizzes to test your knowledge and help you achieve great results. Don\'t waste time, place your order now and enjoy hassle-free quiz completion. Take a step towards academic success today!',
  },
  {
    path: `${dynamicCountry}/quizzes-writer`,
    title: 'Best Quizzes Writer Service | Gradesup.Org®',
    description: 'Hire a professional quizzes writer to create engaging and challenging quizzes for your audience. Boost user engagement and drive traffic with expertly crafted quiz content. Enhance your website or educational platform with interactive quizzes that captivate and entertain. Get started today and take your quizzes to the next level!',
  },
  {
    path: `${dynamicCountry}/do-my-quizzes`,
    title: 'Best Do My Quizzes Service | Gradesup.Org®',
    description: 'Don\'t let quizzes stress you out. Get expert help and delegate your quizzes to our reliable team. Achieve top scores and save time with our professional "do my quizzes" service. Trust us to deliver accurate and well-crafted quizzes that ensure academic success. Take control of your studies and leave the quizzes to us!',
  },
  {
    path: `${dynamicCountry}/buy-quizzes`,
    title: 'Best Buy Quizzes Service | Gradesup.Org®',
    description: 'Boost your grades with ease! Buy quizzes from our experts and ensure academic success. Get accurate and reliable quiz solutions tailored to your needs.',
  },
  {
    path: `${dynamicCountry}/pay-for-book-report`,
    title: 'Best Pay For Book Report Service | Gradesup.Org®',
    description: 'Looking to save time and get a stellar book report? Pay for book report services and receive high-quality, customized summaries. Boost your grades and impress your teachers.',
  },
  {
    path: `${dynamicCountry}/take-my-book-report`,
    title: 'Best Take My Book Report Service | Gradesup.Org®',
    description: 'Take the stress out of writing your book report. Hire professionals to take care of it for you and get a top-notch, customized report. Score better grades and save time.',
  },
  {
    path: `${dynamicCountry}/write-my-book-report`,
    title: 'Best Write My Book Report Service | Gradesup.Org®',
    description: 'Struggling with your book report? Let expert writers handle it for you. Get a high-quality, custom-written book report that impresses your teacher and saves you time.',
  },
  {
    path: `${dynamicCountry}/book-report-writer`,
    title: 'Best Book Report Writer Service | Gradesup.Org®',
    description: 'Hire a skilled book report writer to ace your assignments. Get professional assistance in crafting well-researched and captivating book reports that earn top grades.',
  },
  {
    path: `${dynamicCountry}/do-my-book-report`,
    title: 'Best Do My Book Report Service | Gradesup.Org®',
    description: 'Struggling with your book report? Let our experts handle it for you! Get high-quality and timely book report writing services tailored to your needs.',
  },
  {
    path: `${dynamicCountry}/buy-book-report`,
    title: 'Best Buy Book Report Service | Gradesup.Org®',
    description: 'Looking to buy a book report? Discover our professional book report writing service and get expertly crafted reports that impress. Buy now and excel in your academics!',
  },
  {
    path: `${dynamicCountry}/pay-for-book-analysis`,
    title: 'Best Pay For Book Analysis Service | Gradesup.Org®',
    description: 'Pay for book analysis and get comprehensive insights into your favorite literature. Our professional writers deliver high-quality analyses that impress. Pay now!',
  },
  {
    path: `${dynamicCountry}/take-my-book-analysis`,
    title: 'Best Take My Book Analysis Service | Gradesup.Org®',
    description: 'Let us take your book analysis to the next level. Our expert team provides in-depth analysis that brings books to life. Get top-notch analysis now!',
  },
  {
    path: `${dynamicCountry}/write-my-book-analysis`,
    title: 'Best Write My Book Analysis Service | Gradesup.Org®',
    description: 'Need help with your book analysis? Our professional writers are here to provide you with a comprehensive and insightful analysis. Get a top-quality analysis written just for you!',
  },
  {
    path: `${dynamicCountry}/book-analysis-writer`,
    title: 'Best Book Analysis Writer Service | Gradesup.Org®',
    description: 'Looking for a skilled book analysis writer? Our experts are here to deliver a captivating and in-depth analysis of your chosen book. Get a top-notch analysis that will impress your readers!',
  },
  {
    path: `${dynamicCountry}/do-my-book-analysis`,
    title: 'Best Do My Book Analysis Service | Gradesup.Org®',
    description: 'Need someone to do your book analysis? Our experienced team of experts is ready to analyze and dissect your book to provide you with comprehensive insights and critical analysis. Get top-quality book analysis assistance now!',
  },
  {
    path: `${dynamicCountry}/buy-book-analysis`,
    title: 'Best Buy Book Analysis Service | Gradesup.Org®',
    description: 'Looking to buy a book analysis? Our professional writers offer high-quality book analysis services that delve deep into the themes, characters, and plot of your chosen book. Get a comprehensive analysis and buy your book analysis today for a complete understanding of the literary masterpiece.',
  },
  {
    path: `${dynamicCountry}/online-courses-help`,
    title: 'Best Online Courses Help | Gradesup.Org®',
    description: 'Struggling with your online courses? Get expert help and support for your online courses to excel academically. Enhance your learning experience and boost your grades with professional online courses help. Enroll now!',
  },
  {
    path: `${dynamicCountry}/buy-online-courses`,
    title: 'Best Buy Online Courses Service | Gradesup.Org®',
    description: 'Discover a world of knowledge with our wide range of online courses. Buy online courses and unlock new opportunities for personal and professional growth. Boost your skills, expand your knowledge, and achieve your goals with our high-quality courses. Enroll today and start learning!',
  },
  {
    path: `${dynamicCountry}/pay-for-online-courses`,
    title: 'Best Pay For Online Courses Service | Gradesup.Org®',
    description: 'Accelerate your learning journey with our premium online courses. Pay for online courses and gain access to top-notch educational content. Enhance your skills, acquire new knowledge, and stay ahead in your field. Invest in your education and unlock a world of opportunities. Enroll now and take your career to new heights!',
  },
  {
    path: `${dynamicCountry}/get-online-courses`,
    title: 'Best Get Online Courses Service | Gradesup.Org®',
    description: 'Get ready to level up your skills and knowledge with our high-quality online courses. Unlock a wealth of valuable information and practical insights to excel in your chosen field. Don\'t miss out on this opportunity to enhance your expertise. Enroll today and embark on a transformative learning journey!',
  },
  {
    path: `${dynamicCountry}/do-my-online-course`,
    title: 'Best Do My Online Course Service | Gradesup.Org®',
    description: 'Don\'t stress over your online course - let us handle it for you! Our expert team will take care of all the assignments, discussions, and exams while you focus on what matters most. Get the grades you deserve without the hassle. Trust us to deliver exceptional results.',
  },
  {
    path: `${dynamicCountry}/take-my-online-course`,
    title: 'Best Take My Online Course Service | Gradesup.Org®',
    description: 'Take the stress out of your online course with our professional assistance. Let our experts handle your assignments, discussions, and exams while you focus on other priorities. Achieve academic success without the overwhelming workload. Get started today and excel in your online course.',
  },
  {
    path: `${dynamicCountry}/help-with-online-courses`,
    title: 'Best Help With Online Courses Service | Gradesup.Org®',
    description: 'Get the support you need to excel in your online courses. Our expert team is here to provide comprehensive help and guidance. From assignments to discussions and exams, we\'ve got you covered. Boost your grades and overcome challenges with our reliable assistance. Don\'t let online courses stress you out - get the help you deserve.',
  },
  {
    path: `${dynamicCountry}/buy-online-classes`,
    title: 'Best Buy Online Classes Service | Gradesup.Org®',
    description: 'Gain an edge in your academic journey with our premium online classes. Enhance your knowledge and skills through engaging lessons and interactive sessions. Invest in your education and buy online classes that offer valuable insights and practical expertise. Don\'t miss out on this opportunity to excel and take control of your learning. Enroll now and unlock your full potential.',
  },
  {
    path: `${dynamicCountry}/pay-for-online-classes`,
    title: 'Best Pay For Online Classes Service | Gradesup.Org®',
    description: 'Accelerate your learning with our comprehensive online classes. Pay for online classes that offer expert guidance and interactive learning experiences. Invest in your education and gain valuable knowledge and skills. Take control of your learning journey and unlock your potential. Enroll today and embark on a transformative educational experience.',
  },
  {
    path: `${dynamicCountry}/get-online-classes`,
    title: 'Best Get Online Classes Service | Gradesup.Org®',
    description: 'Get ready to level up your skills with our dynamic and engaging online classes. Explore a wide range of subjects and acquire knowledge from industry experts. Enhance your career prospects and broaden your horizons. Enroll now and unlock the power of online learning. Don\'t miss out on this opportunity to expand your knowledge and achieve your goals.',
  },
  {
    path: `${dynamicCountry}/take-my-online-class`,
    title: 'Best Take My Online Class Service | Gradesup.Org®',
    description: 'Take the stress out of your online class and let our experts handle it for you. Achieve top grades and save time with our professional assistance. Don\'t let online learning overwhelm you – trust us to manage your coursework while you focus on what matters most. Enroll now and experience the convenience of having your online class taken care of by qualified professionals.',
  },
  {
    path: `${dynamicCountry}/online-class-help`,
    title: 'Best Online Class Help Service | Gradesup.Org®',
    description: 'Need help with your online class? Our experts are here to provide the support you need. From assignments to exams, we\'ve got you covered. Don\'t let online learning stress you out – let our team of professionals assist you in acing your online class. Get the help you need and achieve academic success with our reliable online class help services. Take the first step towards better grades and enroll with us today.',
  },
  {
    path: `${dynamicCountry}/do-my-online-class`,
    title: 'Best Do My Online Class Service | Gradesup.Org®',
    description: 'Don\'t have time for your online class? Let our experts handle it for you! Get top-notch grades and stress-free learning with our professional online class assistance. Our team will take care of assignments, discussions, and exams, so you can focus on what matters most. Stop worrying and start succeeding – hire us to do your online class today and enjoy academic success without the hassle.',
  },
  {
    path: `${dynamicCountry}/take-my-online-classes`,
    title: 'Best Take My Online Classes Service | Gradesup.Org®',
    description: 'Struggling with multiple online classes? Don\'t worry! Our experts are here to take your online classes off your hands. Get personalized assistance, ace your exams, and relieve your academic stress. With our reliable online class support, you can focus on other priorities while we handle your coursework. Take the first step towards academic success and let us take your online classes for you. Hire our experts today and achieve the grades you deserve!',
  },
  {
    path: `${dynamicCountry}/help-with-online-class`,
    title: 'Best Help With Online Class Service | Gradesup.Org®',
    description: 'Need help with your online class? Get expert assistance and excel in your coursework. Our team of experienced professionals is ready to guide you through the online learning process and ensure your success. From assignments to exams, we\'ve got you covered. Don\'t let online classes overwhelm you - let us provide the support you need to thrive. Take control of your education and achieve your academic goals with our help. Contact us today for reliable and personalized assistance with your online class.',
  },
  {
    path: `${dynamicCountry}/do-my-research-proposal`,
    title: 'Best Do My Research Proposal Service | Gradesup.Org®',
    description: 'Get professional assistance with your research proposal. Our experts will craft a compelling and high-quality proposal that impresses your professors. Save time and stress by letting us handle your research proposal. Contact us now!',
  },
  {
    path: `${dynamicCountry}/help-with-research-proposal`,
    title: 'Best Help With Research Proposal Service | Gradesup.Org®',
    description: 'Looking for help with your research proposal? Our experienced team provides expert guidance and support to ensure your proposal stands out. Get the assistance you need to secure funding and excel in your research. Contact us today for professional help with your research proposal.',
  },
  {
    path: `${dynamicCountry}/research-proposal-writing-service`,
    title: 'Best Research Proposal Writing Service | Gradesup.Org®',
    description: 'Looking for a reliable research proposal writing service? Our expert writers deliver high-quality proposals that impress. Boost your chances of success with our professional assistance. Contact us today for top-notch research proposal writing services.',
  },
  {
    path: `${dynamicCountry}/buy-research-proposal`,
    title: 'Best Buy Research Proposal Service | Gradesup.Org®',
    description: 'Looking to buy a research proposal? Our professional writing service offers top-quality research proposals for sale. Get the edge you need to succeed in your academic endeavors. Purchase your research proposal today and make a strong impression on your committee.',
  },
  {
    path: `${dynamicCountry}/research-proposal-writer`,
    title: 'Best Research Proposal Writer Service | Gradesup.Org®',
    description: 'Need a skilled research proposal writer? Our expert team delivers compelling and tailored research proposals. Increase your chances of success with our professional writing services. Hire a dedicated research proposal writer today and unlock your academic potential.',
  },
  {
    path: `${dynamicCountry}/write-my-research-proposal`,
    title: 'Best Write My Research Proposal Service | Gradesup.Org®',
    description: 'Looking for someone to write your research proposal? Our experienced writers are here to help! Get a well-crafted and persuasive research proposal that stands out. Boost your chances of success with our professional writing service. Contact us today to get your research proposal written by experts.',
  },
  {
    path: `${dynamicCountry}/pay-for-research-proposal`,
    title: 'Best Pay For Research Proposal Service | Gradesup.Org®',
    description: 'Ready to submit a winning research proposal? Pay for our expert writing service and get a high-quality, custom-crafted proposal. Save time and ensure your proposal meets all requirements. Stand out from the competition and impress your reviewers. Take the next step towards success and pay for your research proposal today!',
  },
  {
    path: `${dynamicCountry}/research-publication-service`,
    title: 'Best Research Publication Service | Gradesup.Org®',
    description: 'Accelerate your research impact with our top-notch research publication service. Maximize your chances of publication success and reach a wider audience. Our experienced team ensures a seamless publishing process and provides comprehensive support. Gain recognition and enhance your academic profile. Boost your research career with our professional publication service today!',
  },
  {
    path: `${dynamicCountry}/buy-assessment`,
    title: 'Best Buy Assessment Service | Gradesup.Org®',
    description: 'Elevate your academic performance with our high-quality assessment solutions. Buy assessments that are tailored to your needs and boost your learning outcomes. Our expert team ensures accurate and reliable assessments that help you excel. Enhance your knowledge and skills with our comprehensive assessment resources. Take the first step towards success and buy assessments today!',
  },
  {
    path: `${dynamicCountry}/get-assessment`,
    title: 'Best Get Assessment Service | Gradesup.Org®',
    description: 'Looking to get a comprehensive and reliable assessment to assess your knowledge and progress? Enhance your learning experience with our high-quality assessment resources. Achieve academic success with personalized assessments that measure your skills and understanding. Improve your performance and make informed learning decisions. Get assessments that drive results and support your educational journey.',
  },
  {
    path: `${dynamicCountry}/do-my-assessment`,
    title: 'Best Do My Assessment Service | Gradesup.Org®',
    description: 'Boost your academic performance with our top-notch assessment services. Let our experts handle your assessments and deliver accurate and timely results. Ace your exams and assignments with confidence. Get personalized assessments tailored to your learning needs. Don\'t stress over assessments, leave it to the professionals. Enhance your learning journey with our reliable assessment solutions.',
  },
  {
    path: `${dynamicCountry}/pay-for-assessment`,
    title: 'Best Pay For Assessment Service | Gradesup.Org®',
    description: 'Looking to pay for assessment help? Our experts deliver high-quality results to help you succeed. Get personalized assistance and professional guidance for your assessments. Maximize your academic potential and boost your performance with our reliable assessment services. Don\'t let assessments stress you out - invest in your success by paying for top-notch assistance.',
  },
  {
    path: `${dynamicCountry}/write-my-assessment`,
    title: 'Best Write My Assessment Service | Gradesup.Org®',
    description: 'Need help with your assessment? Hire our professional writers to write your assessment and get top-notch results. Our experts ensure high-quality work and timely delivery. Boost your grades and reduce stress by availing our reliable assessment writing service. Let us handle the task while you focus on other important tasks. Get a top-tier assessment that meets your requirements. Contact us now to get started on your outstanding assessment.',
  },
  {
    path: `${dynamicCountry}/buy-casestudy`,
    title: 'Best Buy Casestudy Service | Gradesup.Org®',
    description: 'Looking to buy a case study? Our professional writing service offers high-quality and customized case studies for various subjects. Get expertly crafted case studies that showcase critical thinking, analysis, and problem-solving skills. Boost your academic success and save time by purchasing a well-researched and structured case study. Order now and unlock the power of real-life examples and insights in your studies.',
  },
  {
    path: `${dynamicCountry}/get-casestudy`,
    title: 'Best Get Casestudy Service | Gradesup.Org®',
    description: 'Looking to get a compelling case study that captures real-world scenarios and showcases your expertise? Our professional writing service delivers high-quality and well-researched case studies tailored to your requirements. Gain valuable insights, problem-solving skills, and evidence-based analysis. Enhance your academic or professional reputation with a standout case study. Order now for a unique and impactful case study that will impress your audience and drive results.',
  },
  {
    path: `${dynamicCountry}/do-my-casestudy`,
    title: 'Best Do My Casestudy Service | Gradesup.Org®',
    description: 'Need a case study done? Our skilled writers will meticulously analyze and summarize relevant sources to create a comprehensive case study. Save time and ensure a high-quality case study that impresses your professors. Get professional assistance for your case study today and excel in your academic pursuits. Don\'t stress, let us handle your case study for you.',
  },
  {
    path: `${dynamicCountry}/pay-for-casestudy`,
    title: 'Best Pay For Casestudy Service | Gradesup.Org®',
    description: 'Looking to pay for a high-quality case study? Our professional writers provide top-notch, customized case studies that meet your requirements. Save time and receive a well-researched, professionally written case study. Invest in your academic success and pay for a case study today. Don\'t miss out on this opportunity to excel in your studies.',
  },
  {
    path: `${dynamicCountry}/write-my-casestudy`,
    title: 'Best Write My Casestudy Service | Gradesup.Org®',
    description: 'Looking for expert writers to write your case study? Get professional and customized case study writing services tailored to your needs. Our experienced team delivers high-quality, well-researched case studies that impress. Save time and effort by entrusting your case study to us. Let our experts handle the writing while you focus on other important tasks. Get a top-tier case study that meets your requirements. Contact us now to get started on your outstanding case study.',
  },
  {
    path: `${dynamicCountry}/buy-literature-review`,
    title: 'Best Buy Literature Review Service | Gradesup.Org®',
    description: 'Looking to buy a literature review? Discover the easiest way to get a high-quality literature review written by experts. Our professional writers provide comprehensive and well-researched literature reviews tailored to your specific topic. Save time and effort by purchasing a literature review that meets all your requirements. Impress your readers with a well-crafted and impactful review. Don\'t wait any longer, buy your literature review today and take your research to the next level!',
  },
  {
    path: `${dynamicCountry}/get-literature-review`,
    title: 'Best Get Literature Review Service | Gradesup.Org®',
    description: 'Looking to get a comprehensive and reliable literature review? Our expert writers provide top-notch literature reviews that are comprehensive, well-researched, and tailored to your needs. Get the highest quality review to enhance your research and impress your readers. Save time and effort by getting a professional literature review that meets all your requirements. Don\'t miss out, get your literature review today and elevate your academic work to new heights.',
  },
  {
    path: `${dynamicCountry}/do-my-literature-review`,
    title: 'Best Do My Literature Review Service | Gradesup.Org®',
    description: 'Need a literature review done? Our skilled writers will meticulously analyze and summarize relevant sources to create a comprehensive literature review. Save time and ensure a high-quality review that impresses your professors. Get professional assistance for your literature review today and excel in your academic pursuits. Don\'t stress, let us handle your literature review for you.',
  },
  {
    path: `${dynamicCountry}/pay-for-literature-review`,
    title: 'Best Pay For Literature Review Service | Gradesup.Org®',
    description: 'Looking to pay for a literature review? Our expert writers deliver top-notch, customized literature reviews that meet your requirements. Save time and receive a well-researched, professionally written literature review. Invest in your academic success and pay for a literature review today. Don\'t miss out on this opportunity to excel in your studies.',
  },
  {
    path: `${dynamicCountry}/write-my-literature-review`,
    title: 'Best Write My Literature Review Service | Gradesup.Org®',
    description: 'Need someone to write your literature review? Our skilled writers can craft a compelling and well-researched literature review tailored to your specific topic. Don\'t stress over it, let our experts handle it for you. Get a professionally written literature review that impresses your professors and saves you time. Contact us to write your literature review today.',
  },
  {
    path: `${dynamicCountry}/academic-help`,
    title: 'Best Academic Help | Gradesup.Org®',
    description: 'Elevate your academic journey with Gradesup.org. Our expert team offers professional assistance to boost your learning experience. Get the support you need for academic success, from study resources to expert guidance.',
  },
  {
    path: `${dynamicCountry}/academic-help-for-students`,
    title: 'Best Academic Help For Students | Gradesup.Org®',
    description: `Unlock academic success with Gradesup.org's Student Academic Help. Our team of experts is here to make your learning journey smoother. From study aids to personalized guidance, we've got students covered. Discover Gradesup.org for top-notch academic support today.`,
  },
  {
    path: `${dynamicCountry}/academic-help-services`,
    title: 'Best Academic Help Services | Gradesup.Org®',
    description: 'Experience top-tier Academic Help Services at Gradesup.org. Our experts offer tailored support to boost your academic performance. From study aids to specialized guidance, we provide comprehensive solutions. Explore Gradesup.org for professional academic assistance services today',
  },
  {
    path: `${dynamicCountry}/academic-writing-help`,
    title: 'Best Academic Writing Help | Gradesup.Org®',
    description: `Enhance your academic writing skills with Gradesup.org's Academic Writing Help. Our experienced team provides expert guidance to elevate your writing prowess. From tips and resources to personalized assistance, we're your partner in academic success. Discover Gradesup.org for professional academic writing help today.`,
  },
  {
    path: `${dynamicCountry}/academic-writing-service`,
    title: 'Best Academic Writing Service Help | Gradesup.Org®',
    description: `Elevate your academic writing with Gradesup.org's Academic Writing Service. Our skilled team offers professional assistance to enhance your scholarly work. From expert editing to tailored guidance, we're your reliable partner for academic success. Explore Gradesup.org for top-notch academic writing services today`,
  },
  {
    path: `${dynamicCountry}/academic-writer`,
    title: 'Best Academic Writer Help | Gradesup.Org®',
    description: `Discover the expertise of our Academic Writers at Gradesup.org. Our skilled writers offer professional assistance to enhance your academic projects. From research papers to essays, we're your dedicated partner for quality academic writing. Explore Gradesup.org for experienced Academic Writers today`,
  },
  {
    path: `${dynamicCountry}/website-for-assignments`,
    title: 'Best Website For Assignments Help | Gradesup.Org®',
    description: `Your go-to Website for Assignments is Gradesup.org. We provide comprehensive support to help you excel in your coursework. From insightful resources to expert assistance, we're here to make your assignments a breeze. Explore Gradesup.org for top-notch assignment help today`,
  },
  {
    path: `${dynamicCountry}/online-assignment`,
    title: 'Best Online Assignment Help | Gradesup.Org®',
    description: `Streamline your academic journey with our Online Assignment solutions at Gradesup.org. Our platform offers convenient and expert support to help you conquer your assignments. From timely submissions to top-quality work, we've got you covered. Explore Gradesup.org for hassle-free online assignment assistance today.`,
  },
];



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const currentPath = location.pathname;
  const currentPageData = PageTitles.find((page) => page.path === currentPath);

  const { title, description } = currentPageData || defaultPageData;

  useEffect(() => {
    const createMetaTag = () => {
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'description');
      newMetaTag.setAttribute('content', description);
      return newMetaTag;
    };

    const createCanonicalTag = () => {
      const newCanonicalTag = document.createElement('link');
      newCanonicalTag.setAttribute('rel', 'canonical');
      newCanonicalTag.setAttribute('href', `${domain}${currentPath}`);
      return newCanonicalTag;
    };

    const newMetaTag = createMetaTag();
    const newCanonicalTag = createCanonicalTag();

    // Clear previous meta and canonical tags
    clearTags('meta', 'name', 'description');
    clearTags('link', 'rel', 'canonical');

    // Set the new meta and canonical tags
    document.head.appendChild(newMetaTag);
    document.head.appendChild(newCanonicalTag);

    return () => {
      // Clean up the meta and canonical tags when the component unmounts
      clearTags('meta', 'name', 'description');
      clearTags('link', 'rel', 'canonical');
    };
  }, [currentPath, description]);



  
  useEffect(() => {
    setIsNavbarOpen(false); // Close the navbar when the location changes
  }, [location]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarSticky(scrollPosition > 40);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



 
  

  
  const menuItems = [
    { title: 'Why Us ?', link: `${dynamicCountry}/#whyus`},
    { title: 'Our Services', link: 'javascript:void(0)' , class: 'services' , },
    { title: 'Process', link: `${dynamicCountry}/#OrderSection`},
    { title: 'Reviews', link: `${dynamicCountry}/#reviews`},
    { title: 'About Us', link: `${dynamicCountry}/about`},
    { title: 'Contact', link: `${dynamicCountry}/contact`},
  ];
  const dropdownInnerItems = [
    { title: 'Essay Help', link: `${dynamicCountry}/essay-help`},
    { title: 'Dissertation Help', link: `${dynamicCountry}/dissertation-help`},
    { title: 'Homework Help', link: `${dynamicCountry}/homework-help`},
    { title: 'Coursework Help', link: `${dynamicCountry}/coursework-help`},
    { title: 'Presentations', link: `${dynamicCountry}/presentations`},
    { title: 'Articles', link: `${dynamicCountry}/articles`},
    { title: 'Thesis', link: `${dynamicCountry}/thesis`},
    { title: 'PDF Ebook Writing', link: `${dynamicCountry}/pdf-ebook`},
    { title: 'Proofreading Editing', link: `${dynamicCountry}/proofreading`},
    { title: 'Cv-writing', link: `${dynamicCountry}/cv-writing`},
    { title: 'Content Help Services', link: `${dynamicCountry}/content-help`},
    { title: 'Research Paper Help', link: `${dynamicCountry}/research-paper-help`},
    { title: 'Exam Help', link: `${dynamicCountry}/exam`},
    { title: 'Final Year Project', link: `${dynamicCountry}/final-year-project`},
    { title: 'Quizzes Help', link: `${dynamicCountry}/quizzes`},
    { title: 'Book Report Help', link: `${dynamicCountry}/book-report`},
    { title: 'Assessment Help', link: `${dynamicCountry}/assessment`},
    { title: 'Book Analysis Help', link: `${dynamicCountry}/book-analysis-help`},
    { title: 'Online Courses Help', link: `${dynamicCountry}/online-courses-help`},
    { title: 'Online Classes Help', link: `${dynamicCountry}/online-classes`},
    { title: 'Research Proposal Help', link: `${dynamicCountry}/research-proposal`},
    { title: 'Research Publication Help', link: `${dynamicCountry}/research-publication`},
    { title: 'Casestudy Help', link: `${dynamicCountry}/casestudy`},
    { title: 'Literature Review Help', link: `${dynamicCountry}/literature-review`},
    { title: 'Assignment Service', link: `${dynamicCountry}/assignment-service`},
    { title: 'Academic Help', link: `${dynamicCountry}/academic-help`},
    { title: 'Academic Writer', link: `${dynamicCountry}/academic-writer`},
  ];

  // Weather

  const { weather, loading } = useWeatherData();

  const kelvinToCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  const kelvinToFahrenheit = (temp) => {
    return Math.round((temp - 273.15) * (9 / 5) + 32);
  };



  return (
    <div className="header">
      <div>
    <Helmet>
      {/* Set the page title */}
      <title>{title}</title>
      <script data-host="https://mmeanalytics.designstime.com/" data-dnt="false" src="https://mmeanalytics.designstime.com/js/script.js" id="ZwSg9rf6GA" async defer></script>
    </Helmet>
      </div>
      <div className="topbar">
        <Container fluid>
          <Row className="justify-content-between align-items-center">
            <Col xl={4} lg={4} md={12} sm={9}>
              <div className="d-flex justify-content-start align-items-center gap-10">
                <p className="limited_time_offer ff-tenor">
                <Link to={`/offers`}>
                <p> Limited Time Offer 🔥</p>
                </Link>
                </p>
                <p className="ff-tenor">
                Buy 4, Get 1 Free Assessment
                </p>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={3}>
              <div className="d-flex justify-content-end align-items-center gap-20">
                <div className="topbar-link">
                  <div className="link" onClick={openTawkToChat}>
                    <i className="fa fa-comments-o"></i>
                    <a style={{color:'#fff'}}>Direct Customer Support</a>
                  </div>
                  <div className="link" >
                  <i className="fa fa-whatsapp"></i>
                    <a href={`https://wa.me/${whatsappNumber}`} target='_blank' rel="noreferrer">Private Live Chat</a>
                  </div>
                  <div className="link">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:support@gradesup.org">support@gradesup.org</a>
                  </div>
                </div>
                <div className="weather text-white">
                  {weather && (
                    <>
                      <p id="celciusWeather">
                        {kelvinToCelsius(weather.temperature).toFixed(0)}&nbsp;°C
                      </p>
                      |
                      <p id="ferhenhiteWeather">
                        {kelvinToFahrenheit(weather.temperature).toFixed(0)}&nbsp;°F
                      </p>
                    </>
                  )}
                  {loading && <div className="preloader"></div>}
                  {!loading && !weather && <p>Weather data unavailable</p>}
                  {weather && (
                    <img
                      alt="Weather Icon"
                      className="weather_iconn"
                      src={`https://openweathermap.org/img/w/${weather.weatherIcon}.png`}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`navbar medium-none ${navbarSticky ? 'sticky' : ''}`} style={{background: '#fff', boxShadow: '0 0 12px 0',}}>
        <Container fluid className="d-block">
          <Row className="align-items-center justify-content-between">
            <Col xl={3} lg={2} md={2}>
          <Link to={`${dynamicCountry}/`}>
                <img
                  style={{ width: "65%" }}
                  src={logoImg}
                  alt="Logo"
                  className="logo"
                />
              </Link>
            </Col>
            <Col md={6}>
              <div className="navlinks  position-relative">
              <ul>
  {menuItems.map((item, index) => (
    <li
      key={index}
      onMouseEnter={index === 1 ? handleDropdownToggle : null}
      onMouseLeave={index === 1 ? handleDropdownToggle : null}
      className={item.class}
    >
      <Link smooth to={item.link}>
        {item.title}
        {index === 1 && isDropdownOpen && (
          <div className="services-inner-dropdown d-block">
            <ul>
              {dropdownInnerItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={handleDropdownToggle}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Link>
    </li>
  ))}
</ul>
              </div>
            </Col>
            <Col xl={3} lg={4} md={3}>
              <div className="navbarBtn">
                <NavbarBtn
                  className="orderBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                  btnText="Order Now"
                  icon="fa fa-shopping-cart"
                  btnLink ={ `${dynamicCountry}/order-form`}
                />
                <NavbarBtn
                  className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                  btnText="WhatsApp Now"
                  targetblank={true}
                  icon="fa fa-whatsapp"
                  btnLink = {`https://wa.me/${whatsappNumber}`}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`navbar medium-block ${navbarSticky ? 'sticky' : ''}`}>
        <Container fluid className="d-block">
          <Row className="align-items-center justify-content-between">
            <div className="col-md-3 col-sm-4 col-6">
              <Link to="/">
                <img
                  style={{ width: "100%" }}
                  src={logoImg}
                  alt="Logo"
                  className="logo"
                />
              </Link>
            </div>
            <div className="col-sm-6 col-2"></div>
            <div className="text-right col-2">
              <img
                src={menuIcon}
                style={{ width: "40px", border: 'none', padding: '0' }}
                className="navbar-toggler"
                onClick={handleNavbarToggle}
                alt=""
              />
            </div>
          </Row>
          <Collapse in={isNavbarOpen}>
            <div id="navbarSupportedContent23">
              <div className="navlinks position-relative">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={index === 1 ? handleDropdownToggle : null}
                      onMouseLeave={index === 1 ? handleDropdownToggle : null}
                      className={item.class}
                    >
                      <Link to={item.link}>{item.title}</Link>
                      {index === 1 && isDropdownOpen && (
                        <div className="services-inner-dropdown d-block">
                          <ul>
                            {dropdownInnerItems.map((item, index) => (
                              <li key={index}>
                                <Link  to={item.link}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navbarBtn">
                <NavbarBtn
                  className="orderBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                  btnText="Order Now"
                  icon="fa fa-shopping-cart"
                  btnLink ={`${dynamicCountry}/order-form`}
                />
                <NavbarBtn
                  className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                  btnText="WhatsApp Now"
                  icon="fa fa-whatsapp"
                />
              </div>
            </div>
          </Collapse>
        </Container>
      </div>
    </div>
  );
};

export default Header;
