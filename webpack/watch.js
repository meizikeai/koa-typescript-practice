const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ oraInstance, args }) => {
  const child = shelljs.exec(`
    webpack --mode development --config ./webpack/webpack.config.js --progress --hide-modules ${args}
  `, { async: true })

  child.stdout.on('data', data => {
    if (data.toLowerCase().includes('webpack')) {
      oraInstance.stop()
      oraInstance.clear()
    }
  })

  child.stderr.on('data', () => {
    oraInstance.stop()
    oraInstance.clear()
  })
})
