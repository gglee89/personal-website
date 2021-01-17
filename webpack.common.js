const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

/* ############## PLUGINS ############## */
let plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Genealogy Care',
    template: './src/views/index.html',
    filename: 'index.html',
  }),
  new CopyPlugin({
    patterns: [{ from: path.join(__dirname, './src/assets/favicon'), to: '' }],
  }),
];

/*############## LOADERS ##############*/
let loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.(png|jpe?g|gif|svg|webp)$/i,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[name].[ext]',
    },
  },
  {
    test: /\.(woff(2)|ttf|eot|pdf|mp4)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
  {
    test: /\.s?css$/,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
];

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: loaders,
  },
  plugins: plugins,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
