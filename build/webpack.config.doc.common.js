const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../example/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: [
    {
      'sprite-vue': 'spritevue',
      spritejs: 'spritevue.spritejs',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/server': 'ReactDOMServer',
      // codemirror: 'CodeMirror'
    }
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
