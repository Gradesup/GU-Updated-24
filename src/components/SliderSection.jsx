import React from "react";
import ImageSlider from "./ImageSlider";
import useWeatherData from "./useWeatherData";

// Random images
import ran1 from "../assets/images/uni_wise_images/random/ran1.png";
import ran2 from "../assets/images/uni_wise_images/random/ran2.png";
import ran3 from "../assets/images/uni_wise_images/random/ran3.png";
import ran4 from "../assets/images/uni_wise_images/random/ran4.png";
import ran5 from "../assets/images/uni_wise_images/random/ran5.png";
import ran6 from "../assets/images/uni_wise_images/random/ran6.png";
import ran7 from "../assets/images/uni_wise_images/random/ran7.png";
import ran9 from "../assets/images/uni_wise_images/random/ran9.png";
import ran10 from "../assets/images/uni_wise_images/random/ran10.jpg";
import ran11 from "../assets/images/uni_wise_images/random/ran11.png";
import ran12 from "../assets/images/uni_wise_images/random/ran12.jpg";
import ran13 from "../assets/images/uni_wise_images/random/ran13.jpg";
import ran14 from "../assets/images/uni_wise_images/random/ran14.png";

const SliderSection = ({openTawkToChat ,  countryName}) => {


  let sliderImages = [];
  const sliderImagesMap = {
    AU: [
      require("../assets/images/uni_wise_images/australia/aus1.png"),
      require("../assets/images/uni_wise_images/australia/aus2.png"),
      require("../assets/images/uni_wise_images/australia/aus3.png"),
      require("../assets/images/uni_wise_images/australia/aus6.png"),
      require("../assets/images/uni_wise_images/australia/aus7.png"),
      require("../assets/images/uni_wise_images/australia/aus8.png"),
      require("../assets/images/uni_wise_images/australia/aus9.png"),
    ],
    AT: [
      require("../assets/images/uni_wise_images/austria/aust1.png"),
      require("../assets/images/uni_wise_images/austria/aust2.png"),
      require("../assets/images/uni_wise_images/austria/aust3.jpg"),
      require("../assets/images/uni_wise_images/austria/aust4.png"),
      require("../assets/images/uni_wise_images/austria/aust5.png"),
      require("../assets/images/uni_wise_images/austria/aust6.jpg"),
      require("../assets/images/uni_wise_images/austria/aust7.jpg"),
      require("../assets/images/uni_wise_images/austria/aust8.jpg"),
      require("../assets/images/uni_wise_images/austria/aust9.jpg"),
      require("../assets/images/uni_wise_images/austria/aust10.jpg"),
    ],
    CA: [
      require("../assets/images/uni_wise_images/canada/can1.png"),
      require("../assets/images/uni_wise_images/canada/can2.png"),
      require("../assets/images/uni_wise_images/canada/can3.png"),
      require("../assets/images/uni_wise_images/canada/can4.png"),
      require("../assets/images/uni_wise_images/canada/can5.jpg"),
      require("../assets/images/uni_wise_images/canada/can6.png"),
      require("../assets/images/uni_wise_images/canada/can7.png"),
      require("../assets/images/uni_wise_images/canada/can8.png"),
      require("../assets/images/uni_wise_images/canada/can9.png"),
      require("../assets/images/uni_wise_images/canada/can10.jpg"),
    ],
    FI: [
      require("../assets/images/uni_wise_images/finland/fin1.png"),
      require("../assets/images/uni_wise_images/finland/fin2.jpg"),
      require("../assets/images/uni_wise_images/finland/fin3.jpg"),
      require("../assets/images/uni_wise_images/finland/fin4.png"),
      require("../assets/images/uni_wise_images/finland/fin5.png"),
      require("../assets/images/uni_wise_images/finland/fin6.png"),
      require("../assets/images/uni_wise_images/finland/fin7.png"),
      require("../assets/images/uni_wise_images/finland/fin8.jpg"),
      require("../assets/images/uni_wise_images/finland/fin10.png"),
      require("../assets/images/uni_wise_images/finland/fin11.png"),
    ],
    IS: [
      require("../assets/images/uni_wise_images/iceland/ice1.png"),
      require("../assets/images/uni_wise_images/iceland/ice3.jpg"),
      require("../assets/images/uni_wise_images/iceland/ice4.png"),
      require("../assets/images/uni_wise_images/iceland/ice5.png"),
      require("../assets/images/uni_wise_images/iceland/ice8.png"),
      require("../assets/images/uni_wise_images/iceland/ice9.png"),
      require("../assets/images/uni_wise_images/iceland/ice10.png"),
      require("../assets/images/uni_wise_images/iceland/ice11.png"),
    ],
    IE: [
      require("../assets/images/uni_wise_images/ireland/ire1.png"),
      require("../assets/images/uni_wise_images/ireland/ire2.png"),
      require("../assets/images/uni_wise_images/ireland/ire3.png"),
      require("../assets/images/uni_wise_images/ireland/ire4.jpg"),
      require("../assets/images/uni_wise_images/ireland/ire5.png"),
      require("../assets/images/uni_wise_images/ireland/ire6.png"),
      require("../assets/images/uni_wise_images/ireland/ire7.jpg"),
      require("../assets/images/uni_wise_images/ireland/ire8.png"),
      require("../assets/images/uni_wise_images/ireland/ire9.png"),
      require("../assets/images/uni_wise_images/ireland/ire10.png"),
    ],
    IT: [
      require("../assets/images/uni_wise_images/italy/it1.jpg"),
      require("../assets/images/uni_wise_images/italy/it2.png"),
      require("../assets/images/uni_wise_images/italy/it3.png"),
      require("../assets/images/uni_wise_images/italy/it4.png"),
      require("../assets/images/uni_wise_images/italy/it5.png"),
      require("../assets/images/uni_wise_images/italy/it6.png"),
      require("../assets/images/uni_wise_images/italy/it7.png"),
      require("../assets/images/uni_wise_images/italy/it8.jpg"),
      require("../assets/images/uni_wise_images/italy/it9.png"),
      require("../assets/images/uni_wise_images/italy/it10.png"),
    ],
    NL: [
      require("../assets/images/uni_wise_images/netherland/net1.png"),
      require("../assets/images/uni_wise_images/netherland/net2.png"),
      require("../assets/images/uni_wise_images/netherland/net3.png"),
      require("../assets/images/uni_wise_images/netherland/net4.jpg"),
      require("../assets/images/uni_wise_images/netherland/net5.png"),
      require("../assets/images/uni_wise_images/netherland/net6.png"),
      require("../assets/images/uni_wise_images/netherland/net7.png"),
      require("../assets/images/uni_wise_images/netherland/net8.jpg"),
      require("../assets/images/uni_wise_images/netherland/net9.png"),
      require("../assets/images/uni_wise_images/netherland/net10.png"),
    ],
    NZ: [
      require("../assets/images/uni_wise_images/newzealand/new1.png"),
      require("../assets/images/uni_wise_images/newzealand/new2.jpg"),
      require("../assets/images/uni_wise_images/newzealand/new3.png"),
      require("../assets/images/uni_wise_images/newzealand/new4.png"),
      require("../assets/images/uni_wise_images/newzealand/new5.jpg"),
      require("../assets/images/uni_wise_images/newzealand/new6.jpg"),
      require("../assets/images/uni_wise_images/newzealand/new7.png"),
      require("../assets/images/uni_wise_images/newzealand/new8.png"),
      require("../assets/images/uni_wise_images/newzealand/new9.png"),
      require("../assets/images/uni_wise_images/newzealand/new10.jpg"),
    ],
    NO: [
      require("../assets/images/uni_wise_images/norway/nor1.png"),
      require("../assets/images/uni_wise_images/norway/nor2.png"),
      require("../assets/images/uni_wise_images/norway/nor3.jpg"),
      require("../assets/images/uni_wise_images/norway/nor4.png"),
      require("../assets/images/uni_wise_images/norway/nor5.png"),
      require("../assets/images/uni_wise_images/norway/nor6.png"),
      require("../assets/images/uni_wise_images/norway/nor7.png"),
      require("../assets/images/uni_wise_images/norway/nor8.jpg"),
      require("../assets/images/uni_wise_images/norway/nor9.png"),
      require("../assets/images/uni_wise_images/norway/nor10.png"),
    ],
    OM: [
      require("../assets/images/uni_wise_images/oman/om3.jpg"),
      require("../assets/images/uni_wise_images/oman/om4.png"),
      require("../assets/images/uni_wise_images/oman/om5.png"),
      require("../assets/images/uni_wise_images/oman/om6.jpg"),
      require("../assets/images/uni_wise_images/oman/om7.png"),
      require("../assets/images/uni_wise_images/oman/om8.jpg"),
      require("../assets/images/uni_wise_images/oman/om9.png"),
    ],
    PL: [
      require("../assets/images/uni_wise_images/poland/po1.png"),
      require("../assets/images/uni_wise_images/poland/po2.png"),
      require("../assets/images/uni_wise_images/poland/po3.png"),
      require("../assets/images/uni_wise_images/poland/po5.png"),
      require("../assets/images/uni_wise_images/poland/po6.png"),
      require("../assets/images/uni_wise_images/poland/po8.jpg"),
      require("../assets/images/uni_wise_images/poland/po9.png"),
      require("../assets/images/uni_wise_images/poland/po10.png"),
    ],
    SE: [
      require("../assets/images/uni_wise_images/swedan/sw1.png"),
      require("../assets/images/uni_wise_images/swedan/sw2.png"),
      require("../assets/images/uni_wise_images/swedan/sw3.png"),
      require("../assets/images/uni_wise_images/swedan/sw4.jpg"),
      require("../assets/images/uni_wise_images/swedan/sw5.png"),
      require("../assets/images/uni_wise_images/swedan/sw6.png"),
      require("../assets/images/uni_wise_images/swedan/sw7.png"),
      require("../assets/images/uni_wise_images/swedan/sw8.png"),
      require("../assets/images/uni_wise_images/swedan/sw9.png"),
      require("../assets/images/uni_wise_images/swedan/sw10.png"),
    ],
    TR: [
      require("../assets/images/uni_wise_images/turkey/tur1.png"),
      require("../assets/images/uni_wise_images/turkey/tur2.jpg"),
      require("../assets/images/uni_wise_images/turkey/tur3.png"),
      require("../assets/images/uni_wise_images/turkey/tur4.png"),
      require("../assets/images/uni_wise_images/turkey/tur5.png"),
      require("../assets/images/uni_wise_images/turkey/tur6.png"),
      require("../assets/images/uni_wise_images/turkey/tur7.png"),
      require("../assets/images/uni_wise_images/turkey/tur8.png"),
      require("../assets/images/uni_wise_images/turkey/tur9.png"),
      require("../assets/images/uni_wise_images/turkey/tur10.jpg"),
    ],
    US: [
      require("../assets/images/uni_wise_images/USA/us1.jpg"),
      require("../assets/images/uni_wise_images/USA/us2.png"),
      require("../assets/images/uni_wise_images/USA/us3.jpg"),
      require("../assets/images/uni_wise_images/USA/us4.jpg"),
      require("../assets/images/uni_wise_images/USA/us5.png"),
      require("../assets/images/uni_wise_images/USA/us6.png"),
      require("../assets/images/uni_wise_images/USA/us7.jpg"),
      require("../assets/images/uni_wise_images/USA/us8.png"),
      require("../assets/images/uni_wise_images/USA/us9.png"),
      require("../assets/images/uni_wise_images/USA/us10.png"),
      require("../assets/images/uni_wise_images/USA/us11.png"),
      require("../assets/images/uni_wise_images/USA/us12.png"),
      require("../assets/images/uni_wise_images/USA/us13.jpg"),
    ],
  };

  if (
    sliderImagesMap.hasOwnProperty(countryName)
  ) {
    sliderImages = sliderImagesMap[countryName];
  } else {
    sliderImages = [
      ran1,
      ran2,
      ran3,
      ran4,
      ran5,
      ran6,
      ran7,
      ran9,
      ran10,
      ran11,
      ran12,
      ran13,
      ran14,
    ];
  }

  const slideItems = Array.from({ length: sliderImages.length }, (_, index) =>
    (index + 1).toString()
  );

  const convertedImages = sliderImages.map((image) => image.toString());

  return (
      <ImageSlider items={slideItems} images={convertedImages} onClick={openTawkToChat} />
  );
};

export default SliderSection;
