import React, { useEffect, useState, useRef } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { Col, Container, Row } from "react-bootstrap";
import City from "./components/City";
import intlTelInput from "intl-tel-input";
import CoupanModal from "./CoupanModal";

const OrderForm = ({ city, onSubmit, countryName }) => {
  const paymentImg =
    "https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/1cb30f5d-c669-4d87-315d-50670470c800/compress";
  const [ppp, setPpp] = useState(20.0);
  const [additionalPrice, setAdditionalPrice] = useState(-8);
  const [country, setCountry] = useState("GB");
  const [userCountry, setUserCountry] = useState("");
  const [CountryName, setCountryName] = useState("");
  const [userCountryFilled, setUserCountryFilled] = useState(false);
  const [psymbol, setPsymbol] = useState("");
  const [punit, setPunit] = useState("gbp");
  const [orderFiles, setOrderFiles] = useState([]);
  const [pricePerPage, setPricePerPage] = useState(ppp);
  const [paperStandard, setPaperStandard] = useState("Premium Quality");
  const [paperFormat, setPaperFormat] = useState("Double Standard");
  const [pages, setPages] = useState("3");
  const [deadline, setDeadline] = useState("3 Days");
  const [showValidation, setShowValidation] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNameFilled, setUserNameFilled] = useState(false);
  const [userEmailFilled, setUserEmailFilled] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userPhoneFilled, setUserPhoneFilled] = useState(false);
  const [info, setInfo] = useState("");
  const [number, setNumber] = useState("");
  const phoneInputRef = useRef(null);
  const initialSelectedValues = {
    typeOfPaper: "Essay Writing",
    taskLevel: "Undergraduate",
    selectSubject: "Business",
    referencingStyle: "Harvard Referencing",
    noOfSources: "10",
    preferredLanguage: "English (British)",
  };
  const [isLoading, setIsLoading] = useState(false);

  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  // fetch Country Name

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

      let fetchedCountryName = locationData.country_name || "United Kingdom"; // Set default value

      // Store the city and country in local storage
      localStorage.setItem("CountryName", fetchedCountryName);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCountryName(fetchedCountryName);
      setUserCountry(fetchedCountryName);

      console.log("Order Form", CountryName);
    } catch (error) {
      console.log("An error occurred:", error);
      // If the API request fails, set default values
      setCountryName("United Kingdom");
    }
  };

  useEffect(() => {
    fetchCity();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues((prevState) => ({ ...prevState, [name]: value }));
    event.target.classList.add("select-green-border");
  };

  // Function to handle input changes
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setUserNameFilled(e.target.value.trim() !== "");
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
    setTopicFilled(e.target.value.trim() !== "");
  };

  const handleUserEmailChange = (e) => {
    const inputValue = e.target.value.trim();
    setUserEmail(inputValue);
    setUserEmailFilled(inputValue !== "" && inputValue.includes("@"));
  };

  const handleUserPhoneChange = (e) => {
    setUserPhone(e.target.value);
    setUserPhoneFilled(e.target.value.trim() !== "");
  };

  useEffect(() => {
    setUserCountry(CountryName);
  }, []);

  const handleUserCountryChange = (event) => {
    const selectedOptionValue = event.target.value;
    setUserCountry(selectedOptionValue);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  // State variable to keep track of the active form tab
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle "Next" button click and switch to the next tab
  const handleNextClick = () => {
    if (topic.trim() !== "") {
      setActiveTab(2); // Switch to the second tab
      setShowValidation(false); // Hide the validation message
    } else {
      setShowValidation(true); // Show the validation message
    }
  };

  // Function to handle "Previous" button click and switch to the previous tab
  const handlePreviousClick = () => {
    setActiveTab(1); // Switch to the first tab
    setShowValidation(false); // Hide the validation message
  };

  // Function to handle "Order Now" button click (Submit the form)
  const handleOrderNowClick = (event) => {
    event.preventDefault();
    if (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPhone.trim() !== ""
    ) {
      // Process the form data here
      handleSubmit(event); // Call the handleSubmit function
    } else {
      setShowValidation(true); // Show the validation message
    }
  };

  const [selectedOption, setSelectedOption] = useState({
    wordcount: 900,
    price: 3,
    value: "3",
    label: "3 Pages / 900 Words",
  });

  const handleDeadlineChange = (event) => {
    const selectedValue = event.target.value;
    // Get the data-price attribute of the selected option
    const priceData =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-price"
      );
    // Convert the priceData to an integer
    const additionalPrice = parseInt(priceData, 10);
    // Now you can directly set the additional price in the state
    setAdditionalPrice(additionalPrice);
    setDeadline(selectedValue);
    event.target.classList.add("select-green-border");
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCountry = localStorage.getItem("country");
    if (storedCountry) {
      setCountry(storedCountry);
    }
  }, []);

  useEffect(() => {
    const countryData = {
      IE: { psymbol: "€", ppp: 18.0, punit: "eur" },
      AU: { psymbol: "$", ppp: 18.0, punit: "aud" },
      GB: { psymbol: "£", ppp: 18.0, punit: "gbp" },
      NL: { psymbol: "€", ppp: 18.0, punit: "eur" },
      NO: { psymbol: "€", ppp: 18.0, punit: "eur" },
      NZ: { psymbol: "$", ppp: 18.0, punit: "nzd" },
      OM: { psymbol: "$", ppp: 18.0, punit: "usd" },
      AE: { psymbol: "$", ppp: 18.0, punit: "usd" },
      US: { psymbol: "$", ppp: 18.0, punit: "usd" },
    };
    // const countryData = {
    //   IE: { psymbol: "€", ppp: 23.83, punit: "eur" },
    //   AU: { psymbol: "$", ppp: 35.93, punit: "aud" },
    //   GB: { psymbol: "£", ppp: 20.0, punit: "gbp" },
    //   NL: { psymbol: "€", ppp: 23.83, punit: "eur" },
    //   NO: { psymbol: "€", ppp: 23.83, punit: "eur" },
    //   NZ: { psymbol: "$", ppp: 39.17, punit: "nzd" },
    //   OM: { psymbol: "$", ppp: 28.51, punit: "usd" },
    //   AE: { psymbol: "$", ppp: 28.51, punit: "usd" },
    //   US: { psymbol: "$", ppp: 28.51, punit: "usd" },
    // };

    if (countryData[country]) {
      const { psymbol, ppp, punit } = countryData[country];
      setPsymbol(psymbol);
      setPpp(ppp);
      setPunit(punit);
    } else {
      // Default values for unknown countries
      setPsymbol("£");
      setPpp(20.0);
      setPunit("gbp");
    }
  }, [country]);

  console.log("ddd", userCountry);
  console.log(CountryName);

  useEffect(() => {
    // Check if currency-related data is already in local storage
    const storedPsymbol = localStorage.getItem("psymbol");
    const storedPpp = localStorage.getItem("ppp");
    const storedPunit = localStorage.getItem("punit");

    if (storedPsymbol && storedPpp && storedPunit) {
      // Data is already in local storage, use it
      setPsymbol(storedPsymbol);
      setPpp(parseFloat(storedPpp)); // Parse as a float
      setPunit(storedPunit);
    } else {
      // If the data is not in local storage, you might want to update it
      // by calling `updateCurrencyData(country)` here, as per your logic.
    }
  }, []); // Empty dependency array to run this effect only once

  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const maxSize = 50 * 1024 * 1024; // 50 MB in bytes

    const isOverSizeLimit = Array.from(selectedFiles).some(
      (file) => file.size > maxSize
    );

    if (isOverSizeLimit) {
      setErrorMessage("File size exceeds the 50 MB limit.");
    } else {
      setErrorMessage("");
      setOrderFiles(selectedFiles); // Store the selected files in the state
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFiles = event.dataTransfer.files;

    const isRarFile = Array.from(selectedFiles).some((file) =>
      file.name.endsWith(".rar")
    );

    if (isRarFile) {
      setErrorMessage("RAR files are not allowed.");
    } else {
      setErrorMessage("");
      // Handle the dropped files as needed
    }
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const activeCountryElement = document.querySelector(
      ".iti__flag-container .iti__selected-flag"
    );

    // Get the 'data-dial-code' attribute value from the active country element
    const dialCode = activeCountryElement
      .getAttribute("title")
      .split(" ")
      .at(-1);
    const orderID = Date.now(); // will be unique every millisecond
    const formData = new FormData();
    formData.append("OrderID", orderID);
    formData.append("TypeOfPaper", selectedValues.typeOfPaper);
    formData.append("TaskLevel", selectedValues.taskLevel);
    formData.append("SelectSubject", selectedValues.selectSubject);
    formData.append("ReferencingStyle", selectedValues.referencingStyle);
    formData.append("NoOfSources", selectedValues.noOfSources);
    formData.append("PreferredLanguage", selectedValues.preferredLanguage);
    formData.append("PaperStandard", paperStandard);
    formData.append("NoOfPages", selectedOption.value);
    formData.append("PaperFormat", paperFormat);
    formData.append("Deadline", deadline);
    formData.append("PricePerPage", pricePerPage.toFixed(2));
    const finalPrice = (pricePerPage * parseInt(pages, 10)).toFixed(2);
    formData.append("TotalAmount", finalPrice);
    formData.append("Topic", topic);
    formData.append("UserName", userName);
    formData.append("UserEmail", userEmail);
    formData.append("Country", userCountry);
    formData.append("PostalCode", "None");
    formData.append("UserPhone", `${dialCode} ${userPhone}`);
    formData.append("UserInfo", info);
    formData.append("CurrencyUnit", punit);
    formData.append("access_token", "DIabOnduNDErsapHalveyeALp");

    console.log(finalPrice);

    for (let i = 0; i < orderFiles.length; i++) {
      formData.append("orderFiles[]", orderFiles[i]);
    }

    const config = {
      headers: {
        enctype: "multipart/form-data",
      },
    };

    axios
      .post(
        "https://gradesup-backend-api.vercel.app/send-order-form",
        formData,
        config
      )
      .then((response) => {
        // Access the orderID from the response
        const orderID = response.data.data.orderID;

        console.log("Email sent successfully!", response.data.data.orderID);

        // Reset the state variables to their initial values
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setUserCountry("");
        setInfo("");
        setTopic("");
        setUserNameFilled(false);
        setUserEmailFilled(false);
        setUserPhoneFilled(false);
        setUserCountryFilled(false);
        setTopicFilled(false);

        // Call the 'onSubmit' function passed from the 'MainBanner' component to handle the form submission

        const product = "Digital Service";
        const encodedProduct = btoa(product);
        const pUnit = btoa(punit); // Encode 'punit' using base64 (similar to PHP base64_encode)
        const pricetotal = btoa(pricePerPage * parseInt(pages, 10)); // Encode the calculated value using base64
        const order_token = btoa(orderID); // Encode 'orderID' using base64
        console.log("ordertoken", orderID, order_token);
        const finalUrl = btoa(
          "https://gradesup-backend-api.vercel.app/send-order-form-after"
        );
        // Generate the payment link with the necessary parameters
        // const paymentLink = `https://eduresearchers.com/test-payment/secure-pay-external-2.php?cevpr_havg=${pUnit}&cevpr_nzbhag=${pricetotal}&cebqhpg_anzr=${encodedProduct}&gbxra_rkgreany=${order_token}&url=${finalUrl}`;
        const paymentLink = `https://mastermindsenterprises.com/stripe-version-2/secure-pay-external-2.php?cevpr_havg=${pUnit}&cevpr_nzbhag=${pricetotal}&cebqhpg_anzr=${encodedProduct}&gbxra_rkgreany=${order_token}&url=${finalUrl}`; // Redirect the user to the Stripe link
        window.location.href = paymentLink;
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  // Topic Input field
  const [topic, setTopic] = useState("");
  const [topicFilled, setTopicFilled] = useState("");

  // Paper Standard options and their prices
  const paperStandardOptions = {
    "Standard Quality": 0.0,
    "Premium Quality": 5.0,
  };

  const handlePaperStandardChange = (e) => {
    setPaperStandard(e.target.value);
    e.target.classList.add("select-green-border");
  };

  // Paper Format options and their prices
  const paperFormatOptions = {
    "Double Spaced": 0.0,
    "Single Spaced": 9.0,
  };

  const handlePaperFormatChange = (e) => {
    setPaperFormat(e.target.value);
    e.target.classList.add("select-green-border");
  };

  // Price Per Page
  useEffect(
    (selectedValue) => {
      // Calculate the Price Per Page based on the selected option's price, additional price, and paper standard
      const additionalPriceForPaperStandard =
        paperStandardOptions[paperStandard] || 0;
      const additionalPriceForPaperFormat =
        paperFormatOptions[paperFormat] || 0;
      const pricePerPage =
        ppp +
        additionalPrice +
        additionalPriceForPaperStandard +
        additionalPriceForPaperFormat;
      setPricePerPage(pricePerPage);
    },
    [ppp, additionalPrice, paperStandard, paperFormat]
  );

  const handlePagesChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = pageOptions.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setSelectedOption(selectedOption);
      setPages(selectedValue); // Update the selected number of pages
    }
    event.target.classList.add("select-green-border");
  };

  // Input field

  const countryyy = countryName;

  const [initialCountry, setInitialCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    setInitialCountry(countryyy);
    setCountryCode(countryyy);
  }, [countryyy]);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: countryyy,
        geoIpLookup: function (success, failure) {
          const countryCode = countryyy;
          success(countryCode);
          // Save the updated countryCode in local storage
          localStorage.setItem("country", countryCode);
          setCountryCode(countryCode);
        },
      });

      // Clean up the event listener when the component unmounts
      return () => {
        iti.destroy();
      };
    }
  }, [countryyy, phoneInputRef]);

  const pageOptions = [];

  for (let i = 1; i <= 200; i++) {
    const wordcount = i * 300;
    const price = i;
    const value = i.toString();
    const label = `${i} Page / ${wordcount} Words`;
    pageOptions.push({ wordcount, price, value, label });
  }

  return (
    <>
      <City />
      <section className="OrderForm">
        <Container>
          <Row>
            <Col md={8}>
              <CoupanModal />
              <form
                id="order_form"
                onSubmit={handleSubmit}
                name="order_form"
                encType="multipart/form-data"
              >
                <div style={{ display: activeTab === 1 ? "block" : "none" }}>
                  <div className="form-tab">
                    <div className="order_bg_mac">
                      <div className="topbar_mac bg_gr-re">
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "5px" }}
                        >
                          <div className="circle-ball1"></div>
                          <div className="circle-ball2"></div>
                          <div className="circle-ball3"></div>
                        </div>
                        <div className="w-100">
                          <div className="search_url d-flex">
                            <div>
                              Gradesup.org<sup>®</sup>
                            </div>{" "}
                            / ORDER DETAILS / STEP 1
                          </div>
                        </div>
                      </div>
                      {showValidation && !topicFilled && (
                        <div
                          class="alert alert-danger form-validation"
                          bis_skin_checked="1"
                        >
                          Please Fill All Fields In Order Form
                        </div>
                      )}
                      {/* Rest of the form fields */}
                      <div className="form_fields">
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Type of Paper
                          </label>
                          <select
                            className="form-control"
                            name="typeOfPaper"
                            value={selectedValues.typeOfPaper}
                            onChange={handleChange}
                          >
                            {/* Add options based on your requirements */}

                            <option value="Essay writing">Essay Writing</option>
                            <option value="Assignment Writing ">
                              Assignment Writing{" "}
                            </option>
                            <option value="Research Paper writing ">
                              Research Paper writing{" "}
                            </option>
                            <option value="Course Work ">Course Work </option>
                            <option value="Case Study">Case Study</option>
                            <option value="Term Paper">Term Paper</option>
                            <option value="Online Exam Quizzes">
                              Online Exam Quizzes
                            </option>
                            <option value="Homework">Homework</option>
                            <option value="Editing">Editing</option>
                            <option value="Formatting">Formatting</option>
                            <option value="Proofreading">Proofreading</option>
                            <option value="Annotated Bibliography">
                              Annotated Bibliography
                            </option>
                            <option value="Speech/Presentation">
                              Speech/Presentation
                            </option>
                            <option value="PowerPoint Presentation">
                              PowerPoint Presentation
                            </option>
                            <option value="Thesis">Thesis</option>
                            <option value="Thesis Proposal">
                              Thesis Proposal
                            </option>
                            <option value="Dissertation">Dissertation</option>
                            <option value="Dissertation Chapter- Abstract">
                              Dissertation Chapter- Abstract
                            </option>
                            <option value="Dissertation Chapter- Introduction Chapter">
                              Dissertation Chapter- Introduction Chapter
                            </option>
                            <option value="Dissertation Chapter- Literature Review">
                              Dissertation Chapter- Literature Review
                            </option>
                            <option value="Dissertation Chapter- Methodology">
                              Dissertation Chapter- Methodology
                            </option>
                            <option value="Dissertation Chapter- Result">
                              Dissertation Chapter- Result
                            </option>
                            <option value="Dissertation Chapter- Discussion">
                              Dissertation Chapter- Discussion
                            </option>
                            <option value="Book Report">Book Report</option>
                            <option value="Book Review">Book Review</option>
                            <option value="Movie Review ">Movie Review </option>
                            <option value="Research Proposal">
                              Research Proposal
                            </option>
                            <option value="Case Study">Case Study</option>
                            <option value="Article">Article</option>
                            <option value="Article Critique">
                              Article Critique
                            </option>
                            <option value="Admission Essays">
                              Admission Essays
                            </option>
                            <option value="Admission Sevices - Editing">
                              Admission Sevices - Editing
                            </option>
                            <option value="Psychology">Psychology</option>
                            <option value="Religious studies">
                              Religious studies
                            </option>
                            <option value="Shakespeare">Shakespeare</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Technology">Technology</option>
                            <option value="Web, High tech">
                              Web, High tech
                            </option>
                            <option value="Womens and gender studies">
                              Womens and gender studies
                            </option>
                            <option value="Zoology">Zoology</option>
                            <option value="Thesis Writing">
                              Thesis Writing
                            </option>
                            <option value="Custom essay writing">
                              Custom essay writing
                            </option>
                            <option value="College Essay writing">
                              College Essay Writing
                            </option>
                            <option value="Write my Paper">
                              Write my Paper
                            </option>
                            <option value="College Paper">College Paper</option>
                            <option value="Online Exam Quizzes">
                              Online Exam Quizzes
                            </option>
                            <option value="Resume writing">
                              Resume writing
                            </option>
                            <option value="Business letter writing">
                              Business letter writing
                            </option>
                            <option value="SEO Optimized Articles">
                              SEO Optimized Articles
                            </option>
                            <option value="Blog Writing">Blog Writing</option>
                            <option value="Web Content Writing">
                              Web Content Writing
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Task/Academic Level
                          </label>
                          <select
                            className="form-control"
                            name="taskLevel"
                            value={selectedValues.taskLevel}
                            onChange={handleChange}
                          >
                            {/* Add options based on your requirements */}
                            <option value="undergraduate">Undergraduate</option>
                            <option value="High School">High School</option>
                            <option value="Master">Master</option>
                            <option value="Doctoral">Doctoral</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Select Subject
                          </label>
                          <select
                            className="form-control"
                            name="selectSubject"
                            value={selectedValues.selectSubject}
                            onChange={handleChange}
                          >
                            <option value="business">Business</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Nursing">Nursing</option>
                            <option value="HRM">HRM</option>
                            <option value="Medical">Medical</option>
                            <option value="Anthropology">Anthropology</option>
                            <option value="Application Letters">
                              Application Letters
                            </option>
                            <option value="Art &amp; Architecture">
                              Art &amp; Architecture
                            </option>
                            <option value="Biology">Biology</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Classics English literature">
                              Classics English literature
                            </option>
                            <option value="Communications">
                              Communications
                            </option>
                            <option value="Computer science">
                              Computer science
                            </option>
                            <option value="Economics">Economics</option>
                            <option value="Education">Education</option>
                            <option value="Family and Consumer Science">
                              Family and Consumer Science
                            </option>
                            <option value="Film &amp; Theater Studies">
                              Film &amp; Theater Studies
                            </option>
                            <option value="Finance">Finance</option>
                            <option value="History">History</option>
                            <option value="Law">Law</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Music">Music</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Physics">Physics</option>
                            <option value="Political Science">
                              Political Science
                            </option>
                            <option value="Psychology">Psychology</option>
                            <option value="Religious Studies">
                              Religious Studies
                            </option>
                            <option value="Shakespeare">Shakespeare</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Technology">Technology</option>
                            <option value="Web, High Tech">
                              Web, High Tech
                            </option>
                            <option value="Womens and gender studies">
                              Womens and gender studies
                            </option>
                            <option value="World Affairs">World Affairs</option>
                            <option value="World Literature">
                              World Literature
                            </option>
                            <option value="Zoology">Zoology</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Referencing Style
                          </label>
                          <select
                            className="form-control"
                            name="referencingStyle"
                            value={selectedValues.referencingStyle}
                            onChange={handleChange}
                          >
                            <option value="APA Referencing">
                              APA Referencing
                            </option>
                            <option value="Harvard Referencing">
                              Harvard Referencing
                            </option>
                            <option value="Chicago Referencing">
                              Chicago Referencing
                            </option>
                            <option value="MLA Referencing">
                              MLA Referencing
                            </option>
                            <option value="Oxford Referencing">
                              Oxford Referencing
                            </option>
                            <option value="Turabian Referencing">
                              Turabian Referencing
                            </option>
                            <option value="Vancouver Referencing">
                              Vancouver Referencing
                            </option>
                            <option value="CBE Referencing">
                              CBE Referencing
                            </option>
                            <option value="Not applicable">
                              Not applicable
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Number of Sources
                          </label>
                          <select
                            className="form-control"
                            name="noOfSources"
                            value={selectedValues.noOfSources}
                            onChange={handleChange}
                          >
                            {/* Add options based on your requirements */}

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option selected value="10">
                              10
                            </option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Paper Standard
                          </label>
                          <select
                            className="form-control"
                            name="Paper_Standard"
                            value={paperStandard}
                            onChange={handlePaperStandardChange}
                          >
                            <option data-price="0.00" value="Standard Quality">
                              Standard Quality
                            </option>
                            <option
                              selected
                              data-price="5.00"
                              value="Premium Quality"
                            >
                              Premium Quality
                            </option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Number of Pages
                          </label>
                          <select
                            className="form-control"
                            name="Number_of_Pages"
                            value={pages}
                            onChange={handlePagesChange}
                          >
                            {pageOptions.map((option) => (
                              <option
                                key={option.value}
                                data-wordcount={option.wordcount}
                                data-price={option.price}
                                value={option.value}
                              >
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Preferred Language Style
                          </label>
                          <select
                            className="form-control"
                            name="preferredLanguage"
                            value={selectedValues.preferredLanguage}
                            onChange={handleChange}
                          >
                            {/* Add options based on your requirements */}

                            <option selected="" value="english (British)">
                              English (British)
                            </option>
                            <option value="English (U.S.)">
                              English (U.S.)
                            </option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Select Paper Format
                          </label>
                          <select
                            className="form-control"
                            name="Paper_Format"
                            value={paperFormat}
                            onChange={handlePaperFormatChange}
                          >
                            <option
                              selected=""
                              data-price="+0"
                              value="Double Spaced"
                            >
                              Double Spaced
                            </option>
                            <option data-price="+9" value="Single Spaced">
                              Single Spaced
                            </option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Select Deadline
                          </label>
                          <select
                            className="form-control"
                            name="Deadline"
                            value={deadline}
                            onChange={handleDeadlineChange}
                          >
                            <option data-price="14" value="4 Hours">
                              4 Hours
                            </option>
                            <option data-price="9" value="8 Hours">
                              8 Hours
                            </option>
                            <option data-price="4" value="12 Hours">
                              12 Hours
                            </option>
                            <option data-price="0" value="1 Day">
                              1 Day
                            </option>
                            <option data-price="-2" value="2 Days">
                              2 Days
                            </option>
                            <option data-price="-8" value="3 Days">
                              3 Days
                            </option>
                            <option data-price="-8" value="4 Days">
                              4 Days
                            </option>
                            <option data-price="-8" value="5 Days">
                              5 Days
                            </option>
                            <option data-price="-10" value="6 Days">
                              6 Days
                            </option>
                            <option data-price="-10" value="7 Days">
                              7 Days
                            </option>
                            <option data-price="-10" value="8 Days">
                              8 Days
                            </option>
                            <option data-price="-10" value="9 Days">
                              9 Days
                            </option>
                            <option data-price="-12" value="10 Days">
                              10 Days
                            </option>
                            <option data-price="-12" value="11 Days">
                              11 Days
                            </option>
                            <option data-price="-12" value="12 Days">
                              12 Days
                            </option>
                            <option data-price="-12" value="13 Days">
                              13 Days
                            </option>
                            <option data-price="-12" value="14 Days">
                              14 Days
                            </option>
                            <option data-price="-12" value="15 Days">
                              15 Days
                            </option>
                            <option data-price="-12" value="16 Days">
                              16 Days
                            </option>
                            <option data-price="-12" value="17 Days">
                              17 Days
                            </option>
                            <option data-price="-12" value="18 Days">
                              18 Days
                            </option>
                            <option data-price="-12" value="19 Days">
                              19 Days
                            </option>
                            <option data-price="-12" value="20 Days">
                              20 Days
                            </option>
                            <option data-price="-12" value="21 Days">
                              21 Days
                            </option>
                            <option data-price="-12" value="22 Days">
                              22 Days
                            </option>
                            <option data-price="-12" value="23 Days">
                              23 Days
                            </option>
                            <option data-price="-12" value="24 Days">
                              24 Days
                            </option>
                            <option data-price="-12" value="25 Days">
                              25 Days
                            </option>
                            <option data-price="-12" value="26 Days">
                              26 Days
                            </option>
                            <option data-price="-12" value="27 Days">
                              27 Days
                            </option>
                            <option data-price="-12" value="28 Days">
                              28 Days
                            </option>
                            <option data-price="-12" value="29 Days">
                              29 Days
                            </option>
                            <option data-price="-12" value="30 Days">
                              30 Days
                            </option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">Topic</label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            value={topic}
                            onChange={handleTopicChange}
                            style={{
                              borderColor: topicFilled
                                ? "green"
                                : showValidation
                                ? "red"
                                : "",
                            }}
                          />
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Attach Brief Files &nbsp;
                            <i
                              className="fa fa-info-circle"
                              aria-hidden="true"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              title="We Understand That Every Customer Has Unique Requirements, And That's Why We Offer The Option To Upload Multiple Brief Files For Any Additional Requirements You May Have."
                            ></i>
                          </label>
                          <div onDragOver={preventDefault} onDrop={handleDrop}>
                            <input
                              type="file"
                              className="form-control"
                              name="orderFiles[]"
                              accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain"
                              multiple
                              id="order_file_submit"
                              onChange={handleFileChange}
                            />
                            {errorMessage && <p>{errorMessage}</p>}
                          </div>
                        </div>
                      </div>
                      {/* Add rest of the form fields */}
                      <div className="btnnxt_pre mt-3 text-center">
                        <button
                          type="button"
                          className="btn_order_next"
                          id="nextBtn"
                          onClick={handleNextClick}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ display: activeTab === 2 ? "block" : "none" }}>
                  <div className="form-tab-2">
                    <div className="order_bg_mac">
                      <div className="topbar_mac bg_gr-re">
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "5px" }}
                        >
                          <div className="circle-ball1"></div>
                          <div className="circle-ball2"></div>
                          <div className="circle-ball3"></div>
                        </div>
                        <div className="w-100">
                          <div className="search_url d-flex">
                            <div>
                              Gradesup.org<sup>®</sup>
                            </div>{" "}
                            / ORDER DETAILS / STEP 2
                          </div>
                        </div>
                      </div>
                      {showValidation &&
                        (!userNameFilled ||
                          !userEmailFilled ||
                          !userCountryFilled ||
                          !userPhoneFilled) && (
                          <div
                            class="alert alert-danger form-validation"
                            bis_skin_checked="1"
                          >
                            Please Fill All Fields In Order Form
                          </div>
                        )}
                      {/* Rest of the form fields */}
                      <div className="form_fields_2">
                        <div className="margin_top_10">
                          <label className="form-label_order">Your Name</label>
                          <input
                            required
                            className="form-control"
                            type="text"
                            value={userName}
                            onChange={handleUserNameChange}
                            style={{
                              borderColor: userNameFilled
                                ? "green"
                                : showValidation
                                ? "red"
                                : "",
                            }}
                          />
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">Your Email</label>
                          <input
                            required
                            className="form-control"
                            type="email"
                            value={userEmail}
                            onChange={handleUserEmailChange}
                            style={{
                              borderColor: userEmailFilled
                                ? "green"
                                : showValidation
                                ? "red"
                                : "",
                            }}
                          />
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Phone Number
                          </label>
                          <input
                            className="form-control"
                            type="tel"
                            ref={phoneInputRef}
                            id="phone"
                            value={userPhone}
                            onChange={handleUserPhoneChange}
                            onInput={(e) =>
                              (e.target.value = e.target.value
                                .replace(/[^0-9+]/g, "")
                                .replace(/(\+.*)\+/g, "$1"))
                            }
                            required
                            placeholder="Phone Number"
                            style={{
                              borderColor: userPhoneFilled
                                ? "green"
                                : showValidation
                                ? "red"
                                : "",
                            }}
                          />
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">Country</label>
                          <select
                            className="form-control"
                            name="Country"
                            value={userCountry}
                            onChange={handleUserCountryChange}
                            style={{
                              borderColor: userCountryFilled
                                ? "green"
                                : showValidation
                                ? "red"
                                : "",
                            }}
                          >
                            {/* Add options based on your requirements */}
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">
                              American Samoa
                            </option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire, Sint Eustatius and Saba">
                              Bonaire, Sint Eustatius and Saba
                            </option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">
                              British Indian Ocean Territory
                            </option>
                            <option value="Brunei Darrussalam">
                              Brunei Darrussalam
                            </option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">
                              Cayman Islands
                            </option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">
                              Christmas Island
                            </option>
                            <option value="Cocos Islands">Cocos Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo, Democratic Republic of the">
                              Congo, Democratic Republic of the
                            </option>
                            <option value="Congo, Republic of the">
                              Congo, Republic of the
                            </option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote divoire">Côte d'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaçao">Curaçao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">
                              Czech Republic
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Eswatini (Swaziland)">
                              Eswatini (Swaziland)
                            </option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">
                              Falkland Islands
                            </option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">
                              French Polynesia
                            </option>
                            <option value="French Southern Territories">
                              French Southern Territories
                            </option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard and McDonald Islands">
                              Heard and McDonald Islands
                            </option>
                            <option value="Holy See">Holy See</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao Peoples Democratic Republic">
                              Lao People's Democratic Republic
                            </option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">
                              Marshall Islands
                            </option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="The Netherlands">Netherlands</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">
                              Norfolk Island
                            </option>
                            <option value="North Korea">North Korea</option>
                            <option value="Northern Mariana Islands">
                              Northern Mariana Islands
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestine, State of">
                              Palestine, State of
                            </option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">
                              Papua New Guinea
                            </option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Réunion">Réunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Barthélemy">
                              Saint Barthélemy
                            </option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">
                              Saint Kitts and Nevis
                            </option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin">Saint Martin</option>
                            <option value="Saint Pierre and Miquelon">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="Saint Vincent and the Grenadines">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">
                              Sao Tome and Principe
                            </option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten">Sint Maarten</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">
                              Solomon Islands
                            </option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia">South Georgia</option>
                            <option value="South Korea">South Korea</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen Islands">
                              Svalbard and Jan Mayen Islands
                            </option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">
                              Trinidad and Tobago
                            </option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Türkiye">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">
                              Turks and Caicos Islands
                            </option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="US Minor Outlying Islands">
                              US Minor Outlying Islands
                            </option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands, British">
                              Virgin Islands, British
                            </option>
                            <option value="Virgin Islands, U.S.">
                              Virgin Islands, U.S.
                            </option>
                            <option value="Wallis and Futuna">
                              Wallis and Futuna
                            </option>
                            <option value="Western Sahara">
                              Western Sahara
                            </option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="margin_top_10">
                          <label className="form-label_order">
                            Additional Notes (Instructions)
                          </label>
                          <textarea
                            required
                            className="form-control"
                            rows={4}
                            value={info}
                            onChange={handleInfoChange}
                          ></textarea>
                        </div>
                      </div>
                      {isLoading ? <div className="loading"></div> : null}
                      <div className="btnnxt_pre mt-0 pt-2 mt-xl-5 pt-xl-4 text-center">
                        <button
                          type="button"
                          className="btn_order_previous"
                          id="prevBtn"
                          onClick={handlePreviousClick}
                        >
                          <i className="fa fa-arrow-left"></i>
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="btn_order_next"
                          id="orderBtn"
                          onClick={handleOrderNowClick}
                          aria-label="Submit Form"
                        >
                          Order Now
                          <i className="fa fa-shopping-cart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Col>
            <Col md={4}>
              <div className="order_summary_box">
                <h4 className="text-center text-black">Order Summary</h4>
                <div className="order_summary_grid">
                  <div className="order_summary_txt">Topic Of Paper</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="TopicOfPaper"
                      className="basePrice bprice orderTopicFild right"
                    >
                      {topic ? topic : "-------------------"}
                    </span>
                  </div>
                  <div className="order_summary_txt">Referencing Style:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id=""
                      className="basePrice bprice orderTopicFild right"
                    >
                      {selectedValues.referencingStyle}
                    </span>
                  </div>
                  <div className="order_summary_txt">Paper Standard:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="PaperStandard"
                      className="basePrice bprice orderTopicFild right"
                    >
                      {paperStandard}
                    </span>
                  </div>

                  <div className="order_summary_txt">Deadline:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="Deadline"
                      className="basePrice bprice orderTopicFild right"
                    >
                      {deadline}
                    </span>
                  </div>

                  <div className="order_summary_txt">No. Of Pages:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="noOfPagesDisplay"
                      className="basePrice bprice orderTopicFild right"
                    >
                      {/* Display the selected option's value */}
                      {selectedOption ? selectedOption.value : ""}
                    </span>
                  </div>

                  <div className="order_summary_txt">Word Count:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="wordcountDisplay"
                      className="basePrice bprice orderTopicFild right"
                    >
                      {/* Display the selected option's word count */}
                      {selectedOption ? selectedOption.wordcount : ""}
                    </span>
                  </div>

                  <div className="order_summary_txt">Price Per Page:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="PricePerPage"
                      data-unitip={psymbol}
                      className="basePrice bprice orderTopicFild right"
                    >
                      {/* Display the currency symbol and price per page */}
                      {psymbol} {pricePerPage.toFixed(2)}
                    </span>
                  </div>

                  <div className="order_summary_txt">Total Price:</div>
                  <div className="order_summary_txt_value">
                    <span
                      id="PriceTotal"
                      data-unitip={psymbol}
                      className="basePrice bprice orderTopicFild right"
                    >
                      {/* Display the currency symbol and total price */}
                      {psymbol}{" "}
                      {(pricePerPage * parseInt(pages, 10)).toFixed(2)}
                    </span>
                  </div>
                  <div className="order_summary_txt">Turnitin Report</div>
                  <div className="order_summary_txt">Free</div>
                  <div className="order_summary_txt">Discount</div>
                  <div className="order_summary_txt bag_mt">
                    <span className="topbar-badge blink-soft">35% OFF</span>
                  </div>
                </div>
                <hr />
                <div className="col-md-12 text-center">
                  <img
                    alt="image"
                    loading="lazy"
                    className="card_pay"
                    src={paymentImg}
                    width={"100%"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OrderForm;
