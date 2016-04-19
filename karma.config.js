const karmaWebpack = require('karma-webpack');
const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      'app/test/**/*.spec.js',
      'app/ui/components/**/*.spec.js'
    ],
    plugins: [karmaWebpack, 'karma-mocha', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'app/test/**/*.spec.js': ['webpack'],
      'app/ui/components/**/*.spec.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      resolve: {
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        preLoaders: [
          {
            test: /(\.jsx)|(\.js)$/,
            exclude: /(tests|node_modules|bower_components)\//,
            loader: 'isparta-instrumenter-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ],
        loaders: [
          {
            test: /\.scss$/,
            loader: 'style!css?sourceMap&modules!postcss!sass?sourceMap'
          },
          {
            test: /\.js$/, exclude: /(bower_components|node_modules)/,
            loader: 'babel'
          }
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
      ]
    },
    webpackMiddleware: {
     noInfo: true,
     stats: 'errors-only'
    }
  });
};
