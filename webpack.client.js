const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    return {
        mode: 'development',
        cache: false,
        entry: {
            client: './src/client.js'
        },
        output: {
            filename: '[hash].[name].js',
            path: path.resolve(__dirname, 'dist-client'),
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
            new HtmlWebpackPlugin({
                templateContent: `
                    <html>
                    <body>
                        <div id="react-root"></div>
                    </body>
                    </html>
                `
            })
            // new webpack.DefinePlugin({
            //     HASH: 'hash'
            // })
        ],
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist-client'),
            compress: true,
            port: 9000
        }
    };
};
