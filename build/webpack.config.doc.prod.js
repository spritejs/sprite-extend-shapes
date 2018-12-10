const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.doc.common');

module.exports = merge(common, {
  mode: 'production',
  entry: path.resolve(__dirname, '../doc/'),
  output: {
    path: path.join(__dirname, '../website'),
    filename: 'bundle.js',
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});
