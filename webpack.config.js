const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'public',
        hot:true,
        port:8080
    },
    module:{
        rules:[
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    },
                }
            },
            {
                exclude: /node_modules/,
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({template: './src/index.html'})
    ],
    devtool: 'source-map'
}