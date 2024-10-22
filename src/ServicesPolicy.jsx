import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'

const ServicesPolicy = () => {

  const policyPoints1 = [
    '1st Revision: 24 hours' ,
    '2nd Revision: 48 Hours' ,
    '3rd Revision (and so on): 72 Hours' ,
  ]
  const policyPoints2 = [
    'Double Payment',
    'Identical Order',
    'expert Unavailable',
  ]
  const policyPoints3 = [
    'You will receive 50% of your order amount if we have assigned an expert to do your order.',
    'You will receive 90% of your order amount if we have not assigned an expert to do your order.',
    'You will receive 95% of your order amount if your order details are missing and you cancel your order right after placing it.',
  ]

  return (
    <>
    <PolicyBanner text={'Services POLICY'} bannerIcon={'fa fa-gear'}/>
    <div className="Policy_Text">
    <Container>
        <Paragraph paragraph={<>
          Achieving customer satisfaction is our utmost goal and to do so we work 24/7. Our experts work diligently to provide you flawless work. Despite that, if you don't get the desired quality you can always call for a revision. And not just that, we will revise it as many times as it takes to win your satisfaction. To get a revision done, you can send us an email or give us a call. The time frame for the numbers of revision is as follows;
        </>} />

        <div className="Policy_BulletsPoints">
        {policyPoints1.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>
        <Paragraph paragraph={<>
          Nonetheless, the mentioned time will depend on the clarity and briefness of your revision comments. The shorter and clearer the revision comments, the quicker it will be done. Furthermore, we compare the initial guidelines with the revision comments, if they are similar then we commence with the revision otherwise you will be asked to pay an adjustment fee instead.
        </>} />

        <SecondaryHeading heading={'Urgent Revisions'} />

        <Paragraph paragraph={<>
          For revisions that are required on an urgent basis, the client has to pay adjustment fee, as the expert may not be present at that very moment.
        </>} />

        <SecondaryHeading heading={'Cancellation and Refund Policy'} />

        <Paragraph paragraph={<>
          You can get a complete refund of your money in case of the following conditions :
        </>} />

        <div className="Policy_BulletsPoints">
        {policyPoints2.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>

        <Paragraph paragraph={<>
          There are conditions in which you will receive some part of your amount rather than a complete refund. As per cancellation policy, following conditions apply on the cancellation requests shared by the customers:
        </>} />

        <div className="Policy_BulletsPoints">
        {policyPoints3.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>
        
    </Container>
  </div>
  </>
  )
}

export default ServicesPolicy