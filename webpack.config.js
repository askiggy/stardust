module.exports = {
  output: {
    filename: 'iggy-stardust.js'
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }]
  }
};
