import { React }from 'react'
import ServicesTabs from './ServicesTabs'
import MainHeading from './MainHeading'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './SecondaryHeading'

const ServicesSection = ({city , openTawkToChat , whatsappNumber , changeText , dynamicCountry}) => {


  const firstHeading = {
    fontSize: '35px',
    fontWeight: '800', 
    textAlign:'center',
  };

  const secondHeading = {
    fontSize: '18px',
    textTransform:'uppercase',
    fontWeight: '600', 
    textAlign:'center',
  };


  return (
    <div className="Service-Section text-white" id='service-section'>
      <Container>
        <MainHeading text={'Our Services'} style={firstHeading}/>
        <div className="mt-2">
        <SecondaryHeading heading={' We Help students to build test-taking skills and improve grades'} style={secondHeading}/>
        </div>
        <ServicesTabs city = {city} openTawkToChat={openTawkToChat} whatsappNumber={whatsappNumber} changeText={changeText} dynamicCountry={dynamicCountry} />
      </Container>
    </div>
  )
}

export default ServicesSection