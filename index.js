const readline = require('readline')
const fs = require('fs')

const rawFile = fs.readFileSync('svc.json')
const parsedSvc = JSON.parse(rawFile)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What do you think of Node.js? ', answer => {
  console.log(`Thank you for your valuable feedback: ${answer}`)
  rl.close()
})
