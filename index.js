const readline = require('readline')
const fs = require('fs')

const rawFile = fs.readFileSync('svc.json')
const parsedSvc = JSON.parse(rawFile)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.setPrompt('Class, CSS, or Identifier > ')

rl.prompt()

function findObjects(obj, key, value, results) {
  function getObject(theObject) {
    let result = null
    if (theObject instanceof Array) {
      for (let i = 0; i < theObject.length; i++) {
        getObject(theObject[i])
      }
    } else {
      for (let prop in theObject) {
        if (theObject.hasOwnProperty(prop)) {
          if (
            prop.toLowerCase() === key.toLowerCase() &&
            key.toLowerCase() === 'classnames'
          ) {
            if (theObject[prop].includes(value.toLowerCase())) {
              results.push(theObject)
            }
            getObject(theObject[prop])
          } else if (prop.toLowerCase() === key.toLowerCase()) {
            if (theObject[prop.toLowerCase()] === value.toLowerCase()) {
              results.push(theObject)
            }
          }
          if (
            theObject[prop] instanceof Object ||
            theObject[prop] instanceof Array
          ) {
            getObject(theObject[prop])
          }
        }
      }
    }
  }
  getObject(obj)
}

rl.on('line', line => {
  let key = line
  const finalResults = []
  if (line.toLocaleLowerCase() === 'class') {
    rl.setPrompt('Enter class name > ')
    rl.prompt()
    rl.on('line', line => {
      const value = line
      const result = findObjects(parsedSvc, key, value, finalResults)
      console.log('Your view: ', JSON.stringify(finalResults, null, 2))
    })
  } else if (line.toLocaleLowerCase() === 'css') {
    key = 'classNames'
    rl.setPrompt('Enter css class name > ')
    rl.prompt()
    rl.on('line', line => {
      const value = line
      const result = findObjects(parsedSvc, key, value, finalResults)
      console.log('Your view: ', JSON.stringify(finalResults, null, 2))
    })
  } else if (line.toLocaleLowerCase() === 'identifier') {
    rl.setPrompt('Enter identifier name > ')
    rl.prompt()
    rl.on('line', line => {
      const value = line
      const result = findObjects(parsedSvc, key, value, finalResults)
      console.log('Your view: ', JSON.stringify(finalResults, null, 2))
    })
  }
})
