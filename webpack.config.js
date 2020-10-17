const path = require('path');
const pkg = require("./package.json");
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'index.js',
        libraryTarget: 'commonjs'
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
    ]
}