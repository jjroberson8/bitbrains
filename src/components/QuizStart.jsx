import React, { useContext } from 'react'
import DataContext from '../context/dataContext.jsx'
import '../styles/QuizStart.css'

const QuizStart = () => {
  const {startQuiz, showStart} = useContext(DataContext);
  return (
    <div className='start' style={{ display: `${showStart ? 'block' : 'none'}` }}>
                <div className="startBox">
                    <div className="">
                        <h1 className='title'>Accessibility </h1>
                        <button onClick={startQuiz} className="" aria-label='Start Quiz Button'>Start Quiz</button>
                    </div>
                </div>
        </div>
  )
}

export default QuizStart;
