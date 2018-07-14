/* eslint-disable */
/**
 * This file is here to provide intellij with resolving capability and nothing more
 */
const resolve = require('path').resolve;

module.exports = {
    resolve: {
        alias: {
            '~': __dirname,
            static: resolve(__dirname, 'static'), // use in template with <img src="~static/nuxt.png" />
            plugins: resolve(__dirname, 'plugins'),
            '~plugins': resolve(__dirname, 'plugins'),
            '~static': resolve(__dirname, 'static'),
            assets: resolve(__dirname, 'assets'), // use in template with <img src="~static/nuxt.png" />
            '~assets': resolve(__dirname, 'assets'),
        },
    },
};
