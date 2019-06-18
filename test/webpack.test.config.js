// TODO: We have to run webpack and then jest every time we change any file.

const path = require('path');

const glob = require('glob');

const testFiles = glob.sync("**/*.test.js").
  filter(function(element) {
    return element != "test/bundle.test.js";
  }).map(function(element) {
    return "./" + element;
  });

module.exports = {
  entry: testFiles,
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.test.js"
  },
  mode: "none"
};
