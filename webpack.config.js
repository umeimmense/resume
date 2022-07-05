/* webpack.config.js
 * @ fuyiyang
 */
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: ['./src/entry.js']
    },
    output: {
        filename: 'static/[name].js?[hash:6]',
        path: path.resolve(__dirname)
    },
    devServer: {
        static: path.resolve(__dirname)
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'head',
            minify: {
                collapseWhitespace: true,
                // keepClosingSlash: true,
                // removeComments: true,
                // removeRedundantAttributes: true,
                // removeScriptTypeAttributes: true,
                // removeStyleLinkTypeAttributes: true,
                // useShortDoctype: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/[name].[ext]?[hash:6]'
                        }
                    },
                    { // 压缩图片：https://github.com/tcoopman/image-webpack-loader
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'static/[name].[ext]?[hash:6]'
                    }
                }
            }
        ]
    }
};
