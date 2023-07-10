'use strict';
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'hexo',
  overrides: [
    {
      files: ['test/**'],
      extends: 'hexo/test'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  }
};
