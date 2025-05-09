module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // Use jsdom test environment for browser-like tests
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'  // Mock CSS imports to avoid errors in tests
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'  // Transform .ts/.tsx files using ts-jest
  },
  setupFilesAfterEnv: ['/workspaces/blog/my-app/src/setupTest.ts'],  // Adjust path to the correct file
};
