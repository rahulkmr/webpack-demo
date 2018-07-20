const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const constants = require('./webpack.constants.js')


module.exports = {
    entry: {
        bundle: ['./src/scripts/index.js', './src/styles/base.scss'],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, constants.buildPath),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            cacheDirectory: true,
                        }
                    },
                    'eslint-loader',
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: constants.cssLoaders,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([constants.buildPath]),
        new HtmlWebpackPlugin({
            title: 'Asset Management'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin(),
    ],
}
