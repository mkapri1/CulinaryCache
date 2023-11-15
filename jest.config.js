module.exports = {
    // The root directory that Jest should scan for tests and modules
    roots: ["<rootDir>/src"],
  
    // The test environment that will be used for testing
    testEnvironment: "node",
  
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  
    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  
    // A list of paths to directories that Jest should use to search for files in
    roots: ["<rootDir>/src", "<rootDir>/tests"],
  
    // The glob patterns Jest uses to detect test files
    testMatch: ["**/__tests__/**/*.test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  
    // Transform files with ts-jest
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
    },
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  };
  