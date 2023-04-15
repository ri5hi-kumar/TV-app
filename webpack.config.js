const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]
}