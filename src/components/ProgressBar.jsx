import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faSquareCheck,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faFileLines as faFileLinesRegular } from "@fortawesome/free-regular-svg-icons";
import MainHeading from "./MainHeading";
import Paragraph from "./Paragraph";
import chatImage from "../assets/images/chatwithexpert.png";
import serviceImage from "../assets/images/select-service.png";
import orderImage from "../assets/images/order-confirm.png";
import NavbarBtn from "./NavbarBtn";

const ProgressBar = () => {
  const [progress, setProgress] = useState(25);
  const [divIndex, setDivIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          setDivIndex(0);
          return 25;
        } else {
          const nextProgress = prevProgress + 25;
          if (nextProgress === 50) {
            setDivIndex(1);
          } else if (nextProgress === 75) {
            setDivIndex(2);
          } else if (nextProgress === 100) {
            setDivIndex(3);
          }
          return nextProgress;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const progressPoints = [
    { name: "Live Chat For Instant Support", icon: <FontAwesomeIcon icon={faComment} /> },
    {
      name: "Select Order Service",
      icon: <FontAwesomeIcon icon={faFileLinesRegular} />,
    },
    { name: "Order Confirmation", icon: <FontAwesomeIcon icon={faSquareCheck} /> },
    { name: "Successfully Delivery", icon: <FontAwesomeIcon icon={faThumbsUp} /> },
  ];
  const progressContent = [
    { name: "Click Live Chat for Instant Help", para: 'Get Instant Help, Chat with One of our Experts' },
    { name: "Select Your Desired Services", para: 'Choose the Service you want To Get Help From Our Expert' },
    { name: "Order Confirmation & Progress", para: 'Make the Payment for Order Confirmation Easy Access on the Order Progres' },
  ];

  return (
    <>
      <ul className="progressPoint">
        {progressPoints.map((point, index) => (
          <li key={index}>
            {point.icon}
            <p>{point.name}</p>
          </li>
        ))}
      </ul>
      <div className="uper-progress">
        <div className="progress_bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="mt-4 lower-progress">
        {progressContent.map((point, index) => (
          <div
            key={index}
            className={divIndex === index ? "progress-content active" : "progress-content"}
          >
            <div className="progress-content-inner d-block-480">
              <div className="content-text">
                <MainHeading text={point.name} className="first-heading" />
                <Paragraph paragraph={point.para} />
              </div>
              <div className="content-image">
                <img
                  loading="lazy"
                  className="content-img"
                  src={
                    index === 0
                      ? chatImage
                      : index === 1
                      ? serviceImage
                      : orderImage
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
        <div className={divIndex === 3 ? "progress-content active" : "progress-content"}>
          <div className="progress-content-inner">
            <div className="content-text">
              <MainHeading
                text={
                  "Congratulations, Your Order Will Be Delivered Successfully"
                }
                className="first-heading"
              />
              <NavbarBtn
                className="fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn whatsappBtn mt-2 no-animation"
                btnText="Order Now"
                btnLink={`/order-form`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;