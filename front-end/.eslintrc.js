module.exports = {
  plugins: ['react-hooks'],
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-plusplus': 0,
    'react/display-name': 0,
    'no-shadow': 0,
    'prettier/prettier': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-onchange': 0,
    'no-restricted-globals': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
