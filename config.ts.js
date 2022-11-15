module.exports = {
  extends: ["eslint-config-airbnb-base", "eslint:recommended", "prettier"],
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
  rules: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        modules: true,
      },
    },
    rules: {
      "import/default": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/no-default-export": "error",
      "import/prefer-default-export": "off",
      "prettier/prettier": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "sort-destructure-keys/sort-destructure-keys": "error",
    },
  },
};
