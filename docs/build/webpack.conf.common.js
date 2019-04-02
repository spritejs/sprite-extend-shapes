const os = require('os');
const path = require('path');
const Happypack = require('happypack');
const threadPoll = Happypack.ThreadPool({size: os.cpus().length});
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {VueLoaderPlugin} = require('vue-loader');
const VueMdLoader = require('./vue-md-loader');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, '../src/'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=babel',
        include: [path.resolve(__dirname, '../src/')],
        exclude: [/node_modules/]
      },

      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'happypack/loader?id=babel'
              }
            }
          }
        ],
        exclude: /node_modules/
      },

      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'happypack/loader?id=babel'
              }
            }
          },
          VueMdLoader
        ],
        exclude: /node_modules/
      },

      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/img/[name].[ext]?[hash]'
        }
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/fonts/[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  externals: {
    spritejs: 'spritejs',
    // 'sprite-extend-shapes': 'spriteShapes',
    vue: 'Vue',
    'vue-router': 'VueRouter'
  },
  plugins: [
    new VueLoaderPlugin(),
    new Happypack({
      id: 'babel',
      loaders: [
        {
          loader: 'babel-loader'
        }
      ],
      threadPool: threadPoll,
      verbose: false
    }),
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html'
    })
  ]
};
