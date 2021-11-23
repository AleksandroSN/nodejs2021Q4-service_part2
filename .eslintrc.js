module.exports = {
  extends: ["plugin:prettier/recommended", "airbnb-base"],
  plugins: ["jest"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": "off",
    "arrow-body-style": "off",
    "operator-linebreak": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
  },
};