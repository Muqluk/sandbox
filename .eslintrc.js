const path = require('path');

module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: [
          'node_modules',
          'src',
          '.storybook',
        ],
      },
      webpack: {
        config: 'webpack.config.js',
      },
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      }
    },
  },
  globals: {
    React: true,
    ReactDOM: true,
    PropTypes: true,
    Webpack: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'no-iife',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* eslint-specific */
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/webpack.config.js',
          '**/.storybook/**',
          '**/stories/**',
          '**/*.stories.*',
        ]
      }
    ],
    'no-iife/no-iife': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-shadow': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'spaced-comment': 0,
    /* typescript specific */
    '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/import/extensions': 0,
    /* react specific */
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx', '.svg', '.mdx']
    }],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/state-in-constructor': ['error', 'never'],
    'react/no-unused-state': 1,
  },
  overrides: [
    {
      files: ['**/*.stories.tsx', '**/stories/*'],
      excludedFiles: '**/.stories.*',
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/no-unescaped-entities': 0,
      },
    },
  ],
};
