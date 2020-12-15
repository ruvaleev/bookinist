const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssCustomMedia = require('postcss-custom-media');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');


module.exports = {
  mode: 'production',
  entry: {
    bundle: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'dist/assets')
  },
  resolve: {
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' },
      { test: /\.css$/i, 
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      base: '/'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new WebpackManifestPlugin()
  ]
};
