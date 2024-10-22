import React from 'react'
import PolicyBanner from './components/PolicyBanner'
import Paragraph from './components/Paragraph'
import { Container } from 'react-bootstrap'
import SecondaryHeading from './components/SecondaryHeading'
import BulletPoint from './components/BulletPoint'

const FairUsagePolicy = () => {

  const policyPoints = [
    'Acquire knowledge of the topic and understand how the question has been answered.' ,
     'Focus on important points mentioned in each section and paragraph and make notes on them.' ,
      'Develop your own ideas and arguments from the notes that you have prepared.',
      'Review the sources mentioned in the paper provided by us and use them to conduct further research and collect more information.',
  ]

  return (
    <>
    <PolicyBanner text={'Fair Usage POLICY'} bannerIcon={'fa fa-diamond'}/>
    <div className="Policy_Text">
    <Container>
        <Paragraph paragraph={<>
          From last many years, we have been providing the best writing assistance to students enrolled in various universities of the UK. We have a team of highly qualified and experienced writers that strive hard to deliver you a paper that is tailor-made, entirely original, and meet your university guidelines and standards. They work with all their might so that you can fulfil your dream of achieving excellent grades. The main motive of our services is to help you with research, as well as gain knowledge in the given subject so that you can create your own, 100% authentic work. So, the document that we provide to you should only be used as a reference to create your own piece of work and not be submitted directly to the your professor.

          <br /><br />

          So, before you take our services, please go through our Fair Use Policy so that you get a better understanding of how your should use the work that we provide you. We have tried to keep it comprehensive, but if at any point, you have some queries, then feel free to contact us using the details mentioned at the end of this page.
        </>} />
        <SecondaryHeading heading={'The Motive Behind Our Fair Use Policy'} />

        <Paragraph paragraph={<>
          Many scholars make the wrong use of our services by submitting our original work directly to their professor to save themselves from the hard work. It seems tempting, but it can put their academic career into trouble. We have this Fair Use Policy to make you understand that doing something like this is a form of plagiarism which have dire consequences.

          <br /><br />

          The primary objective of our writing services is to provide you with necessary information on your topic so that you can conduct further research and write a high-scoring documents. The work you receive from our end is copyrighted and the best way to take its advantage is by considering it as a guide to acquire knowledge, conduct further research, and then create your own scholastic document.
        </>} />

          <SecondaryHeading heading={'The Right Way of Using the Work We Provide You'} />

        <Paragraph paragraph={<>
          The documents that we compose are aimed to assist students on how a specific topic should be handled so that they can come up with a new and unique perspective to write their papers, collect relevant information from credible sources, and learn the proper formatting. So, instead of passing off our work as your original, use it to:
        </>} />

        <div className="Policy_BulletsPoints">
        {policyPoints.map((point, index) => (
          <BulletPoint key={index} bulletpoint={point} />
        ))}
        </div>

        <Paragraph paragraph={<>
          By doing so, you will surely be able to compose an outstanding document. Make sure that your work is 100% original and completely based on your own ideas and perspective. Although this may take a lot more time and efforts than simply submitting our work as your own, you will reap benefits by scoring well in your college papers but in your final exams as well.
        </>} />

        <SecondaryHeading heading={'The Consequences of Submitting Our Reference Papers to Your Professor as Your Own'} />

        <Paragraph paragraph={<>
          Our researchers and writers work day and night to gather the best data and produce excellent papers so that you acquire complete knowledge of the topic and compose your own documents with a new perspective. Everything they create is their original piece of work. If you submit the reference papers to your professor, there is no way it will end up being flagged by plagiarism scanners. However, he/she might be compelled to think that your style of writing doesn’t match to the paper, or that you have used sources that you don’t have access to or sufficient knowledge to find. You may even be asked to explain the work back to him/her.

          <br/>

          If you have handed our work as your own, then you will be found guilty of doing plagiarism which can lead to serious consequences. Even if you rephrase the reference paper, it will still be counted as unoriginal. So, we strongly suggest you to comply with this Fair Use Policy and use our academic writing services for intended purpose only.


        </>} />

        <SecondaryHeading heading={'The Reasons Why You Should Take Academic Writing Assistance From Us'} />

        <Paragraph paragraph={<>
          After knowing that submitting our work to your professor as your own can be threatening to your academic career, you may be thinking that why should you take academic writing assistance from us then. So, we want to let you know that our reference papers are the most powerful research tools that students can use to create their own academic papers. By taking our services, you will be able to do a concise analysis, in-depth research, as well as build unique opinions and views on a particular topic. Buying our services will save your efforts and time that you invest in sorting through massive amounts of research material, coursebooks, and university documentation.
        </>} />

        <SecondaryHeading heading={'Our Contact Details'} />

        <Paragraph paragraph={<>
          If you have questions about this Fair Use Policy or any discrepancy/grievance against it, then send us an email at <a href="care@Gradesup.org ">care@Gradesup.org<sup>®</sup> <i className='fa fa-envelope'></i></a>
        </>} />
        
    </Container>
  </div>
    </>
  )
}

export default FairUsagePolicy