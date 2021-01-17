'use strict';

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { GenerateSW } = require('workbox-webpack-plugin');

/* ############## PLUGINS ############## */
let plugins = [
  new Dotenv({ path: path.resolve(__dirname, '.env.production') }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new ImageminWebpWebpackPlugin(),
  new GenerateSW({
    exclude: [/\.map$/, /asset-manifest\.json$/],
    navigateFallback: path.resolve(__dirname, 'build/index.html'),
    navigateFallbackDenylist: [
      // Exclude URLs starting with /_, as they're likely an API Call
      new RegExp('^/_'),
      // Exclude any URL whose last part seems to be a file extension
      // as they're likely resource and not a SPA route.
      // URLs containing a "?" character won't be denied as they're likely
      // a route with query params (e.g.: OAuth callbacks)
      new RegExp('/[^/?]+\\.[^/]+$'),
    ],
  }),
];

/*############## OPTIONS ##############*/
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: plugins,
});
