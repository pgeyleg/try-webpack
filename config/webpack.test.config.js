// TODO: We have to run webpack and then jest every time we change any file.

const path = require('path');
const glob = require('glob');
const Merge        = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');

const testFiles = glob.sync("**/test/*.test.js").
  filter(function(element) {
    return element != "test/bundle.test.js";
  }).map(function(element) {
    return "./" + element;
  });

module.exports = Merge(CommonConfig, {
  entry: testFiles,
  output: {
    path: path.resolve(__dirname, "../test"),
    filename: "bundle.test.js"
  },
  devtool: "inline-source-map",
  mode: "none"
});
