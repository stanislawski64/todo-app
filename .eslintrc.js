module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
}
