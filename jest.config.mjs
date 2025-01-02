export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
  };
  