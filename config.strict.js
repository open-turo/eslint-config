module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint:recommended",
    "prettier",
    "plugin:sonarjs/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "plugin:node/recommended",
  ],
  plugins: [
    "import",
    "json",
    "import",
    "jest",
    "prettier",
    "simple-import-sort",
    "sonarjs",
    "sort-destructure-keys",
    "unicorn",
    "node",
  ],
};
