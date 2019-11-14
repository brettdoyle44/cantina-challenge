const readline = require('readline')
const fs = require('fs')

// const { askQuestions } = require('./questions')

const rawFile = fs.readFileSync('svc.json')
const parsedSvc = JSON.parse(rawFile)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.setPrompt('Class, CSS, or Identifier > ')

rl.prompt()

rl.on('line', line => {
  const lineOne = line
  if (line.toLocaleLowerCase() === 'class') {
    rl.setPrompt('Enter class name > ')
    rl.prompt()
    rl.on('line', line => {
      const lineTwo = line
      classSearch(lineOne, lineTwo)
    })
  } else if (line.toLocaleLowerCase() === 'css') {
    rl.setPrompt('Enter class name > ')
    rl.prompt()
    rl.on('line', line => {
      const lineTwo = line
      classSearch(lineOne, lineTwo)
    })
  } else if (line.toLocaleLowerCase() === 'identifier') {
    rl.setPrompt('Enter class name > ')
    rl.prompt()
    rl.on('line', line => {
      const lineTwo = line
      classSearch(lineOne, lineTwo)
    })
  }
})
