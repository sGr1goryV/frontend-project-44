import { runEngine } from '../index.js'
import _ from 'lodash'

const prime = (n) => {
  if (n < 2) {
    return 'no'
  }
  else if (n === 2) {
    return 'yes'
  }
  else if (n % 2 === 0) {
    return 'no'
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

const generateRound = () => {
  const number = _.random(0, 25)

  const question = number
  const answer = prime(number)

  return [question, answer]
}

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runEngine(rules, generateRound)
}
