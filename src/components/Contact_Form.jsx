import React, { useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact_Form.css'

export const Contact_Form = () => {
  const form = useRef();
  const [Messagereason, updateMessageReason] = useState('Support');
  const [templates, setTemplates] = useState({});

  useEffect(() => {
    fetch('Contact_templates.json') // fetch data
     .then(response => response.json()) // after it has been fetched set the wait(response)
     .then(data => setTemplates(data))// set the data
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    let template = templates[Messagereason];

    console.log(form.current[0].value);
    
    emailjs
      .sendForm('service_weai5jz', template, form.current, {
        publicKey: 'EEXOYg_0LJVo4RaK0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          let result = document.querySelector('#formStatus');
          result.classList.remove('failed')
          result.classList.add('success')
          result.textContent = "Sucess!"
        },
        (error) => {
          console.log('FAILED...', error.text);
          let result = document.querySelector('#formStatus');
          result.classList.remove('success')
          result.classList.add('failed')
          result.textContent = "Failed!"
        },
      );
  };

  return (
    <form ref={form} className='contact-form' onSubmit={sendEmail}>
      <label htmlFor='contact_user_name' value='Name' className='assistive-text'> Name: </label>
      <input type="text" id='contact_user_name' name="user_name" placeholder='Name'/><br/>
      <label htmlFor='contact_user_email' value='Email' className='assistive-text'> Email: </label>
      <input type="email" id='contact_user_email'name="user_email" placeholder='Email'/><br/>
      <label htmlFor='contact_reason_type' className='assistive-text'> Contact Reason: </label>
      <select name='message_reason' id='contact_reason_type' onChange={(e) => updateMessageReason(e.currentTarget.value)}>
        <option selected disabled hidden defaultValue='disabled'> Contact Reason </option>
        <option value='Support'> Support </option>
        <option value='Report'> Report </option>
        <option value='Feedback'> Feedback </option>
        <option value='Inquiry'> Inquiry </option>
      </select><br/>
      <label htmlFor='contact_message' className='assistive-text'> Message: </label>
      <textarea id='contact_message' name="message" aria-label='Input Message' placeholder='Write your message here'/><br/>
      <label htmlFor='contact_submit' className='assistive-text'> Submit: </label>
      <input type="submit" id='contact_submit' value="Submit" />
    </form>
  );
};