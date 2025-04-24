import { createContext, useState, useEffect, } from 'react';
import correctAnswerAudio from '../assets/Quiz_audio/correctAnswerAudio.mp3';
import wrongAnswerAudio from '../assets/Quiz_audio/wrongAnswerAudio.mp3';

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

  const wrongAnswerSound = new Audio(wrongAnswerAudio);
  wrongAnswerSound.volume = .15;
  const correctAnswerSound = new Audio(correctAnswerAudio);
  correctAnswerSound.volume = .15;

  //Display control states
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

    // Load the quiz JSON
  useEffect(() => {
    fetch('bitbrains/quiz.json') // fetch data
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
            correctAnswerSound.play();
            event.target.classList.add('success');
            let correctResult = document.createElement('span');
            correctResult.classList.add('question-result');
            correctResult.innerText = ' Correct!';
            event.target.appendChild(correctResult);
            setScore((prev) => prev + 1);
        } else {
            wrongAnswerSound.play();
            event.target.classList.add('danger');
            let wrongResult = document.createElement('span');
            wrongResult.classList.add('question-result');
            wrongResult.innerText = ' Wrong Answer';
            event.target.appendChild(wrongResult);
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