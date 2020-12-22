const path = require('path');
const { name } = require('../package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config, { configType }) => {
        if (configType === 'PRODUCTION') {
            config.plugins[1].options = {
                ...config.plugins[1].options,
                template: path.resolve(__dirname, 'index.override.ejs')
            };

            config.plugins.push(
                new CopyWebpackPlugin({
                    patterns: [{ from: 'dist/' + name }]
                })
            );
        }

        return config;
    }
};
