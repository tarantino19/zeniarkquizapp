import React from 'react';
import { useState, useContext } from 'react';
import { QuizContext } from '../Context/Context';
import { Questions } from '../mock-data/questions';


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState (0)
  const [optionChosen, setOptionChosen] = useState ("")

  let {score, setScore, gameState, setGameState} = useContext(QuizContext)

  const nextQuestion = () => {
    if (Questions[currentQuestion].correct_answer === optionChosen) {
      setScore (score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  const finishQuiz = () => {
    if (optionChosen === Questions[currentQuestion].correct_answer) {
      setScore (score+ 1)
    }
    setGameState ("score")
  }
  
  return (
    <div className='w-100'> 
      <div className='w-50 card container mt-5 mb-5 pt-5 pb-5 text-center'>
        <h2>Category: {Questions[currentQuestion].category}</h2>
        <h1>{Questions[currentQuestion].question}</h1>
        <div className='options'>
          <button className='true-button btn btn-success me-3 mt-2' 
          onClick={() => {setOptionChosen('True')}}
          >✔️ TRUE</button>
          <button className='false-button btn btn-danger ms-3 mt-2'
          onClick={() => {setOptionChosen('False')}}
          >X FALSE</button>
        </div>
        {currentQuestion === Questions.length - 1 ? (
          <button className='btn pt-5' onClick={finishQuiz}>Finish Quiz</button>) : (
          <button className='btn pt-5' onClick={nextQuestion}>Next Question</button>
          )
        }
        </div>
    </div>
  );
}

export default Quiz;
