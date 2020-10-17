const path = require('path');
const pkg = require("./package.json");
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: {
        "index": './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader:'babel-loader'
                }
            }
        ]
    },
    externals: Object.keys(pkg.dependencies).concat(Object.keys(pkg.peerDependencies)),
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(pkg.version)
        })
    ],
    optimization: {
        minimize: false
    }
}