const path = require('path');
const  HtmlWepackPlugin = require('html-webpack-plugin')

module.exprots = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    modules: {
        rules: [
            {
                test: /\.(js | jsx)$/,
                exclude: /node_modules/,
                use: {
                    loaders: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    {loader: 'html-loader'}
                ]
            }
        ]
    },
    Pluggins: [
        new HtmlWepackPlugin ({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006
    }
}