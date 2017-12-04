const HtmlWebpackPlugin = require('html-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.js',
        contact: './src/contact.js'
    },
    output: {
        path:__dirname + '/dist',
        filename: '[name].bundle.js'
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"]
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
            title: 'Webpack Starter Kit',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            excludeChunks: ['contact'],
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.html'
        }),
        // new FaviconsWebpackPlugin('favicon.png'),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};