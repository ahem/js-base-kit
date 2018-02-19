// @flow
import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (_: any, { mode }: { mode: string }) => ({
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '_build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname,
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.scss$/,
                include: __dirname,
                use: [
                    mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
    devServer: {
        overlay: { warnings: true, errors: true },
    },
    devtool: 'cheap-source-map',
});
