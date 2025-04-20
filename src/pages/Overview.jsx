import React, { useState, useEffect } from 'react'
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Overview.css';
import Sidebar from '../components/Sidebar';


function Overview() {
  const [isRendered, setIsRendered] = useState(false);
    
      useEffect(() => {
        setIsRendered(true);
      }), [];

  return (
    <>
    <title>Overview</title>
    <meta name='description' content='Overview on Web Accessability'/>
    <meta name='keywords' content='Accessability, Overview'/>
    <div className='main' role='main'>
      {isRendered ? (
        <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
      <h1> Understanding Web Accessibility</h1>
      <h2>How Does It Help Me?</h2>
      <p>Web accessibility  can come in many types and forms, 
         some of which you may already be using during your search through the web!
      </p>
      
      <section>
        <h2 id ="sight">Eyesight Accessibility</h2>
        <p>Visual accessibility can take many different forms. One of the ways it occurs is in color blindness. 
          According to the WGAC, contrast is an important feature in making your website accessible to those who’re color blind. 
          The WGAC sets three levels for contrast standards: 
          A for anything which does not distinguish well or at all, AA for anything with a contrast ratio of at least 4.5:1, 
          and last AAA for anything with a contrast ratio of 7:1 or higher.
        </p>
        <br />
        <p>
        Color blindness is not the only way parts of a website become visually accessible, 
        being able to be navigated by people who cannot see or have other visual impairments is important too. 
        Often, people with these impairments will navigate sites using assistive technology such as screen-readers or text-to-speech software. 
        In order to ensure that these users can navigate and use your site, images and videos must have “alt” text to describe what is being presented. 
        In the case of videos, having scene-cues inside of the transcript helps tell the audio user what is going on.
        </p>
        <br />
        <h3>
          <ul>
            Examples of Accessibility Catergories for Vision
            <li>Text</li>
            <ul id ="subtext">Font Size, Spacing, Color/Contrast, Style, Length</ul>
          </ul>

          <ul>
          <li>Website Page</li>
          <ul id ="subtext">Brightness, Text Rewrap, UI, Alignment, Border </ul>
          </ul> 
        </h3>
      </section>

      <section>
      <h2 id ="sound">Hearing Accessibility</h2>
      <p> 
        For users who experience difficulties hearing or are deaf, hearing accessibility must be provided 
        to those wanting or needing their services.
        In order to ensure that these users can navigate and use your site, 
        images and videos must have “alt” text to describe what is being presented. 
        In the case of videos, having scene-cues inside of the transcript helps tell the audio user what is going on. 
        It is also important to note that having transcripts or text for anything that is audible is important to have for deaf or hard-of-hearing users. 
      </p>
      <br />
      <p>
      To help users fill out forms, forms are expected to have “labels” for each of their sections. 
      In special cases in which an element does not have a label, 
      “aria” tags such as “aria-label” are expected to ensure that users know what they are interacting with. 
      Aria stands for Assistive Rich Internet Applications and is used to provide extra context to elements. 
      It is also important to make sure that error messages are accessible by these technologies so that users know what errors
       are occurring while filling out forms. 
      </p>
      <br />
      <h3>
          <ul>
            Examples of Accessibility Catergories for Hearing
            <li>Sound Assistance</li>
            <ul id ="subtext">Text-To-Speech, Volume Control/Levels, Audio Cues </ul>
          </ul>

          <ul>
          <li>Website Page</li>
          <ul id ="subtext">Sign Language, Closed Captions, Descriptive Transcipts, Speech Recognition Software </ul>
          </ul>
          
        </h3>
      </section>
      
      <section>
      <h2 id ="Touch">Keyboard Accessibility </h2>
      <p>
      Some of the many things people take for granted are the mouse and cursor. 
      For some with motor controls this is not an option and must be addressed. 
      To ensure that people who cannot use a mouse are able to navigate your site, ensure that the ordering of divs, 
      sections, etc. are organized such that you don’t need css to make the information flow directionally. 
      This ensures that users are able to navigate the website using tools such as the tab key on the keyboard. 
      </p>
      <br />
      <p>
      A great way to ensure your website is navigable by all users is to try and use your website without a mouse. 
      Things to ensure work while doing this are: forms, navigation, and links. 
      What you also want to ensure is that elements that are being hovered by the tab are outlined in a way that shows the user they have that element selected.
      </p>
      <br />
      <h3>
        <ul>
          Examples for Keyboard Accessibility 
          <li>Page Traversal</li>
            <ul id="subtext">
              Working Keystrokes, Navigational Order, Focus Order
            </ul>
        </ul>
      </h3>
      </section>
    </div>
    </>
  )
}

export default Overview
