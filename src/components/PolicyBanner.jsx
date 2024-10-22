import React from 'react'
import { Col, Container } from 'react-bootstrap'

const PolicyBanner = (props) => {
  return (
    <div className='policy-banner'>
                    <Container>
                    <h2 className='t-t-uppercase'>{props.text}<i className={props.bannerIcon}></i></h2>
                    <Col xl={6} md={8}>
                    <p className='fs-18 fw-600 mt-10'>Please Read Our Policies Carefully and Feel Free to Get in Touch With Us, If you Have Ambiguities Regarding any Clause.</p>
                    </Col>
                    </Container>
                    </div>
  )
}

export default PolicyBanner