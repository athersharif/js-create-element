const path = require('path');
const webpack = require('webpack');
const config = require('./package.json');

const library = 'jsCreateElement';

let plugins = [];

plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
  })
);

module.exports = {
  entry: path.resolve(__dirname, config.main),
  output: {
    library: library,
    path: __dirname,
    filename: `build/${library}.min.js`,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: plugins,
};
