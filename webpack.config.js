const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const DEFAULT_PORT = process.env.PORT || 3000;
const PATHS = {
  ui: path.join(__dirname, 'app/ui'),
  public: path.join(__dirname, 'app/public')
};

const common = {
  entry: PATHS.ui,
  output: {
    path: PATHS.public,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({ browsers: ['last 2 versions'] })
                ];
              }
            }
          },
          'sass-loader?sourceMap'
        ],
        include: PATHS.ui
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.ui
      }
    ]
  }
};

module.exports = Object.assign(common, {
  start: {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT || DEFAULT_PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' }})
    ]
  },
  build: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel?cacheDirectory'],
          include: PATHS.ui
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style!css?modules!postcss!sass', 'css?modules!postcss!sass'),
          include: PATHS.ui
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' }}),
      new ExtractTextPlugin('css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]', { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}[TARGET]);
