import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'

const CancelationPolicy = () => {

  const policyPoints = [
    '1.   If client change his/her mind and want to cancel the order so in this situation he/she is eligible for 50% amount only.',
    '2.  If client cancel any order (within 2, 4 Hours) and want to compensate that amount in another order so the service charges 25% of that amount will be deducted.',
    '3.   If we fail to present our clients with suitable subject writers',
    '4.   If the customer violates the terms and conditions of the agreement, and no refund will be possible.',
    '5.   If we are incompetent to fulfill your order within after 24 to 48 hours from decided set time. Because we need atleast 24 to 48 hours, it depend or order difficulty.',
    '6.   If any unexpected event occurs on our end due to which the document cannot be completed.',
  ]

  return (
    <>
      <PolicyBanner text={'CANCELLATION POLICY'} bannerIcon={'fa fa-times'} />
      <div className="Policy_Text">
        <Container>
          <SecondaryHeading heading={'Cancellation Policy:'} />

          <Paragraph paragraph={<>
            Gradesup.org<sup>®</sup> preserves all rights to drop your order any time under severe circumstances. We feel pride in maintaining that we never reject any order due to its difficulty level and deadlines. Nevertheless, we hold the independent rights of rejection or order cancellation
          </>} />

          <SecondaryHeading heading={'Cancellation applies under certain conditions:'} />

          <div className="Policy_BulletsPoints">
            {policyPoints.map((point, index) => (
              <BulletPoint key={index} bulletpoint={point} />
            ))}
          </div>

          <SecondaryHeading heading={'NOTE:'} />

          <Paragraph paragraph={<>
            In the case, if the order is revoked even after its approval due to any unforeseen event or other than the reason of rupturing the contract, we are responsible for presenting a complete refund
          </>} />

        </Container>
      </div>
    </>
  )
}

export default CancelationPolicy