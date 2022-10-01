const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    port: 3000,
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    })],
};
