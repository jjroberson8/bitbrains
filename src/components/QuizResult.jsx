import React, { useContext } from 'react';
import DataContext from '../context/dataContext.jsx';

const QuizResult = () => {
  const { showResult, quizs, score, startOver }  = useContext(DataContext);
  return (
    <section className="result" style={{ display: `${showResult ? 'block' : 'none'}` }}>
      <div className="container">
        <div className="">
          <div className="">
            <div className={` ${score > (quizs.length / 2) ? 'success' : 'danger'}`}>
              <h1 className=''>{score > (quizs.length / 2) ? 'Good job!' : 'Try again!'}</h1>
              <h3 className=''>Your score is {score} out of {quizs.length}</h3>
              <button onClick={startOver} className='' aria-label='Start Over Button'>Start Over</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizResult;
