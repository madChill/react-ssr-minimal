const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
    const pathServer = env.production ? './bin/prod.js' : './src/server.js';
    const devtool = env.production ? {} : { devtool: 'inline-source-map' };
    const mode = env.production ? 'production' : 'development';
    return {
        mode,
        target: 'node',
        cache: false,
        entry: {
            client: './src/client.js',
            server: pathServer
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
                    use: ['style-loader', 'css-loader']
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
            })
        ],
        ...devtool
    };
};
