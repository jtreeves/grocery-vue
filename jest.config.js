module.exports = {
    verbose: true,
    collectCoverage: true,
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
    setupFilesAfterEnv: ['<rootDir>/tests/index.ts']
}
