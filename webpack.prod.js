const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.common.js')
const constants = require('./webpack.constants.js')


module.exports = merge.smart(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader].concat(constants.cssLoaders),
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks:{
            cacheGroups:{
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({}),
            new OptimizeCSSAssetsPlugin({}),
        ],
    }
})
