/* eslint-disable no-param-reassign */

module.exports = {
  webpack(config) {
    if (config.resolve.alias) {
      /* eslint-disable no-param-reassign */
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
      /* eslint-enable no-param-reassign */
    }

    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    };

    return config;
  },
};
