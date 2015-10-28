var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './client/app/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'scripts.js'
    },
    devtool: 'sourcemap',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: function () {
        return [autoprefixer];
    }
};