const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    devServer: {
        static: false,
        compress: true,
        port: 666,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
}