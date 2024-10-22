import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Paragraph from "./Paragraph";
import logoImg from "../assets/images/site-logo/footer_logo.png";
import SecondaryHeading from "./SecondaryHeading";
import pciImg from "../assets/images/pci_logo.png";
import dmcaImg from "../assets/images/dmca_footer.png";
import backtotopImg from "../assets/images/float-bt-up.png";
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';



const Footer = ({whatsappNumber , telNumber , openTawkToChat,dynamicCountry } ) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const paymentImg = "https://imagedelivery.net/f8i7SP6RXV9zJA_aQg2EIw/1cb30f5d-c669-4d87-315d-50670470c800/compress";

  const location = useLocation();
  const currentYear = new Date().getUTCFullYear();
  

  const upperContent = [
    {
      icon: 'fa fa-map-marker',
      firstContent: (
        <>
          Our Expert Is Always On Hand To <br /> Assist 24/7 – Day Or Night In {localStorage.getItem('city')}
        </>
      ),
    },
    {
      icon: 'fa fa-phone',
      firstContent: 'Talk With Expert',
      secondContent: `${telNumber}`,
      href:`tel:${telNumber}`,
    },
    {
      icon: 'fa fa-envelope-open',
      firstContent: 'Mail Us',
      secondContent: <>support@gradesup.org</>,
      href: 'mailto:support@gradesup.org',
    },
  ];

  const socialMediaIcons = [
    { link: `https://wa.me/${whatsappNumber}` , icon: "fa fa-whatsapp" },
    { link: "#", icon: "fa fa-facebook" },
    { link: "#", icon: "fa fa-twitter" },
    { link: "#", icon: "fa fa-instagram" },
  ];

  const quickLinks = [
    { link: `${dynamicCountry}/`, text: "Home" },
    { link: `${dynamicCountry}/about`, text: "About Us" },
    { link: `${dynamicCountry}/#reviews`, text: "Reviews" },
    { link: `${dynamicCountry}/#OrderSection`, text: "Process" },
    { link: `${dynamicCountry}/contact`, text: "Contact" },
  ];

  const policiesLinks = [
    { link: `${dynamicCountry}/refund-policy`, text: "Refund Policy" },
    { link: `${dynamicCountry}/cancellation-policy`, text: "Cancellation Policy" },
    { link: `${dynamicCountry}/services-policy`, text: "Service Policy" },
    { link: `${dynamicCountry}/privacy-policy`, text: "Privacy Policy" },
    { link: `${dynamicCountry}/terms-conditions`, text: "Terms & Conditions" },
    { link: `${dynamicCountry}/fair-usage-policy`, text: "Fair Usage Policy" },
    { link: `${dynamicCountry}/gdrp_policy`, text: "GDPR Policy" },
  ];

  const [displayBackToTop, setDisplayBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setDisplayBackToTop(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const handleBackToTop = () => {
    const scrollToTop = () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };

      window.scrollTo(scrollOptions);
    };
    scrollToTop();
  };

  // Newsletter form Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    axios
      .post("https://node-js-api-pi.vercel.app/send-email", formData) // Make sure to adjust the endpoint URL accordingly
      .then((response) => {
        console.log("Email sent successfully!", response);
        setEmail("");


        // Redirect the user to the "thank you" page after successful email sending
        navigate(`${dynamicCountry}/thankyou`); // Replace "/thankyou" with the actual URL of your "thank you" page
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };



        return (
          <div className="main-footer">
      <div className="footer text-white">
        <Container>
          <div className="upper-footer">
              {upperContent.map((content, index) => (
                <div key={index}>
                  <div className="d-flex align-items-center">
                    <i className={content.icon}></i>
                    <div className="flex-column">
                      <Paragraph
                        style={{ fontWeight: "600", fontSize: "16px" }}
                        paragraph={content.firstContent}
                      />
                      {content.href ? (
                        <a href={content.href}>
                          <Paragraph paragraph={content.secondContent} />
                        </a>
                      ) : (
                        <Paragraph paragraph={content.secondContent} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="lower-footer">
              <div>
                <Link to={`${dynamicCountry}/`}>
                <img src={logoImg} width={'80%'} alt="" />
                </Link>
                <Paragraph
                  paragraph={`Our Academic Consultancy Stands Out Among All The Rest; With Thousands Of Satisfied Customers From Around The Globe, It's Clear Why! Our Stellar Writers Provide Top-Notch Services That Guarantee Success - No Matter What Subject Or Level You're Studying..`}
                />
                <SecondaryHeading heading={"Our Social Media Links"} />
                {socialMediaIcons.map((social, index) => (
                  <a
                    href={social.link}
                    className="socialIcons"
                    
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <div>
                <SecondaryHeading heading={"Quick Links"} />
                <ul>
                  {quickLinks.map((quick, index) => (
                    <li key={index}>
                      <Link
                        to={quick.link}
                      >
                        {quick.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SecondaryHeading heading={"Our Policies"} />
                <ul>
                  {policiesLinks.map((policies, index) => (
                    <li key={index}>
                      <Link
                        to={policies.link}
                      >
                        {policies.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SecondaryHeading heading={"Subscribe"} />
                <Paragraph
                  paragraph={<>Subscribe With Your Email And Get Updates Of Gradesup.org<sup>®</sup></>}
                />
                <div className="subscribe-form">
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="Email Address"
                        />
                        <button type="submit" name="submit" aria-label="Submit Form">
                          {" "}
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                      </form>
                </div>
                <SecondaryHeading heading={"Secure Payments"} />
                <img src={paymentImg} width="100%" alt="" />
                <div className="d-flex justify-content-center gap-10">
                  <img className="footer-bg-white" src={pciImg} alt="" />
                  <img className="footer-bg-white" src={dmcaImg} alt="" />
                </div>
              </div>
          </div>
        </Container>
      </div>
      <div className="copyright">
        <p className="paragraph text-center text-white">
          Copyright © {currentYear}, All Right Reserved
          <Link to="/" className="text-white fw-600 fs-20">
          &nbsp; Gradesup.org<sup>®</sup>
          </Link>
        </p>
      </div>
      {displayBackToTop && (
        <div id="back-to-top" onClick={handleBackToTop}>
          <img width={"80px"} className="up-down" src={backtotopImg} alt="" />
        </div>
      )}
      {/* Fixed Icon */}
      <div className="fixed-social-icons">
        <div className="fixed-icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${whatsappNumber}`}
            >
          <i className="fa fa-whatsapp"></i>
          <span>
              WhatsApp Now
          </span>
            </a>
        </div>
        <div className="fixed-icon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:${telNumber}`}
            >
          <i className="fa fa-phone"></i>
          <span>
              Call Free Now
          </span>
            </a>
        </div>
        <div className="fixed-icon message" onClick={openTawkToChat}>
          <i className="fa fa-commenting-o"></i>
          <span>Chat With Expert</span>
        </div>
        <div className="fixed-icon message-mobile">
        <a
              target="_blank"
              rel="noopener noreferrer"
              href={`sms:${telNumber}?body=Hi, I Need Academic Help Instantly. Could You Please Assist Me In Submitting My Assignment Before The Deadline?".`}
            >
          <i className="fa fa-commenting-o"></i>
          <span>Send Text SMS</span></a>
        </div>
        <div className="fixed-icon mail">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:support@gradesup.org"
            >
          <i className="fa fa-envelope"></i>
          <span>
              Email Us
          </span>
            </a>
        </div>
      </div>
      {/* Fixed Icon End */}
      </div>
            );
};

export default Footer;
