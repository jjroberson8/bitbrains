import React, {useState, useEffect} from 'react';
import { DataProvider } from '../context/dataContext.jsx';
import Sidebar from '../components/Sidebar';
import QuizBuilder from '../components/QuizBuilder';
import QuizStart from '../components/QuizStart';
import QuizResult from '../components/QuizResult';
import getHeaders from '../helper_functions/getHeaders.jsx';
import '../styles/Quiz.css'

function Quiz() {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }), [];

  return (
    <>
    <title>Accessibility Quiz</title>
    <meta name='description' content='Quiz on Accessibility Information'/>
    <meta name='keywords' content='Accessibility, Quiz'/>
    <div className='main' role='main'>
      {isRendered ? (
        <Sidebar items={getHeaders()}/> ) : ( <p> Rendering </p>)}
      {/*<Sidebar items={sideBarItems}/>*/}
      <h2 id='take-quiz'> Take the Quiz </h2>
        <DataProvider>
          <QuizStart/>

          <QuizBuilder/>

          <QuizResult/>
        </DataProvider>
         
    </div>
    </>
  )
}


export default Quiz
