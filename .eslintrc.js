module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
  },
};
