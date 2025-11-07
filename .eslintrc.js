module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'html', 'stylelint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:html/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.css'],
      plugins: ['stylelint'],
      processor: 'stylelint/stylelint',
      rules: {},
    },
    {
      files: ['*.html'],
      plugins: ['html'],
      extends: ['plugin:html/recommended'],
      rules: {},
    },
  ],
};
