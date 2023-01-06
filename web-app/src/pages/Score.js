import React from 'react';
import { useState, useContext } from 'react';
import { QuizContext } from '../Context/Context';
import { Questions } from '../mock-data/questions';
import styled from 'styled-components/'

const Score = () => {
  let {score, setScore, setGameState} = useContext(QuizContext)

  const restartQuiz = () => {
      setScore (0);
      setGameState ('home')
  }

  return (
    <div className='scores text-center container'>
    <div className='card pt-2'>
      <h2 className='pb-4'>Final Results</h2>
      <h1>{score}/{Questions.length} Is Your Score</h1>

      {Questions.map ((questions) => {
        const {correct_answer, question, incorrect_answers } = questions
        return (<>
            <h6>{question}</h6>
            <p>The correct answer is {correct_answer}</p>
            <br />
          </>)
      }
        )}

      <div onClick={restartQuiz}
        className='text-center'
        style={{color: "blue", paddingBottom: "20px", textDecoration: "underline", fontWeight: "500", fontSize: "1.5rem"}}
        >
        PLAY AGAIN
        </div>

    </div>
    </div>
  );
}

export default Score;
