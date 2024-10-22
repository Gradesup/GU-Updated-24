import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'
import openTawkToChat from './components/openTawkToChat' 

const Terms = () => {

  const policyPoints = [
    `“Website” means gradesup`,
    ` “You,” “Yours” or “Customer” means you or any other person`,
    `“Writer” means the person who has agreed to complete your assignment`,
    `“We,” “Our” or “Company” means gradesup registered under the laws`,
    `“Quality Assurance Team” means a department working under the company's organizational structure to deliver quality output`,
  ]

  const policyPoints2 = [
    `Our company has professional academic writers, editors, proofreaders, and researchers for the delivery of finest assignment writing service.`,
    `The customer's contract with us will be effective immediately when the payment is received, and completed order is delivered.`,
    `Once the payment is received from you, our services will be liable to produce the customers with the standard quality as instructed.`,
    `Clients can file the complaints within seven days to us, if we fail to fulfill the client's expectations.`,
    `Clients are recommended to view our refund policy prior to asking for the reimbursement.`,
    `The completed order will be delivered to the email address without any extra charges.`,
    `The company assures to assist its clients 24/7 with their skilled customer service representatives.`,
    `Clients are recommended to view our refund policy prior to asking for the reimbursement.`,
    `We agree to assign qualified and experienced writers to create authentic and genuine documents.`,
    `Any unauthorized use of content of this website or delivered product can subject our clients to criminal or civil penalties.`,
  ]

  const policyPoints3 = [
    `By agreeing to our conditions, you acknowledge that we reserve the right to cancel any contract, agreement, or arrangement, with any person who attempts to offer plagiarized products as original.`,
    `You also agree not to reveal any product delivered by us to the third party.`,
    `You will not distribute our delivered product any way for payment or other activities.`,
    `We reserve the right to refuse to carry out your work and services if we find that the client has used the delivered product in the form of plagiarism.`,
    `All the products we offer in the form of written materials should be used for reference or research purposes only.`,
  ]

  const policyPoints4 = [
    `By placing an order, you acknowledge that you completely agree with the above-stated points, as well as with the following points:`,
    `All information used from the provided paper must be properly cited.`,
    <>All products we deliver should be used only as Gradesup.org<sup>®</sup>s for reference or research. You must use for the purposes of learning the techniques for writing a paper in a right format and the correct citation style  (MLA, APA, Chicago, Turabian, Harvard, etc.).</>,
    `No copies of the product will be distributed, and you agree to destroy the product immediately after your reference or research use.`,
    `You agree to receive the latest information regarding offers or contests of the company. You can unsubscribe these updates as when required.`,
  ]

  const policyPoints5 = [
    `The company reserves the authority to change or modify these Terms and Conditions unilaterally.`,
    ` We recommend that our clients keep any eye on any changes made to terms mentioned above on a regular basis.`,
    `It's our duty to reflect the changes immediately on the web pages.`,
  ]


  return (
    <>
    <PolicyBanner text={'TERMS & CONDITIONS'} bannerIcon={'fa fa-star-o'}/>
    <div className="Policy_Text">
    <Container>
        <SecondaryHeading  onClick={openTawkToChat} heading={'Find Every Data Related to Our Terms And Condition Policy:'} />
        <Paragraph paragraph={<>
          Thank You for visiting gradesup and also for choosing us to satisfy your academic needs. But you are highly advised to read this document thoroughly and understand our conditions prior using our academic services. If you do not agree with our exclusive conditions, do not place any order.

          <br /><br />

          Ordering any assignment on this website means that you agree all the terms and conditions mentioned on this page.
        </>} />

        <SecondaryHeading heading={'1 .   Vocabulary'} />
        <div className="Policy_BulletsPoints">
        {policyPoints.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>

        <SecondaryHeading heading={'2 .   Use of our Services'} />
        <div className="Policy_BulletsPoints">
        {policyPoints2.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>

        <SecondaryHeading heading={'3 .   Delivery Policy'} />
        <Paragraph paragraph={<>
          <br />
          gradesup is responsible for providing on-time delivery of ordered documents to its customers. In case, we fail to deliver the project on-time, then the customer can ask for a complete refund. We produce the papers according to the required specifications and standards. We promise for the delivery of fine quality contents to our customers.
        </>} />

        <SecondaryHeading heading={'4 .   No Plagiarism'} />
        <div className="Policy_BulletsPoints">
        {policyPoints3.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>

        <SecondaryHeading heading={'5 .   Data Protection and Security'} />
        <Paragraph paragraph={<>
          <br />
          We will never reveal your personally identifiable information (PII) other than as needed to do by the legal agency. Please go to our privacy policy that can be easily found on our website. You can gather detailed knowledge of our policies regarding data security.
          <br />
          Please refer to the policies section to get more information about the security of information.
        </>} />
        <SecondaryHeading heading={'6 .   Warranties'} />
        <div className="Policy_BulletsPoints">
        {policyPoints4.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>
        <SecondaryHeading heading={'7 .   Amendments in Term of Service'} />
        <div className="Policy_BulletsPoints">
        {policyPoints5.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>
        
    </Container>
  </div>
  </>
  )
}

export default Terms