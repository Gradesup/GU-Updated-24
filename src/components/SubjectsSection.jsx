import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MainHeading from './MainHeading'
import SecondaryHeading from './SecondaryHeading'
import Paragraph from './Paragraph';
import SubjectsBox from './SubjectsBox';
import { useLocation } from 'react-router-dom';

const SubjectsSection = ({ city, ...props }) => {

  const [showProfessional, setShowProfessional] = useState(true); // State to control "Professional" visibility
  const location = useLocation(); // Get the current URL

  useEffect(() => {
    // Show/hide words based on the URL
    if (location.pathname === '/hire-book-writer-now'
      || location.pathname === '/hire-best-ghostwriter'
      || location.pathname === '/write-ebook-for-you'
      || location.pathname === '/hire-publication-experts'
      || location.pathname === '/we-can-publish-your-paper'
      || location.pathname === '/best-thesis-publication-service'
      || location.pathname === '/premium-publishing-services'
      || location.pathname === '/hire-a-book-writer'
      || location.pathname === '/best-publishing-services') {
      setShowProfessional(false); // Show "Professional"
    } else {
      setShowProfessional(true); // Hide "Professional"
    }
  }, [location.pathname]); // Re-run when the URL changes

  const firstHeading = {
    color: '#000',
    fontSize: '35px',
    fontWeight: '800',
  };

  const secondHeading = {
    color: '#000',
    fontSize: '30px',
    fontWeight: '600',
    marginBottom: '5px',
  };

  return (
    <div className="Subject-Section">
      <Container>
        <MainHeading text={'Our Subjects'} style={firstHeading} />
        <SecondaryHeading heading={<> {showProfessional && <>Professional </>}{props.changeText} that Accept all Subjects Gradesup.org<sup>®</sup></>} style={secondHeading} />
        <Paragraph paragraph={`Get online ${props.changeText} for the students of ${localStorage.getItem('city')}. We have qualified and experienced academic writers for all subjects.`} />
        <SubjectsBox />
      </Container>
    </div>
  )
}

export default SubjectsSection