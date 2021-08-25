// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\.(txt)$/, use: 'raw-loader' },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
      // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // {
      //   test: /\.css$/i,
      //   exclude: /node_modules/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
