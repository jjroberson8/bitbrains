import { createContext, useState, useEffect, } from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    //state management of the quiz, CurrentQuestion, index of the questin, what the correct answer is
    //What the selected answer is, and the total score
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  //Display control states
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

    // Load the quiz JSON
  useEffect(() => {
    fetch('quiz.json') // fetch data
     .then(response => response.json()) // after it has been fetched set the wait(response)
     .then(data => setQuizs(data))// set the data
  }, []);

  //set first question
  useEffect(() =>{
    if (quizs.length > questionIndex) {
        setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  //start the quiz
  const startQuiz = () => {
    setShowStart(false); //This removes the start part
    setShowQuiz(true); // brings the quiz into page
  }

  //validate the answer recieved
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
        setCorrectAnswer(question.answer);
        setSelectedAnswer(selected);

        if (selected === question.answer) {
            event.target.classList.add('success');
            setScore(score + 1);
        } else {
            event.target.classList.add('danger');
        }
    }
  }

  //next question
  const nextQuestion = () => {
    setCorrectAnswer('');
    setSelectedAnswer('');
    const wrongBtn = document.querySelector('button.danger');
    wrongBtn?.classList.remove('danger');
    const rightBtn = document.querySelector('button.success');
    rightBtn?.classList.remove('success');
    setQuestionIndex(questionIndex + 1);
  }

  //show the results 
  const showResults = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  }

  //start quiz over
  const startOver = () => {
    //reset values / states
    setShowResult(false);
    setShowStart(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setScore(0);
    //remove the color schemes
    const wrongBtn = document.querySelector('button.danger');
    wrongBtn?.classList.remove('danger');
    const rightBtn = document.querySelector('button.success');
    rightBtn?.classList.remove('success');
  }

  return (
    //pass information to DataContext and have it be passable to children
    <DataContext.Provider value={{
        startQuiz,showStart,showQuiz,question,quizs,checkAnswer,correctAnswer,
        selectedAnswer,questionIndex,nextQuestion,showResults,showResult,score,
        startOver
    }} >
        {children}
    </DataContext.Provider>    
  )
}

export default DataContext;