const path = require('path');
const webpack = require('webpack');

const library = 'jsCreateElement';

let plugins = [];

plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
  })
);

function createConfig(target) {
    var type = target === 'commonjs2' ? '-npm' : '';
    return {
      entry: path.resolve(__dirname, './src/jsCreateElement.js'),
      output: {
          path: __dirname,
          filename: `build/${library}${type}.min.js`,
          library: library,
          libraryTarget: target
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
      plugins: plugins
    };
}

module.exports = [
  createConfig('var'),
  createConfig('commonjs2')
];
