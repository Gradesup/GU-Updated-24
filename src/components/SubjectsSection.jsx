import React from 'react'
import { Container } from 'react-bootstrap'
import MainHeading from './MainHeading'
import SecondaryHeading from './SecondaryHeading'
import Paragraph from './Paragraph';
import SubjectsBox from './SubjectsBox';

const SubjectsSection =  ({ city, ...props }) => {

    const firstHeading = {
        color:'#000',
        fontSize: '35px',
        fontWeight: '800', 
      };
    
      const secondHeading = {
        color:'#000',
        fontSize: '30px',
        fontWeight: '600', 
        marginBottom : '5px' , 
      };

  return (
    <div className="Subject-Section">
              <Container>
        <MainHeading text={'Our Subjects'} style={firstHeading}/>
        <SecondaryHeading heading={<> Professional {props.changeText} that Accept all Subjects Gradesup.org<sup>®</sup></>} style={secondHeading}/>
        <Paragraph  paragraph={`Get online ${props.changeText} for the students of ${localStorage.getItem('city')}. We have qualified and experienced academic writers for all subjects.`}/>
        <SubjectsBox />
      </Container>
    </div>
  )
}

export default SubjectsSection