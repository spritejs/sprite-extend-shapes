const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.conf.common');

module.exports = merge(common, {
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    compress: true,
    hot: false,
    inline: true,
    quiet: true,
    open: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1
    }
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/])
  ]
});
