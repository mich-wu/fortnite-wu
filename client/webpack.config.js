// const path = require('path')

// module.exports = {
//   entry: path.join(__dirname, 'index.js'),
//   output: {
//     path: path.join(__dirname, '../server/public'),
//     filename: 'bundle.js',
//   },
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.(j|t)sx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   },
//   devtool: 'source-map',
//   devServer: {
//     contentBase: path.join(__dirname, '../server/public'),
//   },
// }

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../server/public/', 'index.html'),
    }),
  ],
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  // stats: {
  //   children: true,
  // },
}
