var package = require('./package.json');

module.exports = {
  entry: "./src/scripts/app.js",//path relative to this file
  output: {
      filename: "./dist/app.bundle.js"//path relative to this file
  },
    
    resolve: { extensions: [".js", ".ts"] },
    watch: true
}
    