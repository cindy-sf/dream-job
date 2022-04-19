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
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
}

module.exports = createJestConfig(customJestConfig)
