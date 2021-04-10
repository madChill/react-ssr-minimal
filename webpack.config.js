const path = require('path');
const fs = require('fs');
const hash = Math.random().toString();
const webpack = require('webpack');
const bundleJsFile = require('./bin/plugin/bundleJsFile.js');

module.exports = {
    mode: 'development',
    entry: {
        client: './src/client.js',
        server: './src/server.js'
    },
    output: {
        filename: function (pathData) {
            return pathData.chunk.name === 'server'
                ? '[name].js'
                : '[name]/[hash].[name].js';
        },
        path: path.resolve(__dirname, 'dist'),
        hashSalt: Math.random().toString()
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|mjs|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'My App',
        //     template: './src/index.html'
        // }),
        new bundleJsFile({})
        // new webpack.DefinePlugin({
        //     HASH: hash
        // })
    ]
    // node: {
    //     fs: 'empty',
    //     net: 'empty'
    // }
};
