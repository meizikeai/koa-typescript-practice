const shelljs = require('shelljs')
const prompt = require('./prompt')

prompt().then(({ oraInstance, args }) => {
  console.log(args)
  const child = shelljs.exec(`
    webpack --mode production --config ./client/webpack/webpack.config.js --progress --hide-modules ${args}
  `, { async: true })

  child.stderr.on('data', data => {
    if (data.toLowerCase().includes('compiling')) {
      oraInstance.stop()
      oraInstance.clear()
    }
  })
})
