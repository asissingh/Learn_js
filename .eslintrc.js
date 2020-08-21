module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 'off',
    camelcase: 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
