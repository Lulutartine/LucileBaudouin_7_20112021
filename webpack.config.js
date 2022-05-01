/* eslint-disable comma-dangle */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: { index: './javascript/scripts-main.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }
};
