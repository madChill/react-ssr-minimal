const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        mode: 'development',
        target: 'node',
        cache: false,
        devtool: 'inline-source-map',
        entry: {
            client: './src/client.js',
            server: './index.js'
        },
        output: {
            filename: function (pathData) {
                return pathData.chunk.name === 'server'
                    ? '[name].js'
                    : 'public/[hash].[name].js';
            },
            path: path.resolve(__dirname, 'dist'),
            hashSalt: Math.random().toString()
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                    exclude: /node_modules/
                },
                {
                    test: /\.(js|mjs|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ]
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new CopyPlugin({
                patterns: [{ from: 'public', to: 'public' }]
            }),
            new MiniCssExtractPlugin({
                linkType: 'text/css'
            }),
            new NodemonPlugin({
                script: './webpack/dist/server.js',
                watch: path.resolve('./webpack/dist'),
                env: {
                    NODE_ENV: 'development'
                }
            })
        ]
    };
};
