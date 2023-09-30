const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

// exclusionList is a function that takes an array of regexes and combines
// them with the default exclusions to return a single regex.

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
    },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
