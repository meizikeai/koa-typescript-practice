module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
}
