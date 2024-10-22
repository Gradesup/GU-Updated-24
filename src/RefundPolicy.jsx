import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'

const RefundPolicy = () => {

  const policyPoints = [
    <>1. If the customer has been mistakenly charged twice by credit card, Gradesup.org<sup>®</sup> will return the extra amount immediately.</> ,
     '2. The client is not eligible for refunds on urgent orders (orders with a deadline of under 48 hours are considered urgent).' ,
      '3. If the task delivered is of poor quality or fails to meet specified deadlines, the client is eligible for up to 50% refund only.',
      '4. -If there is evidence of plagiarism in the submitted work in this situation client is eligible for up to 50% refund only.',
      '5. If the client does not like the work, they are not eligible for a refund until they provide authentic evidence client is eligible for up to 50% refund only.',
      '6. The client is not eligible for a refund if they did not provide proper details or instructions at the time of placing the order.',
      ' 7. If a customer service representative fails to respond to an inquiry within 48 hours client is eligible for up to 50% refund.',
      `8. If, after 7-10 revisions, there is still no satisfactory result or improvement in the quality of work we've provided, clients will be eligible for a 50% refund. This refund will only be applicable after seven days from the delivery date..`,
      '9. We will process the refund within two weeks after receiving all evidence of the bad quality work or unsatisfactory result.',
      '10. Plagiarism check results must be shared at the time of submission, as we are not responsible for any potential infections that may occur after submission or delivery completion.',
      '11. The client can only request revisions to their work within 30 days. After 30 days, no free revisions or refunds will be given.',
  ]

  return (
    <>
    <PolicyBanner text={'REFUND POLICY'} bannerIcon={'fa fa-lock'}/>
    <div className="Policy_Text">
      <Container>
          <Paragraph paragraph={<>
            At Gradesup.org<sup>®</sup>, we understand that students have different needs and expectations when it comes to their academic assignments. That’s why our refund policy is designed to be fair and friendly to all of our customers. We want to ensure you are able to receive the service you require without having any negative experiences along the way

            <br /><br />

            We are committed to providing top quality services for our customers and make sure that each task we complete meets the standards of academic excellence. However, if a customer feels that a content does not meet the expected quality standards or was not completed in a timely manner, then they can apply for a refund after getting atleast 7 revisions..
          </>} />
          <SecondaryHeading heading={'Here are the 11 circumstances under which customers can apply for a refund'} />

          <div className="Policy_BulletsPoints">
          {policyPoints.map((point, index) => (
            <BulletPoint key={index} bulletpoint={point} />
          ))}
          </div>

          <Paragraph paragraph={<>
            <br />
            Refunds will generally be processed within two weeks from submission date upon receipt of valid evidence supporting bad quality work or fail results from client’s end.
            We offer a refund only if the original deadline of the assignment is missed by us. In case of revision, a new deadline has to be mutually decided. No refund claims can be made if a revision deadline was not decided

            <br /><br />

            Full refund= 90% of the amount paid. 10% deduction is transaction cost paid to the payment Gateway Company plus service charges Any queries regarding refund requests should be directed towards Customer Support Team first before initiating any dispute/refund request process with payment gateway provider or any other financial institute/authority.
          </>} />

          <SecondaryHeading heading={'Disputes:'} />

          <Paragraph paragraph={<>
            If you have a dispute with your order, please contact our customer service team at support@.Gradesup.org to discuss the issue.
          </>} />

          <SecondaryHeading heading={'NOTE:'} />

          <Paragraph paragraph={<>
            If our financial team finds that a customer has opened a fraudulent dispute though bank without discussing the issue with us, we are unable to issue a refund. Our legal team may take legal action against the online fraud as per country laws. We take our customer's satisfaction seriously, and we strive to resolve any issues or concerns as quickly as possible. Please don't hesitate to contact us if you have any questions or concerns about our refund/dispute policy. Should a client feel unsatisfied with Gradesup<sup>®</sup>’ services and wishes to seek a refund in order to resolve this issue, please contact our team through email at support@gradesup.org<sup>®</sup> and provide details on your concern so that our Customer Support Team can handle it efficiently and speedily.
          </>} />
          
      </Container>
    </div>
    </>
  )
}

export default RefundPolicy