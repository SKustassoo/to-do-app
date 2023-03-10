const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, // instead of style-loader
            'css-loader'
          ]
        },
        {
            test: /\.svg$/,
            use: "file-loader",
        },
    ]
  },
  
};