const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/client/index.tsx",
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "dist", "client"),
        filename: "[name].js",
        library: "WordSpeed",
        libraryTarget: "umd"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'public', 'index.html'),
            // favicon: path.join(__dirname, 'public', 'favicon.ico')
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: false, // disables minify
        runtimeChunk: true,
        splitChunks: {
            chunks: "all",
            minSize: 0,
            cacheGroups: {
                react: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "react",
                    chunks: "all"
                },
                material: {
                    test: /[\\/]node_modules[\\/]@mui[\\/]/,
                    name: "material",
                    chunks: "all"
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    { loader: 'css-loader', options: { url: true }},
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/inline"
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                type: "asset"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    }
};