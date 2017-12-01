const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path:__dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                  })
            }
        ],
    },
    devServer: {
        contentBase:__dirname + "/dist",
        compress: true,
        // port: 9000,
        stats: "errors-only",
        open: true
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: '<%= htmlWebpackPlugin.options.title %>',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/project.html'
        }),
        new ExtractTextPlugin("app.css")
    ]
};