module.exports = {
  env: {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    es6: true,
    node: true
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmacVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 4, { SwitchCase: 1 }]
  }
}
