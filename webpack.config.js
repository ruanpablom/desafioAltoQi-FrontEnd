var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';//true or false
var fileName = isProd ? 'bundle.min.js' : 'bundle.js';

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/',
    filename: fileName
  },
  module:{
    loaders:[
      {
        test: /\.js$/, loader:'babel-loader', exclude: '/node_modules'
      },
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    }),
    new HtmlWebpackPlugin({
      title:'AltoQi Survey',
      template: './index.html'
    })
  ]
};
