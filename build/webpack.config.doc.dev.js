const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.doc.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../example/')
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../example'),
    compress: true,
    port: 8089
  }
});
