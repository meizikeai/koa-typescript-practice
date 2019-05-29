const ora = require('ora')
const inquirer = require('inquirer')

const questions = [
  {
    name: 'project',
    message: 'Please enter the project name:',
    validate: str => Boolean(str.length),
  },
]

module.exports = () => new Promise(resolve => {
  const args = []

  inquirer.prompt(questions).then(answers => {
    args.push(`--env.p=${answers.project}`)

    const oraInstance = ora({
      color: 'yellow',
      text: 'Please waiting for the webpack start → ',
    }).start()

    resolve({
      oraInstance,
      args: args.join(' '),
    })
  })
})
