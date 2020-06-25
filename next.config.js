const webpack = require('webpack');
const path = require('path');

module.exports = {
  webpack(config, { dev, isServer }) {
    config.resolve.alias['fs'] = 'graceful-fs';
    config.resolve.alias['sodium-native'] = path.resolve(
      __dirname,
      './node_modules/@geut/sodium-javascript-plus'
    );
    config.resolve.alias['sodium-universal'] = path.resolve(
      __dirname,
      './node_modules/@geut/sodium-javascript-plus'
    );
    config.resolve.alias['hyperswarm'] = path.resolve(__dirname, './node_modules/hyperswarm-web');
    config.resolve.alias['util'] = path.resolve(__dirname, './node_modules/util/util.js');

    config.resolve.alias['@geut/discovery-swarm-webrtc'] = path.resolve(
      __dirname,
      './vendor/discovery-swarm-webrtc'
    );

    return config;
  },
};
