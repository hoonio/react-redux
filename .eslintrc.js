module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": ["react"],
  "rules": {
    "indent": [2, 2],
    "linebreak-style": [
      "warn", "unix",
    ],
    "quotes": [
      "warn", "single",
    ],
    "quote-props": ["error", "consistent-as-needed"],
    "semi": ["error", "always", {
      "omitLastInOneLineBlock": true,
    }],
    "max-len": ["warn", {
      "code": 100,
      "ignoreUrls": true,
      "ignoreTrailingComments": true,
      "ignoreComments": true,
    }],
    "no-shadow": ["error", {
      "allow": ["err", "dispatch"],
    }],
    "no-unused-vars": ["error", {
      "args": "after-used",
      "varsIgnorePattern": "dispatch",
    }],
    "prefer-template": "warn",
  },
};
