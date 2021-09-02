module.exports = {
  extends: ["airbnb", "prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["prettier"],
  ignorePatterns: ["dist/", "node_modules/"],
  env: {
    browser: "true",
  },
  rules: {
    quotes: ["error", "double"],
    "import/extensions": "off",
    "react/static-property-placement": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": "off",
    camelcase: "off",
    "no-use-before-define": "off",
    semi: ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        semi: false,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "no-console": "error",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
  },
}
