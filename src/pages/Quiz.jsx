import React from 'react';
import { DataProvider } from '../context/dataContext.jsx';
import Sidenav from '../components/Sidenav';
import QuizBuilder from '../components/QuizBuilder';
import QuizStart from '../components/QuizStart';
import QuizResult from '../components/QuizResult';
import '../styles/Quiz.css'

function Quiz() {
  return (
    <div className='quiz'>
      <Sidenav/>
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
