import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'

const RefundPolicy = () => {

  const policyPoints = [
    'Name',
    'Address',
    'Email address',
    'Phone number',
    'Credit/debit card information',
  ]

  return (
    <>
      <PolicyBanner text={'PRIVACY POLICY'} bannerIcon={'fa fa-shield'} />
      <div className="Policy_Text">
        <Container>
          <SecondaryHeading heading={'Our Commitment to Privacy'} />
          <Paragraph paragraph={<>
            Your security matters to us. To protect your personal and order-related information, we state this notice clarifying our online data protection practices and the decisions you can make about the ways we use to gather your data.
          </>} />
          <SecondaryHeading heading={'Information Collection Protocols'} />
          <Paragraph paragraph={<>
            We utilize the information that you give willfully about yourself while putting in your request to avail the requested services. We require your identifiable information regarding our service only if you wish to subscribe to our newsletters, avail our services, receive periodic emails, and get updates about our discount deals.
            <br />
            We never share your data with third parties unless you explicitly allow us to do so. Usually, we share the required data only with our team members who are directly involved in delivering you the required services. In this case, your data will only be shared with the person who is assigned to your task.

          </>} />
          <SecondaryHeading heading={'The Requested Information'} />
          <Paragraph paragraph={<>
            This clause applies to all the crucial details gathered or submitted on this website. On our website, you can place an order for our services, make requests, and register to receive updates. The information includes:
          </>} />
          <div className="Policy_BulletsPoints">
            {policyPoints.map((point, index) => (
              <BulletPoint key={index} bulletpoint={point} />
            ))}
          </div>
          <SecondaryHeading heading={'Do We Use “Cookies”?'} />
          <Paragraph paragraph={<>
            We follow your cookie trail. We use cookies to enable us to gather data about website interaction and website traffic so that we give our clients the best site experiences. We also give you an option to turn off all cookies through your browser settings. We assure you that we do not collect your personal information via cookies.
          </>} />
          <SecondaryHeading heading={'Consent'} />
          <Paragraph paragraph={<>
            We may offer you a chance to participate in the challenges on our website. If you take an interest, we will request some particular data from you. The required information includes contact information (for Gradesup.org<sup>®</sup> name and shipping address of the customer), and demographic information (such as zip code).
            <br />
            For more information, chat with us, give us a call or send us an email.
          </>} />
          <SecondaryHeading heading={'Disclaimer'} />
          <Paragraph paragraph={<>
            The content provided on the website is only for informational purposes. The information displayed in some sections may not be entirely true as we add such information to help the visitors of this website understand how our services work.
          </>} />
        </Container>
      </div>
    </>
  )
}

export default RefundPolicy