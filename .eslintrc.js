module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
  ],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    quotes: [2, 'single'],
  }
};
