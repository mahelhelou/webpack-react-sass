import React from 'react'

function resetGame() {
  setScore(0)
  setMistakes(0)
  setUserAnswer('')
  setCurrentProblem(generateProblem())
  answerField.current.focus()
}

export default resetGame
