module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-unused-vars": "off"
  },
};
