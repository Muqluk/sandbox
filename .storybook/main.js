// .storybook/main.js
const path = require('path');
const appWebpack = require(path.join(process.cwd(), 'webpack.config.js'));

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      ...[path.resolve(process.cwd(), "src")],
    ];
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...appWebpack().resolve.alias,
    };
    return config;
  },
};
