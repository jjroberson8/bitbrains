import React, { useContext } from 'react';
import DataContext from '../context/dataContext.jsx';
import '../styles/QuizBuilder.css'

const QuizBuilder = () => {
  const { showQuiz, question, quizs, checkAnswer, correctAnswer,
          selectedAnswer,questionIndex, nextQuestion, showResults}  = useContext(DataContext);
  return (
    <section className="quizSection" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="quizbox">
              <div className="scorebar">Question: {quizs.indexOf(question) + 1} / {quizs?.length}</div>
              <div className="questionbar">
                <h3 className='left'>{question?.question}</h3>
              </div>
              <div className='questionsbox'>
                {question?.options?.map((item, index) => 
                <button key={index} className={`option ${correctAnswer === item && 'success'}`}
                  onClick={(event) => checkAnswer(event, item)} aria-label={`${item}`}>
                  {item}
                </button>)
                }
              </div>
                {(questionIndex + 1) !== quizs.length ?
                <button className='nextBtn' onClick={nextQuestion} disabled={!selectedAnswer} aria-label='Next Question Button'>Next Question</button> :
                <button className='resultBtn' onClick={showResults} disabled={!selectedAnswer}aria-label='Show Results Button'>Show Result</button>
                }
            </div>
    </section>
  );
}

export default QuizBuilder
