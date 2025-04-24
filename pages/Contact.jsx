import React, {useEffect, useState, Suspense, lazy} from 'react'
import { Helmet } from 'react-helmet'
import getHeaders from '../helper_functions/getHeaders'
import { ContactForm } from '../components/Contact_Form'

const Sidebar = lazy(()=> import('../components/Sidebar'));

function Contact() {
  const [isRendered, setIsRendered] = useState(false);
    
    useEffect(() => {
      setIsRendered(true);
    }), [];
  return (
    <>
    <Helmet>
      <title> Contact us </title>
      <meta name='description' content='Contact Bit Brains'/>
      <meta name='keywords' content='Contact, Bit Brains'/>
    </Helmet>
    <main className='main' role='main' id='contact-main'>
      <Suspense fallback={<p> Loading Sidebar... </p>}>
        {isRendered &&<Sidebar items={getHeaders()}/>}
      </Suspense>
      <h2 id='contact-us'>Contact us here</h2>
      <ContactForm/>
      <div className='formStatus' id='formStatus'></div>
      <h2 id='contact-options'> What are the options? </h2>
      <section>
        <ul>
          <li><strong>Support:</strong> Request help, message is information about the help needed.</li>
          <li><strong>Report:</strong> Report a problem, message is information about the problem.</li>
          <li><strong>Feedback:</strong> Get a feedback form sent to your email. Message acts as a memo.</li>
          <li><strong>Inquiry:</strong> General questions, message is information about the question.</li>
        </ul>
      </section>
    </main>
    </>
  )
}

export default Contact
