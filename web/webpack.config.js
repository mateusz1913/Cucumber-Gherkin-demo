const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');
const {presets} = require(`${appDirectory}/babel.config.js`);

const config = {
  entry: {
    // Entries that need to be included, e.g. some polyfills and main entry;
    app: path.join(appDirectory, 'index.web.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {},
      },
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude:
          /node_modules[/\\](?!react-native-vector-icons|react-native-reanimated|react-native-gesture-handler)/, // <- here add excluded modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              // Here add all babel plugins;
              'react-native-web',
            ],
            presets,
          },
        },
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {name: '[name].[ext]'},
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': require.resolve('react-native-web'),
    },
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
  },
  ignoreWarnings: [/Should not import the named export/],
};

module.exports = config;
