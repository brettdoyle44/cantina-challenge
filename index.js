const readline = require('readline')
const fs = require('fs')

const { askQuestions } = require('./questions')

const rawFile = fs.readFileSync('svc.json')
const parsedSvc = JSON.parse(rawFile)

askQuestions(['Class: ', 'CSS Class name: ', 'Identifier: ']).then(answers => {
  console.log(answers)
})

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question('Class: ', answer => {
//   const coreClassName = answer
//   console.log(coreClassName)
//   rl.question('CSS class name: ', answer => {
//     const cssClassName = answer
//     console.log(cssClassName)
//   })
//   rl.close()
// })

// rl.question('CSS class name: ', answer => {
//   const cssClassName = answer
//   console.log(cssClassName)
//   rl.close()
// })
