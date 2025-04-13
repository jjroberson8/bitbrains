import React from 'react';
import { DataProvider } from '../context/dataContext.jsx';
import Sidenbar from '../components/Sidebar';
import QuizBuilder from '../components/QuizBuilder';
import QuizStart from '../components/QuizStart';
import QuizResult from '../components/QuizResult';
import '../styles/Quiz.css'

function Quiz() {
  const homeItems = [ // array of objects containing href and label properties for each section of the page
    { href: '#accessibility-matters', label: 'Accessibility Matters' },
    { href: '#web-accessibility', label: 'What is Web Accessibility?' },
    { href: '#importance', label: 'Why is Web Accessibility Important?' },
    { href: '#commitment', label: 'Our Commitment' },
    { href: '#get-involved', label: 'Get Involved' },
  ];

  return (
    <div className='main'>
      <Sidenbar items={homeItems}/>
      <main id="main" lang="en">
        <DataProvider>
          <QuizStart/>

          <QuizBuilder/>

          <QuizResult/>
        </DataProvider>
      </main>
    </div>
  )
}

export default Quiz
