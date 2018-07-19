const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const constants = require('./webpack.constants.js')


module.exports = merge.smart(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: constants.buildPath,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader'].concat(constants.cssLoaders),
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
})
