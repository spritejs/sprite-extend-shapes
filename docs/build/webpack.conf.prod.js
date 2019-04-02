const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.conf.common');

module.exports = merge(common, {
  output: {
    path: path.join(__dirname, '../website'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash:7].js'
  }
});
