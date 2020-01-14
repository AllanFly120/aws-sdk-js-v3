const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: ["<rootDir>/packages/*/jest.config.js"],
  testPathIgnorePatterns: [
    "<rootDir>/packages/add-glacier-checksum-headers-browser",
    "<rootDir>/packages/stream-collector-browser",
    "<rootDir>/clients/client-.*"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/packages/add-glacier-checksum-headers-browser",
    "<rootDir>/packages/stream-collector-browser",
    "<rootDir>/clients/client-.*",
    "/__fixtures__/"
  ]
};
