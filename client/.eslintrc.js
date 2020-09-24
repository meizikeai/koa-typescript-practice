const path = require('path')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: [
    'blued-react',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
      alias: {
        map: [
          ['@components', path.resolve(__dirname, './components')],
          ['@utils', path.resolve(__dirname, './utils')],
        ],
      },
    },
  },
}