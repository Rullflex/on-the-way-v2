/**
 * @typedef {import('jest').Config} JestConfig
 */

/**
 * @type {JestConfig}
 */
const config = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/**/*.spec.js', '**/?(*.)+(spec|test).js'],
};

export default config;
