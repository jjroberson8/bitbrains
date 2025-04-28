import React, { useRef, useState, useEffect} from 'react';
import validator from "validator";
import emailjs from '@emailjs/browser';
import '../styles/Contact_Form.css'

export const ContactForm = () => {
  const form = useRef();
  const [messageReason, setMessageReason] = useState('Support');
  const [templates, setTemplates] = useState({});
  const [emailError, setEmailError] = useState("Enter a Valid Email!");
  const [validEmail, setValidEmail] = useState(false)
  const [nameError, setNameError] = useState("Enter a Name!")
  const [reasonError, setReasonError] = useState("Select a Reason!")
  const [messageError, setMessageError] = useState("Set a Message!")

  const validateEmail = (e) => {
		const email = e.target.value;

		if (validator.isEmail(email)) {
			setEmailError("Valid Email :)");
      setValidEmail(true);
		} else {
			setEmailError("Enter a Valid Email!");
      setValidEmail(false);
		}
	};

  const updateReason = (e) => {
    setMessageReason(e.target.value)
    setReasonError("")
  }

  const validateName = (e) => {
		if (e.target.value == "" || e.target.value == null) {
      setNameError("Enter a Name!");
		} else {
			setNameError("");
		}
	};
  const validateMessage = (e) => {
		if (e.target.value == "" || e.target.value == null) {
      setMessageError("Set a Message!");
		} else {
			setMessageError("");
		}
	};

  useEffect(() => {
    fetch('Contact_templates.json') // fetch data
     .then(response => response.json()) // after it has been fetched set the wait(response)
     .then(data => setTemplates(data))// set the data
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
      let template = templates[messageReason];
      //validate options
      if (validEmail && nameError == "" && reasonError == "" && messageError == "") {
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
      } else {
        let result = document.querySelector('#formStatus');
          result.classList.remove('success')
          result.classList.add('failed')
          result.textContent = "Failed!"
      }
    
    
  };

  return (
    <form ref={form} className='contact-form' onSubmit={sendEmail}>
      <label htmlFor='contact_user_name' value='Name' className='assistive-text'> Name: </label>
      <input type="text" className='' id='contact_user_name' name="user_name" placeholder='Name' onChange={(e) => validateName(e)}/><br/>
      <span className='invalid'>{nameError}</span>
      <label htmlFor='contact_user_email' value='Email' className='assistive-text'> Email: </label>
      <input type="email" className='' id='contact_user_email'name="user_email" placeholder='Email' onChange={(e) => validateEmail(e)}/><br/>
      <span className={validEmail? 'valid' : 'invalid'}>{emailError}</span>
      <label htmlFor='contact_reason_type' className='assistive-text'> Contact Reason: </label>
      <select className='' name='message_reason' id='contact_reason_type' onChange={(e) => updateReason(e)} >
        <option selected disabled hidden defaultValue='disabled'> Contact Reason </option>
        <option value='Support'> Support </option>
        <option value='Report'> Report </option>
        <option value='Feedback'> Feedback </option>
        <option value='Inquiry'> Inquiry </option>
      </select><br/>
      <span className='invalid'>{reasonError}</span>
      <label htmlFor='contact_message' className='assistive-text'> Message: </label>
      <textarea className=''  id='contact_message' name="message" placeholder='Write your message here' onChange={(e) => validateMessage(e)}/>
      <span className='invalid'>{messageError}</span>
      <label htmlFor='contact_submit' className='assistive-text'> Submit: </label>
      <input type="submit" id='contact_submit' value="Submit" />
    </form>
  );
};