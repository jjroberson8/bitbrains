import React, {useEffect, useState} from 'react'
import Sidebar from '../components/Sidebar.jsx'
import getHeaders from '../helper_functions/getHeaders.jsx'
import { Contact_Form } from '../components/Contact_Form.jsx'

function Contact() {
  const [isRendered, setIsRendered] = useState(false);
    
      useEffect(() => {
        setIsRendered(true);
      }), [];
  return (
    <>
    <title> Contact us </title>
    <meta name='description' content='Contact Bit Brains'/>
    <meta name='keywords' content='Contact, Bit Brains'/>
    <div className='main' role='main' id='contact-main'>
    {isRendered ? (
        <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
      <h2 id='contact-us'>Contact us here</h2>
      <Contact_Form/>
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
    </div>
    </>
  )
}

export default Contact
