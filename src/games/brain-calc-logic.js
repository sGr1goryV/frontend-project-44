import _ from 'lodash'
import { runEngine } from '../index.js'

const generateRound = () => {
  const num1 = _.random(0, 50)
  const num2 = _.random(0, 50)

  let expressions = {
    '+': (num1 + num2),
    '-': (num1 - num2),
    '*': (num1 * num2),
  }

  const entries = Object.entries(expressions)
  const randomIndex = _.random(0, 2)
  const sing = entries[randomIndex][0]

  const question = `${num1} ${sing} ${num2}`
  const answer = entries[randomIndex][1]

  return [question, answer]
}

export default () => {
  const rules = 'What is the result of the expression?'
  runEngine(rules, generateRound)
}
