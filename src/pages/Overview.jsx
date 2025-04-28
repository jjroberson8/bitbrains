import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet';
import getHeaders from '../helper_functions/getHeaders';
import '../styles/Overview.css';

const Sidebar = lazy(() => import('../components/Sidebar'));


function Overview() {
  const [isRendered, setIsRendered] = useState(false);
    
      useEffect(() => {
        setIsRendered(true);
      }), [];

  return (
    <>
    <Helmet>
      <title>Overview</title>
      <meta name='description' content='Overview on Web Accessibility'/>
      <meta name='keywords' content='Accessibility, Overview'/>
    </Helmet>
    <main className='main' role='main'>
      <Suspense>
      {isRendered ? (
        <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
      </Suspense>
      
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
            Examples of Accessibility Catergories for Vision
          <ul>
            <li>Text</li>
            <li className ="subtext">Appropriate Font Size (Not too big or small)</li>
            <li className ="subtext">Spacing (Letters aren't clustered or too far apart)</li>
            <li className ="subtext">Color/Contrast (Text color and contrast to background is readable)</li>
            <li className ="subtext">Style (Text style is understandable)</li>
            <li className ="subtext">Length (Text goes to a new line after a certain length)</li>
          </ul>
          <ul>
            <li>Website Page</li>
            <li className ="subtext">Brightness (Page isn't too bright or dark)</li>
            <li className ="subtext">UI (Simple to navigate)</li>
            <li className ="subtext">Alingnment (Page is well structured and flows nicely)</li>
            <li className ="subtext">Border (Text box borders are spaced well from each other)</li>
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
        Examples of Accessibility Catergories for Hearing
          <ul>
            <li>Sound Assistance</li>
            <li className ="subtext">Text-To-Speech (A screen reader that transcribes text to audio)</li>
            <li className ="subtext">Volume Control/Levels (Video sound is set at an appropriate level and can be adjusted by the user)</li>
            <li className ="subtext">Audio Cues (Audio is played depending on user action)</li>
          </ul>

          <ul>
            <li>Website Page</li>
            <li className ="subtext">Sign Language (A video that provides the user information through using ASL (American Sign Language))</li>
            <li className ="subtext">Closed Captions (Written desriptions of audio elements)</li>
            <li className ="subtext">Descriptive Transcipts (Transcipts are worded well and understandable)</li>
            <li className ="subtext">Speech Recognition Software (Users can use their voice to input text)</li>
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
        Examples for Keyboard Accessibility 
        <ul>
            <li>Page Traversal </li>
            <li className ="subtext">Working Keystrokes (Users should be able to use their keyboard to navigate through the page)</li>
            <li className ="subtext">Navigational Order (Keyboard navigation should follow the visual flow of the page)</li>
            <li className ="subtext">Focus Order Indicator (Allows the user to visually see where to tab to activate keyboard navigation)</li>
        </ul>
      </h3>
      </section>
    </main>
    </>
  )
}

export default Overview
