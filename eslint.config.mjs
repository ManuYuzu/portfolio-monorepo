export default [
  {
    files: ['apps/frontend/**/*.{ts,tsx}'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin'))
        .default,
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['apps/frontend/**/*.{js,jsx}'],
    languageOptions: {
      parser: (await import('espree')).default,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-console': 'warn',
    },
  },
  {
    files: ['apps/backend/**/*.{ts,js}'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin'))
        .default,
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'off',
    },
  },
  {
    ignores: ['**/*.css', '**/dist/**', '**/build/**', '**/node_modules/**'],
  },
];
