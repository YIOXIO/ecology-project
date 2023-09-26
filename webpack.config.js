const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        about: './src/about.js',
        news: './src/news.js',
        mmkk: './src/mmkk.js',
        post: './src/post.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].js',
        publicPath: ''
    },

    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        open: true,
        port: 8082
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/images/favicon.ico'
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: './src/news.html',
            filename: 'news.html',
            chunks: ['news']
        }),
        new HtmlWebpackPlugin({
            template: './src/mmkk.html',
            filename: 'mmkk.html',
            chunks: ['mmkk']
        }),
        new HtmlWebpackPlugin({
            template: './src/post.html',
            filename: 'post.html',
            chunks: ['post']
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ]
};