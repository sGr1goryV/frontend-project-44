import _ from 'lodash'
import { runEngine } from '../index.js'

const isEven = n => n % 2 === 0

const generateRound = () => {
  const number = _.random(0, 50)
  const answer = isEven(number) ? 'yes' : 'no'
  const question = String(number)

  return [question, answer]
}

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  runEngine(rules, generateRound)
}
