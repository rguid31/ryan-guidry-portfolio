// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Removed this line
  moduleNameMapper: {
    // Handle CSS imports (if any in components, though not expected for these)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
};
