const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
        { test: /\.txt$/, use: 'raw-loader' },
        { test: /\.css$/, exclude:/style\.css$/, use:[ 'style-loader', 'css-loader'  ]},
        { test: /style\.css$/, use:[ MiniCssExtractPlugin.loader, 'css-loader'  ]},
        {test:/\.(png|svg|jpg|gif)$/, use:[{loader:'file-loader'}]}
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({filename:'[name].css', ignoreOrder:false}),
    new CopyPlugin({
        patterns:[
            {
             from:'src/assets',
             to:'assets/'
            }
        ]
    })
],
};