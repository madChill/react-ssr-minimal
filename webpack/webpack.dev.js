const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('./plugin/nodemonRunner');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodeMon = require('nodemon-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');
module.exports = () => {
    return {
        mode: 'development',
        target: 'node',
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
            path: path.resolve(__dirname, '../dist'),
            hashSalt: Math.random().toString()
        },
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '/public/'
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ],
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
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
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
                linkType: 'text/css',
                chunkFilename: '[id].css',
                filename: 'public/[hash].[name].css'
            }),
            new NodeMon({
                script: './dist/server.js',
                watch: path.resolve('./dist'),
                env: {
                    NODE_ENV: 'development'
                },
                sourceMaps: true
            })
        ]
    };
};
