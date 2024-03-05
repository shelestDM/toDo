const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'My App',
    template: './dist/index.html',
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
        {
            test: /\.m?js$|jsx|css/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: ['babel-loader','style-loader', 'css-loader', 'postcss-loader'],
        },
    ],
  },
}