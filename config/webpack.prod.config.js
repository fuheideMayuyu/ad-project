const path = require("path")
const webpack = require("webpack")
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConfig = require('./webpack.base.config')

const PORT = 8080
const webpackProdConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Reasct APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
  ],
  devtool: "eval-source-map",
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)