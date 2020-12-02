module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prefer-default-export': 'off',
    'import/prefer-default-export': 'warn',
    'no-plusplus': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': 'warn',
  },
};
