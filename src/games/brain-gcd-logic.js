import _ from 'lodash'
import { runEngine } from '../index.js'

const generateRound = () => {
  const num1 = _.random(0, 50)
  const num2 = _.random(0, 50)

  let a = num1
  let b = num2
  while (b !== 0) {
    const temp = a
    a = b
    b = temp % b
  }

  const question = `${num1} ${num2}`
  const answer = a

  return [question, answer]
}

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.'
  runEngine(rules, generateRound)
}
