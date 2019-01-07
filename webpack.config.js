const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/demo/index.jsx'),

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: "babel-loader",
              exclude: /(node_modules)/
          },
          {
              test: /\.(css|scss)$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo/index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8000,
        disableHostCheck: true
    }
}