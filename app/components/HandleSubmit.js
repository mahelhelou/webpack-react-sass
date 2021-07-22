import React from 'react'
import generateNumber from './GenerateNumber'
import generateProblem from './GenerateProblem'

function handleSubmit(e) {
  e.preventDefault()

  answerField.current.focus()

  let correctAnswer
  if (currentProblem.operator == '+') correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
  if (currentProblem.operator == '-') correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
  if (currentProblem.operator == 'x') correctAnswer = currentProblem.numberOne * currentProblem.numberTwo

  if (correctAnswer == parseInt(userAnswer, 10)) {
    setScore((prev) => prev + 1)
    setCurrentProblem(generateProblem())
    setUserAnswer('')
  } else {
    setMistakes((prev) => prev + 1)
    setShowError(true)
    setTimeout(() => setShowError(false), 401)
  }
}

export default handleSubmit
