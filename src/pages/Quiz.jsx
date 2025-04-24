import React, {useState, useEffect, Suspense, lazy} from 'react';
import { Helmet } from 'react-helmet'
import { DataProvider } from '../context/dataContext.jsx';
import QuizBuilder from '../components/QuizBuilder';
import QuizStart from '../components/QuizStart';
import QuizResult from '../components/QuizResult';
import getHeaders from '../helper_functions/getHeaders.jsx';
import '../styles/Quiz.css'

const Sidebar = lazy(()=> import('../components/Sidebar'));

function Quiz() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }), [];

  return (
    <>
    <Helmet>
      <title>Accessibility Quiz</title>
      <meta name='description' content='Quiz on Accessibility Information'/>
      <meta name='keywords' content='Accessibility, Quiz'/>
    </Helmet>
    <main className='main' role='main'>
    <Suspense fallback={<p> Loading Sidebar... </p>}>
    {isRendered &&<Sidebar items={getHeaders()}/>}
    </Suspense>
      <h2 id='take-quiz'> Take the Quiz </h2>
      <DataProvider>
        <QuizStart/>
        <QuizBuilder/>
        <QuizResult/>
      </DataProvider>
    </main>
    </>
  )
}


export default Quiz
