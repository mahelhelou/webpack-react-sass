import React from 'react'
import generateNumber from './GenerateNumber'

function generateProblem() {
  return {
    numberOne: generateNumber(10),
    numberTwo: generateNumber(10),
    operator: ['+', '-', 'x'][generateNumber(2)],
  }
}

export default generateProblem
