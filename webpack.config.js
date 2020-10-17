var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
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
    }
}