module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'),
      globals: {
        // Node globals
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        // ES2021
        Promise: 'readonly',
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        expect: 'readonly',
        test: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'css-modules': require('eslint-plugin-css-modules'),
      html: require('eslint-plugin-html'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      // Reglas recomendadas básicas
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-console': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'prettier/prettier': 'error',
      // Puedes agregar reglas personalizadas aquí
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: require('espree'),
    },
    rules: {},
  },
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: null, // No parser para CSS, solo plugin
    },
    plugins: {
      'css-modules': require('eslint-plugin-css-modules'),
    },
    rules: {},
    ignores: ['**/*.css'], // Ignorar errores de parsing en CSS
  },
  {
    files: ['**/*.html'],
    plugins: {
      html: require('eslint-plugin-html'),
    },
    rules: {},
  },
];
