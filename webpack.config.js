var path = require('path');

module.exports = {
    mode: 'development', // tells webpack that this is a development build. the 'production' switch will minify the code among other things
    devtool: 'cheap-eval-source-map', // generate source maps for better debugging and dont take much time.
    context: __dirname, // since this runs in a node environment, webpack will need the current directory name
    entry: './build/app.js', // take this file and add to the bundled file whatever this file imports
    output: {
        path: path.join(__dirname, 'dist'), // output this in a dist folder
        filename: 'bundle.js' // and name it bundle.js
    },
  // read medium post to know what's module and devServer because I dont have much room for comments
    module: {
      rules: [{
        enforce: 'pre',
        loader: 'eslint-loader',
        test: /\.js$/
      }, {
        loader: 'babel-loader',
        test: /\.js$/
      }]
    },
    devServer: {
        publicPath: '/dist/',
        filename: 'bundle.js',
        historyApiFallback: true,
        overlay: true
    }
};
