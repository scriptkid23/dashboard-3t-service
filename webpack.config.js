const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   context: __dirname,
   entry: __dirname + '/src/index.js',
   output: {
      path: path.resolve(__dirname, '/dist'),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devServer: {
      inline: true,
      historyApiFallback: true,
      port: 8001
   },
   resolve: {
    extensions: ['.js', '.jsx', '.css','.svg']
    },
    module: {
        rules: [
           {
              test: /\.js$/,
              use: 'babel-loader',
           },
           {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
           },
           {
              test: /\.(png|jpg|svg|gif|jpeg|ico)?$/,
              use: 'file-loader'
           }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: path.resolve( __dirname, 'public/index.html' ),
           filename: 'index.html'
        })
     ]
}