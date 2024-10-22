import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Paragraph from "./components/Paragraph";
import BannerPoints from "./components/BannerPoints";
import aboutImg1 from "./assets/images/about_ban1.png";
import aboutImg2 from "./assets/images/about_ban2.png";
import aboutImg3 from "./assets/images/about_ban3.png";
import aboutImg4 from "./assets/images/about_ban4.png";
import NavbarBtn from "./components/NavbarBtn";
import chatExpert from "./assets/images/gifs/chatexpert.png";
import aboutImgWebp from './assets/images/about-banner.webp';
import AboutSection from "./components/AboutSection";
import MainHeading from "./components/MainHeading";
import SecondaryHeading from "./components/SecondaryHeading";
import AboutGuranteeBox from "./components/AboutGuranteeBox";

const About = ({ whatsappNumber , changeText, city , openTawkToChat, dynamicCountry }) => {
    const firstHeading = {
        fontSize: "35px",
        fontWeight: "800",
        textAlign: "center",
    };

    const secondHeading = {
        fontSize: "26px",
        fontWeight: "600",
        textAlign: "center",
    };

    const aboutHeading = 'We Provide Best Quality, Plagiarism-Free Assignments At An Affordable Price.' ;

    const aboutPara =
        "At Best Quality Academic Help, we Provide University and College Students with Professional Support to help them excel Academically. From custom written Assignments that stand out from the crowd, to unique ideas which capture their professors’ imaginations – our team is here for you! Let us show you why so many young minds turn to us when they need assistance on their academic journey.";

    const aboutPara2 = (
        <>
            Gradesup.org<sup>®</sup> is a one-stop destination for all your academic needs! We are the only Assignment
            Help service provider in {localStorage.getItem('city')} with more than 500 Ph.D. consultants on board to provide you
            professional, customized assistance 24/7 – no matter what subject or course you're pursuing! Our
            team of highly experienced writers, researchers, proofreaders and editors is determined to
            deliver top-notch quality solutions within set deadlines; while our commitment towards customer
            satisfaction makes us stand out among other online services providers globally!
            <br />
            we believe in offering our clients the best of services at an affordable price. Our dedicated
            24/7 customer service team is always eager and ready to assist anytime with your assignment
            queries for those urgent deadlines! If that wasn't enough already - you will also get a Free
            Turnitin Report, 100% Money-Back Guarantee along with Unlimited Revisions when working on your
            project with us – no other Assignment provider can match these unique perks!. With over 100,000+
            satisfied customers worldwide across multiple domains– why look any further? Reach out to us
            today and experience world-class Assessments written by experienced professionals who are just
            one call away. Don’t miss out on amazing discounts while they last! <br />
            With thousands of satisfied customers, we are a leading provider in the Assignment help industry.
            Our expertise and top-notch customer support allow us to provide world-class Assessments, essays,
            theses dissertations with unique features like free Turnitin reports & unlimited revisions along
            with 100% money back guarantee at reasonable prices making sure you get what you need now! Stop
            worrying about "Where to find my Assignment" - reach out to us today for an unbeatable
            experience!
            <br /> <br />
            We are your one-stop destination for top quality online Assignment Help in {localStorage.getItem('city')}. Our unique and
            professional services provide an attractive solution to the academic needs of all students! Reach
            out now - our friendly team is ready to help with any Assignment you have.;
        </>
    );

    

    return (
            <div className="AboutPage">
                <div className="mainAboutSection">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={8}>
                                <h3 className="secondHeading blinker-animation">- AFFORDABLE - FASTEST - 100% SECURE</h3>
                                <h2 className="mainHeading">
                                    Get The Best Help With Your Academics From Our Experienced Professionals
                                </h2>
                                <Paragraph
                                    paragraph={<>Gradesup.org<sup>®</sup> is a true champion of high-quality Academic Solutions! With their help, students all over the world can overcome any academic challenge with ease and get back to focusing on what matters most - learning and growing! Gradesup.org<sup>®</sup> is the flag bearer of a world-class Academic Solutions provider.</>}
                                />
                                <div className="d-flex my-4 points">
                                    <BannerPoints img={aboutImg1} para="Subject Experts With Flair of Academic Writing" />
                                    <BannerPoints img={aboutImg2} para="100% FREE Turnitin Report on Time" />
                                    <BannerPoints img={aboutImg3} para="17,3456+ Clients 100% Satisfaction Rate" />
                                    <BannerPoints img={aboutImg4} para="Highest Grade A+ Worthy Assignments" />
                                </div>
                                <div className="navbarBtn mt-4">
                                    <NavbarBtn
                                        className="whatsappBtn w-100 fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                                        btnText="WhatsApp Now"
                                        icon="fa fa-whatsapp"
                                        btnLink={`https://wa.me/${whatsappNumber}`}
                                    />
                                    <div className="expertBtn d-flex align-items-center w-100" onClick={openTawkToChat}>
                                        <img loading="lazy" src={chatExpert} alt="" />
                                        <a>Get Expert Advice</a> 
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className="About-Img text-center mt-5 w-100">
                                <img src={aboutImgWebp} alt="About-Img" width="100%" />
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <AboutSection
                    city={city}
                    aboutPara={aboutPara}
                    aboutHeading={aboutHeading}
                    aboutPara2={aboutPara2}
                    openTawkToChat={openTawkToChat}
                />
                <div className="Gurantees-Section text-white">
                    <Container>
                        <MainHeading text={"Our Gurantees"} style={firstHeading} />
                        <SecondaryHeading
                            heading={
                                " We Stand Above The Competition In Offering Professional Services With An Attractive Edge"
                            }
                            style={secondHeading}
                        />
                        <Paragraph
                            paragraph={`Our academic solutions offer more than just high grades - we give you the unique opportunity to reach your full potential and exceed expectations! With a professional team of expert tutors on hand, our services truly provide an unequalled advantage. So if you're looking for that A+ experience, come join us today!`}
                        />
                        <AboutGuranteeBox city={city} changeText="Tutoring Help" />
                    </Container>
                </div>
                <div className="lastSection">
                    <Container className="text-center">
                        <div className="text-white">
                            <h2 class="mb-0 blinker-animation"> - Free Free Free - </h2>
                            <h3 className="secondHeading text-white">READY TO GET YOUR FREE SAMPLE?</h3>
                            <Paragraph
                                paragraph={`READY TO GET STARTED? SEND US YOUR FIRST ORDER AND YOU WON'T BE DISAPPOINTED. OUR TEAM OF EXPERTS WILL WORK THEIR MAGIC AND HAVE IT ON ITS WAY WITHIN JUST A FEW HOURS - FOR FREE! GET READY FOR SUCCESS WITH THE JUST SEND YOUR FIRST ORDER AND WAIT A COUPLE OF HOURS EXPERIENCE.`}
                            />
                            <div className="navbarBtn mt-4 justify-content-center">
                                <NavbarBtn
                                    className="whatsappBtn fs-16 fw-600 t-t-uppercase ff-tenor navbar-btn"
                                    btnText="Get First Order Now"
                                    style={{ width: "50%" }}
                                    btnLink={`${dynamicCountry}/order-form`}
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
    );
};

export default About;