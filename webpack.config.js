const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
      template: './src/index.html', // Path to your src/index.html
    }),
  ],
  module: {
    rules: [ 
      { //https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        
      },
    ],
  },
};
