import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "intl-tel-input/build/css/intlTelInput.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Media.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ThankYou from "./ThankYou";
import Order from "./Order";
import OrderForm from "./OrderForm";
import useWeatherData from "./components/useWeatherData";
import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import openTawkToChat from "./components/openTawkToChat";
import CookieConsentComponent from "./components/CookieConsent";

// Import individual components
import ArticleHelpService from "./inner-pages/ArticleHelpService";
import Articles from "./inner-pages/Articles";
import ArticleWriterService from "./inner-pages/ArticleWriterService";
import ArticleWritingService from "./inner-pages/ArticleWritingService";
import AssessmentHelp from "./inner-pages/AssessmentHelp";
import AssignmentsHelp from "./inner-pages/AssignmentsHelp";
import AssignmentWriter from "./inner-pages/AssignmentWriter";
import BookAnalysisHelp from "./inner-pages/BookAnalysisHelp";
import BookReportHelp from "./inner-pages/BookReportHelp";
import BuyArticleService from "./inner-pages/BuyArticleService";
import BuyAssignmentServiceHelp from "./inner-pages/BuyAssignmentServiceHelp";
import BuyCourseworkService from "./inner-pages/BuyCourseworkService";
import BuyDissertationService from "./inner-pages/BuyDissertationService";
import BuyEbookService from "./inner-pages/BuyEbookService";
import BuyEssayHelp from "./inner-pages/BuyEssayHelp";
import BuyHomeworkService from "./inner-pages/BuyHomeworkService";
import CasestudyHelp from "./inner-pages/CasestudyHelp";
import ContentHelpServices from "./inner-pages/ContentHelpServices";
import CourseworkHelp from "./inner-pages/CourseworkHelp";
import CourseworkWriterService from "./inner-pages/CourseworkWriterService";
import CourseworkWritingService from "./inner-pages/CourseworkWritingService";
import Cvwriting from "./inner-pages/Cvwriting";
import DissertationHelp from "./inner-pages/DissertationHelp";
import DissertationWriterHelp from "./inner-pages/DissertationWriterHelp";
import DissertationWritingService from "./inner-pages/DissertationWritingService";
import DoMyArticleService from "./inner-pages/DoMyArticleService";
import DoMyAssignmentService from "./inner-pages/DoMyAssignmentService";
import DoMyCourseworkService from "./inner-pages/DoMyCourseworkService";
import DoMyDissertation from "./inner-pages/DoMyDissertation";
import DoMyEbookService from "./inner-pages/DoMyEbookService";
import DoMyEssayServiceHelp from "./inner-pages/DoMyEssayServiceHelp";
import DoMyHomeworkService from "./inner-pages/DoMyHomeworkService";
import EbookHelpService from "./inner-pages/EbookHelpService";
import EbookWriterService from "./inner-pages/EbookWriterService";
import EbookWritingService from "./inner-pages/EbookWritingService";
import EssayHelp from "./inner-pages/EssayHelp";
import EssayWritingServiceHelp from "./inner-pages/EssayWritingServiceHelp";
import ExamHelp from "./inner-pages/ExamHelp";
import FinalYearProject from "./inner-pages/FinalYearProject";
import HelpWithArticleService from "./inner-pages/HelpWithArticleService";
import HelpWithCourseworkService from "./inner-pages/HelpWithCourseworkService";
import HelpWithDissertationService from "./inner-pages/HelpWithDissertationService";
import HelpWithEbookService from "./inner-pages/HelpWithEbookService";
import HelpWithEssayHelp from "./inner-pages/HelpWithEssayHelp";
import HelpWithHomeworkService from "./inner-pages/HelpWithHomeworkService";
import HomeworkHelp from "./inner-pages/HomeworkHelp";
import HomeworkWriterService from "./inner-pages/HomeworkWriterService";
import HomeworkWritingService from "./inner-pages/HomeworkWritingService";
import LiteratureReviewHelp from "./inner-pages/LiteratureReviewHelp";
import OnlineClassesHelp from "./inner-pages/OnlineClassesHelp";
import OnlineCoursesHelp from "./inner-pages/OnlineCoursesHelp";
import PayForArticleService from "./inner-pages/PayForArticleService";
import PayForAssignmentService from "./inner-pages/PayForAssignmentService";
import PayForCourseworkService from "./inner-pages/PayForCourseworkService";
import PayForDissertationService from "./inner-pages/PayForDissertationService";
import PayForEbookService from "./inner-pages/PayForEbookService";
import PayForEssayServiceHelp from "./inner-pages/PayForEssayServiceHelp";
import PayForHomeworkService from "./inner-pages/PayForHomeworkService";
import PDFEbookWriting from "./inner-pages/PDFEbookWriting";
import PerdiscoAssignment from "./inner-pages/PerdiscoAssignment";
import Presentations from "./inner-pages/Presentations";
import ProofreadingEditing from "./inner-pages/ProofreadingEditing";
import QuizzesHelp from "./inner-pages/QuizzesHelp";
import ResearchPaperHelp from "./inner-pages/ResearchPaperHelp";
import ResearchProposalHelp from "./inner-pages/ResearchProposalHelp";
import ResearchPublicationHelp from "./inner-pages/ResearchPublicationHelp";
import Thesis from "./inner-pages/Thesis";
import WriteMyArticleService from "./inner-pages/WriteMyArticleService";
import WriteMyAssignmentService from "./inner-pages/WriteMyAssignmentService";
import WriteMyCourseworkService from "./inner-pages/WriteMyCourseworkService";
import WriteMyDissertationService from "./inner-pages/WriteMyDissertationService";
import WriteMyEbookService from "./inner-pages/WriteMyEbookService";
import WriteMyEssayServiceHelp from "./inner-pages/WriteMyEssayServiceHelp";
import WriteMyHomeworkService from "./inner-pages/WriteMyHomeworkService";
import BookAnalysisWriterService from "./inner-pages/BookAnalysisWriterService";
import BookReportWriterService from "./inner-pages/BookReportWriterService";
import BuyBookAnalysisService from "./inner-pages/BuyBookAnalysisService";
import BuyBookReportService from "./inner-pages/BuyBookReportService";
import BuyExamService from "./inner-pages/BuyExamService";
import BuyFinalYearProjectService from "./inner-pages/BuyFinalYearProjectService";
import BuyOnlineClassesService from "./inner-pages/BuyOnlineClassesService";
import BuyOnlineCoursesService from "./inner-pages/BuyOnlineCoursesService";
import BuyQuizzesService from "./inner-pages/BuyQuizzesService";
import BuyResearchProposalService from "./inner-pages/BuyResearchProposalService";
import DoMyBookAnalysisService from "./inner-pages/DoMyBookAnalysisService";
import DoMyBookReportService from "./inner-pages/DoMyBookReportService";
import DoMyExamService from "./inner-pages/DoMyExamService";
import DoMyFinalYearProjectService from "./inner-pages/DoMyFinalYearProjectService";
import DoMyOnlineClassService from "./inner-pages/DoMyOnlineClassService";
import DoMyOnlineCourseService from "./inner-pages/DoMyOnlineCourseService";
import DoMyQuizzesService from "./inner-pages/DoMyQuizzesService";
import DoMyResearchProposalService from "./inner-pages/DoMyResearchProposalService";
import ExamWriterService from "./inner-pages/ExamWriterService";
import FinalYearProjectWriterService from "./inner-pages/FinalYearProjectWriterService";
import GetOnlineClassesService from "./inner-pages/GetOnlineClassesService";
import GetOnlineCoursesService from "./inner-pages/GetOnlineCoursesService";
import HelpWithOnlineClassService from "./inner-pages/HelpWithOnlineClassService";
import HelpWithOnlineCoursesService from "./inner-pages/HelpWithOnlineCoursesService";
import HelpWithResearchProposalService from "./inner-pages/HelpWithResearchProposalService";
import OnlineClassHelpService from "./inner-pages/OnlineClassHelpService";
import PayForBookAnalysisService from "./inner-pages/PayForBookAnalysisService";
import PayForBookReportService from "./inner-pages/PayForBookReportService";
import PayForExamService from "./inner-pages/PayForExamService";
import PayForFinalYearProjectService from "./inner-pages/PayForFinalYearProjectService";
import PayForOnlineClassesService from "./inner-pages/PayForOnlineClassesService";
import PayForOnlineCoursesService from "./inner-pages/PayForOnlineCoursesService";
import PayForQuizzesService from "./inner-pages/PayForQuizzesService";
import PayForResearchProposalService from "./inner-pages/PayForResearchProposalService";
import QuizzesWriterService from "./inner-pages/QuizzesWriterService";
import ResearchProposalWriterService from "./inner-pages/ResearchProposalWriterService";
import ResearchProposalWritingService from "./inner-pages/ResearchProposalWritingService";
import TakeMyBookAnalysisService from "./inner-pages/TakeMyBookAnalysisService";
import TakeMyBookReportService from "./inner-pages/TakeMyBookReportService";
import TakeMyExamService from "./inner-pages/TakeMyExamService";
import TakeMyFinalYearProjectService from "./inner-pages/TakeMyFinalYearProjectService";
import TakeMyOnlineClassesService from "./inner-pages/TakeMyOnlineClassesService";
import TakeMyOnlineClassService from "./inner-pages/TakeMyOnlineClassService";
import TakeMyOnlineCourseService from "./inner-pages/TakeMyOnlineCourseService";
import TakeMyQuizzesService from "./inner-pages/TakeMyQuizzesService";
import WriteMyBookAnalysisService from "./inner-pages/WriteMyBookAnalysisService";
import WriteMyBookReportService from "./inner-pages/WriteMyBookReportService";
import WriteMyExamService from "./inner-pages/WriteMyExamService";
import WriteMyFinalYearProjectService from "./inner-pages/WriteMyFinalYearProjectService";
import WriteMyQuizzesService from "./inner-pages/WriteMyQuizzesService";
import WriteMyResearchProposalService from "./inner-pages/WriteMyResearchProposalService";
import BuyAssessmentService from "./inner-pages/BuyAssessmentService";
import BuyCasestudyService from "./inner-pages/BuyCasestudyService";
import BuyLiteratureReviewService from "./inner-pages/BuyLiteratureReviewService";
import GetAssessmentService from "./inner-pages/GetAssessmentService";
import GetCasestudyService from "./inner-pages/GetCasestudyService";
import GetLiteratureReviewService from "./inner-pages/GetLiteratureReviewService";
import ResearchPublicationService from "./inner-pages/ResearchPublicationService";
import WriteMyAssessmentService from "./inner-pages/WriteMyAssessmentService";
import WriteMyCasestudyService from "./inner-pages/WriteMyCasestudyService";
import WriteMyLiteratureReviewService from "./inner-pages/WriteMyLiteratureReviewService";
import PayForAssessmentService from "./inner-pages/PayForAssessmentService";
import PayForCasestudyService from "./inner-pages/PayForCasestudyService";
import PayForLiteratureReviewService from "./inner-pages/PayForLiteratureReviewService";
import RefundPolicy from "./RefundPolicy";
import CancelationPolicy from "./CancelationPolicy";
import ServicesPolicy from "./ServicesPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import FairUsagePolicy from "./FairUsagePolicy";
import GDRPPolicy from "./GDRPPolicy";
import ScrollToTop from "./ScrollToTop";
import CountryPhone from "./components/CountryPhone";
import NotFound from "./NotFound";
import City from "./components/City";
import FormTesting from "./components/FormTesting";
import HelpWithResearchPaper from "./inner-pages/HelpWithResearchPaper";
import WriteMyResearchPaper from "./inner-pages/WriteMyResearchPaper";
import AssignmentService from "./inner-pages/AssignmentService";
import CVWritingService from "./inner-pages/CVWritingService";
import CVHelp from "./inner-pages/CVHelp";
import DissertationService from "./inner-pages/DissertationService";
import EssayWriter from "./inner-pages/EssayWriter";
import ThesisWriter from "./inner-pages/ThesisWriter";
import HelpWithThesis from "./inner-pages/HelpWithThesis";
import DoMyThesis from "./inner-pages/DoMyThesis";
import PayForThesis from "./inner-pages/PayForThesis";
import BuyThesis from "./inner-pages/BuyThesis";
import ResearchPaperWriter from "./inner-pages/ResearchPaperWriter";
import DoMyResearchPaper from "./inner-pages/DoMyResearchPaper";
import PayForResearchPaper from "./inner-pages/PayForResearchPaper";
import BuyResearchPaper from "./inner-pages/BuyResearchPaper";
import ResearchPaperWritingService from "./inner-pages/ResearchPaperWritingService";
import CVWriter from "./inner-pages/CVWriter";
import HelpWithCV from "./inner-pages/HelpWithCV";
import WriteMyCV from "./inner-pages/WriteMyCV";
import PayForCV from "./inner-pages/PayForCV";
import ThesisWritingService from "./inner-pages/ThesisWritingService";
import ThesisHelp from "./inner-pages/ThesisHelp";
import DoMyCaseStudy from "./inner-pages/DoMyCaseStudy";
import DoMyLiteratureReview from "./inner-pages/DoMyLiteratureReview";
import DoMyCV from "./inner-pages/DoMyCV";
import AcademicHelp from "./inner-pages/AcademicHelp";
import OnlineAssignment from "./inner-pages/OnlineAssignment";
import WebsiteForAssignments from "./inner-pages/WebsiteForAssignments";
import AcademicWriter from "./inner-pages/AcademicWriter";
import AcademicWritingHelp from "./inner-pages/AcademicWritingHelp";
import AcademicHelpServices from "./inner-pages/AcademicHelpServices";
import AcademicHelpForStudents from "./inner-pages/AcademicHelpForStudents";
import AcademicWritingService from "./inner-pages/AcademicWritingService";
import EbookWritingExpert from "./inner-pages/EbookWritingExpert";
import BookWritingServices from "./inner-pages/BookWritingServices";
import BesteBookWriter from "./inner-pages/BesteBookWriter";
import BookWritingService from "./inner-pages/BookWritingService";
import WeCanWriteEBookForYou from "./inner-pages/WeCanWriteEBookForYou";
import ProfessionalBookWriters from "./inner-pages/ProfessionalBookWriters";
import PremiumPublishingServices from "./inner-pages/PremiumPublishingServices";
import BestPublishingServices from "./inner-pages/BestPublishingServices";
import HireaBookWriterNow from "./inner-pages/HireaBookWriterNow";
import HireBestGhostwriterNow from "./inner-pages/HireBestGhostwriterNow";
import GhostwritingServices from "./inner-pages/GhostwritingServices";
import ArticlePublishingService from "./inner-pages/ArticlePublishingService";
import HirePublicationExperts from "./inner-pages/HirePublicationExperts";
import BestThesisPublicationService from "./inner-pages/BestThesisPublicationService";
import WeCanPublishYourPaper from "./inner-pages/WeCanPublishYourPaper";

const App = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [CountryName, setCountryName] = useState("");
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [dynamicCountry, setDynamicCountry] = useState("");

  const handleDataFromChild = (data) => {
    // Do something with the data received from the child
    setDynamicCountry(data);
  };

  const fetchCity = async () => {
    const ipUrl = "https://api.ipify.org?format=json";

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(`https://ipapi.co/${userIp}/json/`);
      const locationData = await locationResponse.json();

      let fetchedCity = locationData.city || "London"; // Set default value
      let fetchedCountry = locationData.country || "GB"; // Set default value
      let fetchedCountryName = locationData.country_name || "United Kingdom"; // Set default value

      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);
      localStorage.setItem("CountryName", fetchedCountryName);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
      setCountryName(fetchedCountryName);
    } catch (error) {
      console.log("An error occurred:", error);
      // If the API request fails, set default values
      setCity("London");
      setCountry("GB");
      setCountryName("United Kingdom");
    }
  };

  // Example of how to use this function (assuming you have the setCity and setCountry functions defined):
  fetchCity();

  useEffect(() => {
    fetchCity();
  }, []);



  return (
    <Router>
      <CountryPhone countryName={country} dynamicCountry={dynamicCountry}>
        {({ whatsappNumber, telNumber }) => (
          <>
            <Header
              whatsappNumber={whatsappNumber}
              country={country}
              openTawkToChat={openTawkToChat}
              dynamicCountry={dynamicCountry}
            />
            <ScrollToTop />
            <City />
            <AppContent
              city={city}
              whatsappNumber={whatsappNumber}
              countryName={country}
              CountryName={CountryName}
              telNumber={telNumber}
              bannerLoaded={bannerLoaded}
              data={handleDataFromChild}
            />
            <CookieConsentComponent />
            <Footer
              whatsappNumber={whatsappNumber}
              telNumber={telNumber}
              city={city}
              country={country}
              openTawkToChat={openTawkToChat}
              dynamicCountry={dynamicCountry}
            />
          </>
        )}
      </CountryPhone>
    </Router>
  );
};

const AppContent = ({
  city,
  whatsappNumber,
  telNumber,
  countryName,
  data,
  CountryName,
}) => {
  const { weather, loading, getWeatherData } = useWeatherData();
  const [country, setCountry] = useState("");
  const location = useLocation();
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [dynamicCountry, setDynamicCountry] = useState("");

  const handleClick = () => {
    data(dynamicCountry);
  };

  useEffect(() => {
    handleClick();
  }, [dynamicCountry]);

  useEffect(() => {
    let newDynamicCountry = "";

    if (location.pathname.startsWith("/uk")) {
      newDynamicCountry = "/uk";
    } else if (location.pathname.startsWith("/usa")) {
      newDynamicCountry = "/usa";
    } else if (location.pathname.startsWith("/me")) {
      newDynamicCountry = "/me";
    } else if (location.pathname.startsWith("/aus")) {
      newDynamicCountry = "/aus";
    } else if (
      location.pathname.startsWith("/ca") &&
      !location.pathname.startsWith("/cancellation-policy") &&
      !location.pathname.startsWith("/casestudy")
    ) {
      newDynamicCountry = "/ca";
    } else if (location.pathname.startsWith("/eu")) {
      newDynamicCountry = "/eu";
    }

    setDynamicCountry(newDynamicCountry);
    // localStorage.setItem('location' , newDynamicCountry)
  }, []);

  const fetchWeatherData = useCallback(async () => {
    try {
      const weatherData = await getWeatherData();
      if (weatherData) {
        setCountry(weatherData.country);
      }
    } catch (error) {
      console.log("An error occurred while fetching weather data:", error);
    }
  }, [getWeatherData]);

  useEffect(() => {
    if (weather && weather.country) {
      setCountry(weather.country);
    }
  }, [weather]);

  useEffect(() => {
    if (location.pathname === "/" && !weather && !loading) {
      fetchWeatherData();
      setBannerLoaded(true);
    }
  }, [location.pathname, weather, loading, fetchWeatherData, setBannerLoaded]);

  useEffect(() => {
    if (bannerLoaded) {
      setTimeout(() => {
        setShowLoader(false); // Hide the loader after 3 seconds
      }, 3000); // 3000 milliseconds = 3 seconds
    }
  }, [bannerLoaded]);

  const navigate = useNavigate(); // Use the useNavigate hook for programmatic navigation

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // If the form submission is successful, redirect to the thank you page
    // Replace "/thankyou" with the route to your thank you page
    navigate(`${dynamicCountry}/thankyou`);
  };

  let abc = localStorage.getItem("location");

  return (
    <div className={location.pathname === "/" ? "main-div" : ""}>
      {loading && location.pathname === "/" && !weather && showLoader ? (
        <PageLoader />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route path="/form-testing" element={<FormTesting />} />
            <Route
              path={`${dynamicCountry}/about`}
              element={
                <About
                  city={city}
                  whatsappNumber={whatsappNumber}
                  openTawkToChat={openTawkToChat}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="*"
              element={
                <AcademicHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/uk"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/usa"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/me"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/aus"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/ca"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path="/eu"
              element={
                <Home
                  city={city}
                  whatsappNumber={whatsappNumber}
                  bannerLoaded={bannerLoaded}
                  countryName={countryName}
                  CountryName={CountryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/contact`}
              element={
                <Contact
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/thankyou`}
              element={
                <ThankYou
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  openTawkToChat={openTawkToChat}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <Form
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route exact path="/weatherdata" element={<useWeatherData />} />
            <Route
              path={`${dynamicCountry}/offers`}
              element={
                <Order
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/order-form`}
              element={
                <OrderForm
                  countryName={countryName}
                  CountryName={CountryName}
                  city={city}
                  whatsappNumber={whatsappNumber}
                  onSubmit={handleFormSubmit}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/refund-policy`}
              element={<RefundPolicy />}
            />
            <Route
              path={`${dynamicCountry}/cancellation-policy`}
              element={<CancelationPolicy />}
            />
            <Route
              path={`${dynamicCountry}/services-policy`}
              element={<ServicesPolicy />}
            />
            <Route
              path={`${dynamicCountry}/privacy-policy`}
              element={<PrivacyPolicy />}
            />
            <Route
              path={`${dynamicCountry}/terms-conditions`}
              element={<Terms />}
            />
            <Route
              path={`${dynamicCountry}/fair-usage-policy`}
              element={<FairUsagePolicy />}
            />
            <Route
              path={`${dynamicCountry}/gdrp_policy`}
              element={<GDRPPolicy />}
            />
            <Route
              path={`${dynamicCountry}/essay-help`}
              element={
                <EssayHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/dissertation-help`}
              element={
                <DissertationHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/articles`}
              element={
                <Articles
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/content-help`}
              element={
                <ContentHelpServices
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/coursework-help`}
              element={
                <CourseworkHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/cv-writing`}
              element={
                <Cvwriting
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/cv-writing-service`}
              element={
                <CVWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/cv-help`}
              element={
                <CVHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/cv-writer`}
              element={
                <CVWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-cv`}
              element={
                <HelpWithCV
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-cv`}
              element={
                <WriteMyCV
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-cv`}
              element={
                <DoMyCV
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-cv`}
              element={
                <PayForCV
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-cv`}
              element={
                <BuyThesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/exam`}
              element={
                <ExamHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pdf-ebook`}
              element={
                <PDFEbookWriting
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/presentations`}
              element={
                <Presentations
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/quizzes`}
              element={
                <QuizzesHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/thesis`}
              element={
                <Thesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/homework-help`}
              element={
                <HomeworkHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-paper-writer`}
              element={
                <ResearchPaperWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-research-paper`}
              element={
                <DoMyResearchPaper
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-research-paper`}
              element={
                <PayForResearchPaper
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-research-paper`}
              element={
                <BuyResearchPaper
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-paper-writing-service`}
              element={
                <ResearchPaperWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-paper-help`}
              element={
                <ResearchPaperHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/book-report`}
              element={
                <BookReportHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/book-analysis-help`}
              element={
                <BookAnalysisHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/online-courses-help`}
              element={
                <OnlineCoursesHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-publication`}
              element={
                <ResearchPublicationHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/casestudy`}
              element={
                <CasestudyHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/literature-review`}
              element={
                <LiteratureReviewHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/online-classes`}
              element={
                <OnlineClassesHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/article-help`}
              element={
                <ArticleHelpService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/article-writer`}
              element={
                <ArticleWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/article-writing-service`}
              element={
                <ArticleWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/assessment`}
              element={
                <AssessmentHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/assignment`}
              element={
                <AssignmentsHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/assignment-service`}
              element={
                <AssignmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/assignment-writer`}
              element={
                <AssignmentWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-article`}
              element={
                <BuyArticleService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-assignment`}
              element={
                <BuyAssignmentServiceHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-coursework`}
              element={
                <BuyCourseworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-dissertation`}
              element={
                <BuyDissertationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-ebook`}
              element={
                <BuyEbookService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-essay`}
              element={
                <BuyEssayHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-homework`}
              element={
                <BuyHomeworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/dissertation-writer`}
              element={
                <DissertationWriterHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/dissertation-writing-service`}
              element={
                <DissertationWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/dissertation-service`}
              element={
                <DissertationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-article`}
              element={
                <DoMyArticleService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-assignment`}
              element={
                <DoMyAssignmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-coursework`}
              element={
                <DoMyCourseworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-dissertation`}
              element={
                <DoMyDissertation
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-ebook`}
              element={
                <DoMyEbookService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-essay`}
              element={
                <DoMyEssayServiceHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-homework`}
              element={
                <DoMyHomeworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/ebook-help`}
              element={
                <EbookHelpService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/ebook-writer`}
              element={
                <EbookWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/ebook-writing-service`}
              element={
                <EbookWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/essay-writing-service`}
              element={
                <EssayWritingServiceHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/essay-writer`}
              element={
                <EssayWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/exam`}
              element={
                <ExamHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/final-year-project`}
              element={
                <FinalYearProject
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-article`}
              element={
                <HelpWithArticleService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-coursework`}
              element={
                <HelpWithCourseworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-dissertation`}
              element={
                <HelpWithDissertationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-ebook`}
              element={
                <HelpWithEbookService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-essay`}
              element={
                <HelpWithEssayHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-homework`}
              element={
                <HelpWithHomeworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/homework-writer`}
              element={
                <HomeworkWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/homework-writing-service`}
              element={
                <HomeworkWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-article`}
              element={
                <PayForArticleService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-assignment`}
              element={
                <PayForAssignmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-coursework`}
              element={
                <PayForCourseworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-dissertation`}
              element={
                <PayForDissertationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-ebook`}
              element={
                <PayForEbookService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-essay`}
              element={
                <PayForEssayServiceHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-homework`}
              element={
                <PayForHomeworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/perdisco-assignment`}
              element={
                <PerdiscoAssignment
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/presentations`}
              element={
                <Presentations
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/proofreading`}
              element={
                <ProofreadingEditing
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/quizzes`}
              element={
                <QuizzesHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-proposal`}
              element={
                <ResearchProposalHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/thesis-writter`}
              element={
                <ThesisWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/thesis-writing-service`}
              element={
                <ThesisWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/thesis-help`}
              element={
                <ThesisHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-thesis`}
              element={
                <HelpWithThesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-thesis`}
              element={
                <Thesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-thesis`}
              element={
                <DoMyThesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-thesis`}
              element={
                <PayForThesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-thesis`}
              element={
                <BuyThesis
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-article`}
              element={
                <WriteMyArticleService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-assignment`}
              element={
                <WriteMyAssignmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-coursework`}
              element={
                <WriteMyCourseworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-dissertation`}
              element={
                <WriteMyDissertationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-ebook`}
              element={
                <WriteMyEbookService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-essay`}
              element={
                <WriteMyEssayServiceHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-homework`}
              element={
                <WriteMyHomeworkService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/coursework-writer`}
              element={
                <CourseworkWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/coursework-writing-service`}
              element={
                <CourseworkWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/book-analysis-writer`}
              element={
                <BookAnalysisWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/book-report-writer`}
              element={
                <BookReportWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-book-analysis`}
              element={
                <BuyBookAnalysisService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-book-report`}
              element={
                <BuyBookReportService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-exam`}
              element={
                <BuyExamService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-final-year-project`}
              element={
                <BuyFinalYearProjectService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-online-classes`}
              element={
                <BuyOnlineClassesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-online-courses`}
              element={
                <BuyOnlineCoursesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-quizzes`}
              element={
                <BuyQuizzesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-research-proposal`}
              element={
                <BuyResearchProposalService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-book-analysis`}
              element={
                <DoMyBookAnalysisService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-book-report`}
              element={
                <DoMyBookReportService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-exam`}
              element={
                <DoMyExamService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-final-year-project`}
              element={
                <DoMyFinalYearProjectService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-online-class`}
              element={
                <DoMyOnlineClassService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-online-course`}
              element={
                <DoMyOnlineCourseService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-quizzes`}
              element={
                <DoMyQuizzesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-research-proposal`}
              element={
                <DoMyResearchProposalService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/exam-writer`}
              element={
                <ExamWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/final-year-project-writer`}
              element={
                <FinalYearProjectWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/get-online-classes`}
              element={
                <GetOnlineClassesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/get-online-courses`}
              element={
                <GetOnlineCoursesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-online-class`}
              element={
                <HelpWithOnlineClassService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-online-courses`}
              element={
                <HelpWithOnlineCoursesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-research-proposal`}
              element={
                <HelpWithResearchProposalService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/help-with-research-paper`}
              element={
                <HelpWithResearchPaper
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/online-class-help`}
              element={
                <OnlineClassHelpService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-book-analysis`}
              element={
                <PayForBookAnalysisService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-book-report`}
              element={
                <PayForBookReportService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-exam`}
              element={
                <PayForExamService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-final-year-project`}
              element={
                <PayForFinalYearProjectService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-online-classes`}
              element={
                <PayForOnlineClassesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-online-courses`}
              element={
                <PayForOnlineCoursesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-quizzes`}
              element={
                <PayForQuizzesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-research-proposal`}
              element={
                <PayForResearchProposalService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/quizzes-writer`}
              element={
                <QuizzesWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-proposal-writer`}
              element={
                <ResearchProposalWriterService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-proposal-writing-service`}
              element={
                <ResearchProposalWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-book-analysis`}
              element={
                <TakeMyBookAnalysisService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-book-report`}
              element={
                <TakeMyBookReportService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-exam`}
              element={
                <TakeMyExamService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-final-year-project`}
              element={
                <TakeMyFinalYearProjectService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-online-classes`}
              element={
                <TakeMyOnlineClassesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-online-class`}
              element={
                <TakeMyOnlineClassService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-online-course`}
              element={
                <TakeMyOnlineCourseService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/take-my-quizzes`}
              element={
                <TakeMyQuizzesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-book-analysis`}
              element={
                <WriteMyBookAnalysisService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-book-report`}
              element={
                <WriteMyBookReportService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-exam`}
              element={
                <WriteMyExamService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-final-year-project`}
              element={
                <WriteMyFinalYearProjectService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-quizzes`}
              element={
                <WriteMyQuizzesService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-research-proposal`}
              element={
                <WriteMyResearchProposalService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-research-paper`}
              element={
                <WriteMyResearchPaper
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-assessment`}
              element={
                <BuyAssessmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-assessment`}
              element={
                <BuyAssessmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-casestudy`}
              element={
                <BuyCasestudyService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-casestudy`}
              element={
                <DoMyCaseStudy
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/buy-literature-review`}
              element={
                <BuyLiteratureReviewService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/get-assessment`}
              element={
                <GetAssessmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/get-casestudy`}
              element={
                <GetCasestudyService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/get-literature-review`}
              element={
                <GetLiteratureReviewService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/research-publication-service`}
              element={
                <ResearchPublicationService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-assessment`}
              element={
                <WriteMyAssessmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-casestudy`}
              element={
                <WriteMyCasestudyService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/write-my-literature-review`}
              element={
                <WriteMyLiteratureReviewService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-assessment`}
              element={
                <PayForAssessmentService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-casestudy`}
              element={
                <PayForCasestudyService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/pay-for-literature-review`}
              element={
                <PayForLiteratureReviewService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/do-my-literature-review`}
              element={
                <DoMyLiteratureReview
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-help`}
              element={
                <AcademicHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-help-for-students`}
              element={
                <AcademicHelpForStudents
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-help-services`}
              element={
                <AcademicHelpServices
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-writing-help`}
              element={
                <AcademicWritingHelp
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-writing-service`}
              element={
                <AcademicWritingService
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/academic-writer`}
              element={
                <AcademicWriter
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/website-for-assignments`}
              element={
                <WebsiteForAssignments
                  city={city}
                  whatsappNumber={whatsappNumber}
                  countryName={countryName}
                  dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/online-assignment`}
              element={
                <OnlineAssignment
                city={city}
                whatsappNumber={whatsappNumber}
                countryName={countryName}
                dynamicCountry={dynamicCountry}
                />
              }
            />
            <Route
              path={`${dynamicCountry}/ebook-writing-expert`}
              element={
                <EbookWritingExpert
                city={city}
                whatsappNumber={whatsappNumber}
                countryName={countryName}
                dynamicCountry={dynamicCountry}
                />
              }
            />
              <Route
                path={`${dynamicCountry}/book-writing-services`}
                element={
                  <BookWritingServices
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/best-ebook-writer`}
                element={
                  <BesteBookWriter
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/book-writing-service`}
                element={
                  <BookWritingService
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/write-ebook-for-you`}
                element={
                  <WeCanWriteEBookForYou
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/professional-book-writers`}
                element={
                  <ProfessionalBookWriters
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/premium-publishing-services`}
                element={
                  <PremiumPublishingServices
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/best-publishing-services`}
                element={
                  <BestPublishingServices
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/hire-a-book-writer`}
                element={
                  <HireaBookWriterNow
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/hire-best-ghostwriter`}
                element={
                  <HireBestGhostwriterNow
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/ghostwriting-services`}
                element={
                  <GhostwritingServices
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/article-publishing-service`}
                element={
                  <ArticlePublishingService
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/hire-publication-experts`}
                element={
                  <HirePublicationExperts
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/best-thesis-publication-service`}
                element={
                  <BestThesisPublicationService
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
              <Route
                path={`${dynamicCountry}/we-can-publish-your-paper`}
                element={
                  <WeCanPublishYourPaper
                    city={city}
                    whatsappNumber={whatsappNumber}
                    countryName={countryName}
                    dynamicCountry={dynamicCountry}
                  />
                }
              />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
