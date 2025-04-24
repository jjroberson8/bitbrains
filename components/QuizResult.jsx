import React, { useContext } from 'react';
import DataContext from '../context/dataContext.jsx';
import '../styles/QuizResult.css'

const QuizResult = () => {
  const { showResult, quizs, score, startOver }  = useContext(DataContext);
  return (
    /*Create section, showResult state updates to show/not show result section */
    <section className="result" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className={`result-box ${score > (quizs.length / 2) ? 'success' : 'danger'}`}> {/* Get score and calculate if they "suceed" off of total quiz length */}
              <h1 className='quiz-end-results'>{score > (quizs.length / 2) ? 'Good job!' : 'Try again!'}</h1>
              <h3 className='quiz-end-score'>Your score is {score} out of {quizs.length}</h3>
              <button onClick={startOver} className='start-overBtn' aria-label='Start Over Button'>Start Over</button> {/* Update states to hide result and start but show quiz */}
            </div>
    </section>
  );
}

export default QuizResult;
