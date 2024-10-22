import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";
import { Container } from "react-bootstrap";

const ImageSlider = ({ items, images }) => {
  const headingStyle = {
    color: "#000",
    textAlign: "center",
    fontSize: "22px",
    margin: "0",
    fontWeight: "700",
  };

  const renderLazyImage = (src) => (
    <LazyLoad once key={src}>
      <img src={src} alt="Our Experts" />
    </LazyLoad>
  );

  const renderSliderImages = () => {
    return images.map((imageSrc, index) => (
      <div key={index}>{renderLazyImage(imageSrc)}</div>
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Slider-Section" id='whyus'>
      <Container>
        <h2 style={headingStyle}>
          ESTABLISHED CONNECTION WITH MORE THAN 50,000 TRUSTED EXPERTS
        </h2>
        <Slider {...settings}>{renderSliderImages()}</Slider>
      </Container>
    </div>
  );
};

export default ImageSlider;