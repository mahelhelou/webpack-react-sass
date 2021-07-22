const currentTask = process.env.npm_lifecycle_event // (package.json: prod or build)
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

const config = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'doc'),
  },
  devtool: 'eval-cheap-source-map',
  plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3, targets: 'defaults' }], '@babel/preset-react'],
          },
        },
      },
    ],
  },
}

if (currentTask == 'build') {
  config.mode = 'production'
  // Replace style-loader with MiniCssExtractPlugin loader
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(new MiniCssExtractPlugin({ filename: 'main.[hash].css' }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config
