const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  watch: true,
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules:[{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
};