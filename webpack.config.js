const webpack = require('webpack');

const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
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
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap&modules!postcss!sass?sourceMap',
        include: PATHS.ui
      },
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.ui
      }
    ]
  }
};

module.exports = merge(common, {
  start: {
    devtool: 'eval-source-map'
  },
  build: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
}[TARGET]);
