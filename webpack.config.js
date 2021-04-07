const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const hash = Math.random().toString();
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // entry: './src/client.js',
    entry: {
        client:'./src/client.js',
        server: './index.js'
    },
    output: {
        filename: `${hash}.[id].bundle.js`,
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
                // |ts|tsx
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
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html'
    }),
    new webpack.DefinePlugin({
        HASH: hash
     })
    ],
    node: {
        fs: 'empty',
        net: 'empty'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
