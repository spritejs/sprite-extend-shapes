const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const path = require('path');
const fs = require('fs');

// let babelConf;
// if (fs.existsSync('./.babelrc')) {
//   // use babel
//   babelConf = JSON.parse(fs.readFileSync('.babelrc'));
// }

module.exports = function(env = {}) {
  let babelConf;
  const babelRC = env.esnext ? './.es6.babelrc' : './.babelrc';

  const alias = {};

  if (fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC));
    babelConf.babelrc = false;
  }

  const externals = {};
  let filename = 'sprite-extend-shapes.standalone.js';
  if (!env.standalone) {
    externals['sprite-core'] = 'spritejs';
    filename = env.esnext
      ? 'sprite-extend-shapes.esm.js'
      : 'sprite-extend-shapes.js';
  }

  if(env.nobrowser) {
    alias['svg-path-to-canvas'] = 'svg-path-to-canvas/dist/svg-path-to-canvas.nobrowser';
    filename = 'sprite-extend-shapes.nobrowser.js'
    env.production = true;
  }

  const output = {
    path: path.resolve(__dirname, 'dist'),
    filename,
    publicPath: '/js/',
    library: 'spriteShapes',
    libraryTarget: env.esnext ? 'var' : 'umd',
  }

  const plugins = [];
  if(!env.esnext) output.libraryExport = 'default';
  else {
    plugins.push(new EsmWebpackPlugin());
  }

  return {
    mode: env.production ? 'production' : 'none',
    entry: './src/index',
    output,

    resolve: {
      alias,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: babelConf
          }
        }
      ]

      /* Advanced module configuration (click to show) */
    },

    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, 'example'),
      compress: true,
      port: 9090
      // ...
    },

    plugins,
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
