module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    camelcase: ['error', { properties: 'always' }],
  },
};
