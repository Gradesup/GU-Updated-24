import React, { useEffect, useState, useRef } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import MainHeading from "./MainHeading";
import PurpleCurveBtn from "./PurpleCurveBtn";
import formImg1 from "../assets/images/gifs/form-s1.png";
import formImg2 from "../assets/images/gifs/form-s2.png";
import formImg3 from "../assets/images/gifs/form-s3.png";
import intlTelInput from "intl-tel-input";
import { useNavigate } from "react-router-dom";

const Form = ({ city, onSubmit, countryName, dynamicCountry }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const phoneInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // other form fields...
    city: city || "", // Set the initial value of city from the prop
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading state to true when the form is submitted

    const activeCountryElement = document.querySelector(
      ".iti__flag-container .iti__selected-flag"
    );
    const dialCode = activeCountryElement
      .getAttribute("title")
      .split(" ")
      .at(-1);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", `${dialCode} ${number}`);
    formData.append("message", message);

    const data = {
      name,
      email,
      phone: dialCode + number,
      message,
    };

    axios
      .post("https://gradesup-backend-api.vercel.app/send-email", data)

      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setNumber("");
        setEmail("");
        setMessage("");
        // Redirect the user to the "thank you" page after successful email sending
        navigate(`${dynamicCountry}/thankyou`);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const country = countryName;

  const [initialCountry, setInitialCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    setInitialCountry(country);
    setCountryCode(country);
  }, [country]);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      const iti = intlTelInput(input, {
        initialCountry: country,
        geoIpLookup: function (success, failure) {
          const countryCode = country;
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
  }, [country, phoneInputRef]);

  const formText = `${localStorage.getItem("city")} Special Discount`;

  return (
    <div className="mainForm text-center">
      <div className="first-btn">
        <PurpleCurveBtn className="animatingBtn" btnText={formText} />
      </div>
      <div className="second-btn">
        <PurpleCurveBtn
          className="animatingBtn "
          btnText={`Don't Hesitate, Feel Free Contact Us`}
        />
      </div>
      <MainHeading text={"Flat 55% OFF"} />
      <div className="d-flex justify-content-center">
        <img className="formImage" src={formImg1} alt="Image 1" />
        <img className="formImage" src={formImg2} alt="Image 2" />
        <img className="formImage" src={formImg3} alt="Image 3" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Full Name"
        />
        <input
          type="tel"
          ref={phoneInputRef}
          onInput={(e) =>
            (e.target.value = e.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1"))
          }
          id="phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          placeholder="Phone Number"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Subject / Topic"
        />
        {isLoading ? <div className="loading"></div> : null}
        <button
          type="submit"
          className="formSubmitBtn text-white"
          aria-label="Submit Form"
        >
          Get A Free Quote
        </button>
      </form>
    </div>
  );
};

export default Form;
