import React from 'react'
import './PlanFAQs.css'
import { Container , Row ,Col,Card} from 'react-bootstrap';
const PlanFAQs = () => {
  return (
 <>
 <hr></hr>
 <div className="faq-plan">
   <Container>
     <h1 className='text-center text-dark mb-5'>FAQs</h1>
     <Row>
<Col md={6}>
  <Card  className='p-4'>
  <h2><b>Can I change my plan?</b></h2>
    <p>Yes, you can change your plan at any time. You just log in, go to the ‘Subscription’ area of your profile, and choose your new plan.</p>
  </Card>
   
</Col>
<Col md={6}>
  <Card className='p-4'>
  <h2><b> How can I cancel my subscription?</b></h2>
<p>You can cancel your subscription by just logging into your account and clicking on the unsubscribe button in the ‘Subscription’ area of your profile.</p>
  </Card>

</Col>
     </Row>
   </Container>
   </div></>
  )
}

export default PlanFAQs