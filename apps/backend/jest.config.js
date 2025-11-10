const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: path.resolve(__dirname, 'src'),
  testRegex: '^.+\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: path.resolve(__dirname, 'coverage'),
  testEnvironment: 'node',
  setupFiles: [require.resolve('./src/test-setup.ts')],
};
