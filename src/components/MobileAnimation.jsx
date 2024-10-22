import React, { useEffect, useState } from "react";
import expertprofile from "../assets/images/order-process/mobile-expert.png";
import messageIcon from "../assets/images/order-process/typing.gif";
import page1 from "../assets/images/order-process/assign1.png";
import page2 from "../assets/images/order-process/assign2.jpg";

const MobileAnimation = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [secondElementText, setSecondElementText] = useState(
    <img style={{ width: "50px" }} src={messageIcon} alt="" />
  );
  const [fifthElementText, setFifthElementText] = useState(
    <img style={{ width: "50px" }} src={messageIcon} alt="" />
  );

  const elements = [
    <div key={1} className="own-txt-right chat main-heading-primary">
      <span className="std-text">Don't understand my task 😱</span>
    </div>,
    <div key={2} className="own-txt-left pt-2 d-flex align-items-center m-auto">
      <img src={expertprofile} className="expert-text" alt="" />
      {secondElementText}
    </div>,
    <div key={3} className="own-txt-right pt-2 chat">
      <div className="assign-file main-heading-primary">
        <img alt="page-1" className="fil-wid" src={page1} />
        <img alt="page-2" className="fil-wid" src={page2} />
      </div>
    </div>,
    <div key={4} className="own-txt-right pt-2 chat main-heading-primary">
      <span className="std-text">Have a class on Monday 🙏</span>
    </div>,
    <div key={5} className="own-txt-left pt-2 d-flex align-items-center m-auto">
      <img src={expertprofile} className="expert-text" alt="" />
      {fifthElementText}
    </div>,
  ];

  useEffect(() => {
    const interval = setInterval(
      () => {
        setVisibleIndex((prevIndex) => {
          if (prevIndex === elements.length - 1) {
            setTimeout(() => {
              setVisibleIndex(-1);
              setSecondElementText(
                <img style={{ width: "50px" }} src={messageIcon} alt="" />
              );
              setFifthElementText(
                <img style={{ width: "50px" }} src={messageIcon} alt="" />
              );
            }, 3000);
            return -1;
          } else {
            return prevIndex + 1;
          }
        });
      },
      visibleIndex === 0 ? 2000 : 3000
    );

    return () => {
      clearInterval(interval);
    };
  }, [elements.length, visibleIndex]);

  useEffect(() => {
    if (visibleIndex === 1) {
      setTimeout(() => {
        setSecondElementText(
          <span className="expert-reply chat">
            Just drop a pic of a part you are stuck on 📸
          </span>
        );
      }, 2000);
    }
  }, [visibleIndex]);

  useEffect(() => {
    if (visibleIndex === 4) {
      setTimeout(() => {
        setFifthElementText(
          <span className="expert-reply chat">
            Got it 👌 One of our top History GG is ready to clarify it for you
            asap!
          </span>
        );
      }, 2000);
    }
  }, [visibleIndex]);

  return (
    <div>
      {elements.map((element, index) => (
        <div
          key={index}
          style={{ display: index <= visibleIndex ? "block" : "none" }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default MobileAnimation;