export default {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        semi: ["error", "always"],
        qoutes: ["error", "single"],
        indent: ["error", 4],
        "comma-spacing": ["error", {before: false, after: true }],
    },
};
