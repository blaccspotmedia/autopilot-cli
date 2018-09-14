const ora = require('ora')
const tag = require('../lib/tag');

module.exports = async (args) => {

  if (!args.hasOwnProperty('assistant')) {
    console.log(`The '--assistant' argument is required`)
    return
  }

  const spinner = ora().start()

  try {

    const sid = args.assistant

    //do work here

    spinner.stop()

    //return here
    console.log(`Export is not implemented yet.`)


  } catch (err) {
    spinner.stop()
    
    console.error(err)
  }
}