import { runEngine } from '../index.js'
import _ from 'lodash'

const progression = () => {
  const arr = []
  const start = _.random(0, 15)
  const steps = _.random(5, 10)

  for (let i = 0; i < steps; i += 1) {
    const currentElement = start + i * steps
    arr.push(currentElement)
  }
  return arr
}

const generateRound = () => {
  const prograssion = progression()
  const randomIndex = _.random(prograssion.length - 1)
  const answer = prograssion[randomIndex]

  prograssion[randomIndex] = '..'
  const expresion = prograssion.join(' ')
  const question = `${expresion}`

  return [question, answer]
}

export default () => {
  const rules = 'What number is missing in the progression?'
  runEngine(rules, generateRound)
}
