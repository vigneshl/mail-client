const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

const outputDir = path.resolve(__dirname, "build");

const entries = [
    './app/index.jsx'
]

module.exports = {
    mode: 'development',
    entry: entries,
    output: {
        path: path.resolve(outputDir, 'assets'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/assets/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './app/views/index.html',
            filename: '../index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: outputDir,
        hot: true
    }
};
