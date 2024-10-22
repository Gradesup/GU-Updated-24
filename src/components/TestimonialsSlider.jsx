import React from "react";
import Slider from "react-slick";
import Paragraph from "./Paragraph";
import SecondaryHeading from "./SecondaryHeading";
import rating from '../assets/images/rating.png'
import testiImg1 from "../assets/images/testmonial-pic/male_Stu.jpg";
import testiImg2 from "../assets/images/testmonial-pic/female_Stu.jpg";

const Testimonial = React.memo(({ testimonial , changeText }) => {
  return (
        <div className="testi-box">
            <img src={testimonial.img} alt={`${changeText}`} />
          <SecondaryHeading
            style={{
              color: "black",
              fontSize: "24px",
              marginTop: "10px",
              fontWeight: "600",
            }}
            heading={testimonial.name}
          />
          <Paragraph paragraph={testimonial.city} />
          <div className="review">
            <Paragraph paragraph={testimonial.review} />
          </div>
          <div className="stars">
              <img
                src={rating}
                alt="stars"
              />
          </div>
        </div>
  );
});

const TestimonialsSlider = ({changeText}) => {
  const testimonialsContent = [
    {
      img: testiImg2,
      name: "Jennifer Simard",
      city: "Cardiff, UK",
      review:
        <>If you're looking for top-notch assignment help that's both reliable and cost effective, the experts at Gradesup.org<sup>®</sup> are your perfect solution! With their premium quality work delivered before deadline - with 0 mistakes guaranteed - it couldn't be easier to get an A+ grade on {changeText}</>,
    },
    {
      img: testiImg2,
      name: "Marry Brown",
      city: "Bristol, UK",
      review:
        <>Gradesup.org<sup>®</sup> is the perfect answer for students looking for budget-friendly yet reliable {changeText}! With their unbeatable pricing structure, you can get high quality work delivered on time without breaking your bank - an opportunity truly not to be missed! Highly Recommended</>,
    },
    {
      img: testiImg2,
      name: "Mathidla Lee",
      city: "Liverpool, UK",
      review:
        <>If you're in need of online {changeText}, then make sure to check out Gradesup.org<sup>®</sup> - my friend recommended it and I found the help invaluable! Now, I'm recommending this great resource to everyone looking for a professional {changeText} assistance.</>,
    },
    {
      img: testiImg1,
      name: "Saul Morales",
      city: "New York, US",
      review:
        <>With personal issues affecting my academic life, I had all but lost hope until I stumbled upon ! Their solutions not only saved me from {changeText} disaster, but enabled me to face the Economics Quiz and get an A Grade in class - Highly recommended for anyone looking for professional help with their studies!</>,
    },
    {
      img: testiImg1,
      name: "Liam Oliver",
      city: "Chicago, US",
      review:
        <>With Gradesup.org<sup>®</sup>, I got an unbeatable grade – A+! My content was crafted to my exact preferences and blew away even the toughest of teachers. Thanks to their expertise, they were able to help me stand out from other submissions with superior quality work!</>,
    },
    {
      img: testiImg1,
      name: "Benjamin Lucas",
      city: "Texas, US",
      review:
        <>In a critical moment, Gradesup.org® provided invaluable tutoring help and completed all academic requirements just before the deadline, exceeding expectations and meeting or exceeding expectations.{changeText} and completing all requirements just before the deadline. Their agility and agility made them a lifesaver in the face of adversity.</>,
    },
    {
      img: testiImg1,
      name: "Camilo Gian",
      city: "San Diego, California",
      review:
        <>After a careful search for the perfect Assistance Help website, Gradesup.org<sup>®</sup> ended up being the lucky one! This decision certainly paid off as I scored an impressive 98% on my Monthly {changeText} with their extraordinary help and support.</>,
    },
    {
      img: testiImg1,
      name: "Peter Griffths",
      city: "London, UK",
      review:
        <>After trying and testing numerous {changeText} websites, my choice ultimately fell upon this one, a seemingly random decision that turned out to be incredibly fortunate. Thanks to this choice, my academic journey saw a remarkable transformation, with my grades skyrocketing from a mediocre C to a stellar A. </>,
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <Slider {...settings}>
        {testimonialsContent.map((testimonial, index) => (
          <Testimonial testimonial={testimonial} changeText={changeText} key={index} />
        ))}
      </Slider>
  );
};

export default TestimonialsSlider;
