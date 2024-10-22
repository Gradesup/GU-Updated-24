import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Paragraph from './components/Paragraph';
import orderImg1 from './assets/images/student_image.jpg';
import orderImg2 from './assets/images/female_stu.png';
import qrCode from './assets/images/graderz_qrc.png';
import { Link } from 'react-router-dom';

const Order = () => {

  const paraStyle= {
    fontSize : '17px' ,
    fontWeight : '700',
    color: '#000',
  }
  return (
    <div className="Order">
      <div className="OrderSection">
          <Container>
            <Row className="align-items-center">
            <Col lg={6} md={5} className='d-flex align-items-center'>
                <div className="text-center w-100">
                  <img loading="lazy" src={orderImg1} className="" width="100%" alt="student-img" />
                </div>
                <div className="text-center w-100">
                  <img loading="lazy" src={orderImg2} className="" width="40%" alt="student-img" />
                </div>
              </Col>
              <Col lg={6} md={7}>
              <span className="offer-badge blink-soft">AMAZING DISCOUNT IN NEW YEAR CELEBRATION 2023🎉 </span>
              <h5 className="fot-head-ofr"><span className="highlight-head">Flat 30%</span> OFF &nbsp; <span className="faplus">+</span> &nbsp; <span className="highlight-head">Extra 5%</span> OFF</h5>
              <Paragraph style={paraStyle} paragraph={'On Assignment, Essay, Dissertation & Coursework Writing Help'}/>
              <div className="d-flex align-items-center justify-content-between">
              <Link to={`/order-form?Coupon=GETDIS55`} className="promo_code_bt">Use Code : GETDIS55 </Link>
              <p className="txt_code_scan">Use promo code for 55% discount. </p>
              <img alt="qrcode" loading="lazy" width={'16%'} class="qr_code" src={qrCode} />
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Order