module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    '@scriptable-ios'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
