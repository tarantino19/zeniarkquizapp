import React from 'react'
import { useState, useContext } from 'react'
import Home from './pages/Home'
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import { QuizContext } from './Context/Context';
import './styles/main.scss'

function App() {

  const [gameState, setGameState] = useState ('home')
  const [score, setScore] = useState (0)

  return (<>
      <div className="App">
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState === "home" && <Home />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "score" && <Score />}
    </QuizContext.Provider>
      </div>
    
    </>
  )
}

export default App
