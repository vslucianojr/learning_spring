module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'import/errors',
    'import/typescript',
    'import/warnings',
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "quotes": [2, "single", {"avoidEscape": true}],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { "allowTaggedTemplates": true }]
  },
};
