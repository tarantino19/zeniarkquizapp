import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Context/Context'
import '../styles/main.scss'

export default function HomePage() {

  const {gameState, setGameState} = useContext (QuizContext)

  return (
    <div className="page page-home">
      <div className="card">
      <div className="page-title">
        <h1>Welcome to the Random Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 10/10?</p>
      </div>
      <div className="page-control">
        <button className='button home-button' onClick={() => setGameState ("quiz")}>
          And Now It Begins...
        </button>
      </div>
      </div>
    </div>
  )
  
}

