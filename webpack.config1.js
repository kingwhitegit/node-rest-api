const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    client: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
// module.exports = {
//   entry: {
//     client: './src/client.js',
//     bundle: './src/bundle.js'
//   },
//   output: {
//     path: path.resolve(__dirname, 'assets'),
//     filename: "[name].js"
//   },
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//     ]
//  }
// }