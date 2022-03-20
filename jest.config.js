// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  roots: ["<rootDir>"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.js?$",
};

module.exports = config;
