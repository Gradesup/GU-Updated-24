import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'

const GDRPPolicy = () => {

  return (
    <>
    <PolicyBanner text={'GDRP Data Protection Policy'} bannerIcon={'fa fa-lock'}/>
    <div className="Policy_Text">
    <Container>
        <Paragraph paragraph={<>
          General Data Protection Regulation (GDPR) sets out key principles which lie at the heart of the general data protection regime. These key principles are set out right at the beginning of the GDPR and they both directly and indirectly influence the other rules and obligations found throughout the legislation. Therefore, compliance with these fundamental principles of data protection is the first step for controllers in ensuring that they fulfil their obligations under the GDPR. The following is a brief overview of the Principles of Data Protection found in article 5 GDPR:
        </>} />

        <SecondaryHeading heading={'LAWFULNESS, FAIRNESS, AND TRANSPARENCY'} />

        <Paragraph paragraph={<>
          Any processing of personal data should be lawful and fair. It should be transparent to individuals that personal data concerning them are collected, used, consulted, or otherwise processed and to what extent the personal data are or will be processed. The principle of transparency requires that any information and communication relating to the processing of those personal data be easily accessible and easy to understand, and that clear and plain language be used.
        </>} />

        <SecondaryHeading heading={'PURPOSE LIMITATION'} />

        <Paragraph paragraph={<>
          Personal data should only be collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes. In particular, the specific purposes for which personal data are processed should be explicit and legitimate and determined at the time of the collection of the personal data. However, further processing for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes (in accordance with Article 89(1) GDPR) is not considered to be incompatible with the initial purposes.
        </>} />

        <SecondaryHeading heading={'DATA MINIMISATION'} />

        <Paragraph paragraph={<>
          Processing of personal data must be adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed. Personal data should be processed only if the purpose of the processing could not reasonably be fulfilled by other means. This requires, in particular, ensuring that the period for which the personal data are stored is limited to a strict minimum (see also the principle of ‘Storage Limitation’ below).
        </>} />

        <SecondaryHeading heading={'ACCURACY'} />

        <Paragraph paragraph={<>
          Controllers must ensure that personal data are accurate and, where necessary, kept up to date; taking every reasonable step to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay. In particular, controllers should accurately record information they collect or receive and the source of that information.
        </>} />

        <SecondaryHeading heading={'INTEGRITY AND CONFIDENTIALITY'} />

        <Paragraph paragraph={<>
          Personal data should be processed in a manner that ensures appropriate security and confidentiality of the personal data, including protection against unauthorised or unlawful access to or use of personal data and the equipment used for the processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures.
        </>} />

        <SecondaryHeading heading={' ACCOUNTABILITY'} />

        <Paragraph paragraph={<>
          Finally, the controller is responsible for, and must be able to demonstrate, their compliance with all of the above-named Principles of Data Protection. Controllers must take responsibility for their processing of personal data and how they comply with the GDPR, and be able to demonstrate (through appropriate records and measures) their compliance, in particular to the DPC.
        </>} />
        
    </Container>
  </div>
    </>
  )
}

export default GDRPPolicy