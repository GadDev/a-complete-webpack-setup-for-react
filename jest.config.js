/* eslint-disable no-undef */
module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
	setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],

	testPathIgnorePatterns: ['/node_modules/', '/build/'],
	// The test environment that will be used for testing
	testEnvironment: 'jsdom',
};
