module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!scr/**/*.test.{js,jsx}',
        '!src/*/RbGenerated*/*.{js,jsx}',
        '!src/app.js',
        '!src/global-styles.js',
        '!src/*/*/Loadable.{js,jsx}'
    ],
    coverageThreshold: {
        global: {
            statements: 98,
            branches: 91,
            functions: 98,
            lines: 98
        }
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$':
            '<rootDir>/test/__mocks__/fileMock.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/__mocks__/image.js'
    },
    // setupFilesAfterEnv: [
    //     '<rootDir>/internals/testing/test-bundler.js',
    //     'react-testing-library/cleanup-after-each'
    // ],
    // setupFiles: ['raf/polyfill'],
    // testRegex: 'tests/.*\\.test\\.js$',
    snapshotSerializers: []
};
