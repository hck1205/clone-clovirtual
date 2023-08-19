/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, module: 'node' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    noImplicitThis: false,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],

    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
  },
};
