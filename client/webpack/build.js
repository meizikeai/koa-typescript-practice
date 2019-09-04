const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ oraInstance, args }) => {
  const child = shelljs.exec(`
    webpack --mode production --config ./client/webpack/webpack.config.js --progress --hide-modules ${args}
  `, { async: true })

  child.stdout.on('data', () => {
    oraInstance.stop()
    oraInstance.clear()
  })

  child.stderr.on('data', () => {
    oraInstance.stop()
    oraInstance.clear()
  })
})
