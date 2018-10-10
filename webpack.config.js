module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react', 'es2015', 'stage-1']
                    }
                }
            }
        ]
    }
}