const { defaults } = require('jest-config')
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'tsx'],
  transform: {
    '\\.(jpg|jpeg|png|gif|otf|svg|ttf)$': '<rootDir>/fileTransformer.js',
  },
  moduleDirectories: [
    'node_modules',
    'src',
    './src/__mocks__/@testing-library/react',
  ],
  moduleNameMapper: {
    '^@images(.*)$': '<rootDir>/public/images$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@src(.*)$': '<rootDir>/src$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@types(.*)$': '<rootDir>/types$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
}

module.exports = createJestConfig(customJestConfig)
